import csv
import os
import requests
from django.core.files.base import ContentFile
from django.core.management.base import BaseCommand
from items.models import Category, ItemType, Size, Condition, Tag, Item, ItemImage
from accounts.models import Profile


class Command(BaseCommand):
    help = "Import products from a CSV file"

    def add_arguments(self, parser):
        parser.add_argument("csv_file", type=str)

    def handle(self, *args, **options):
        csv_path = options["csv_file"]
        if not os.path.exists(csv_path):
            self.stdout.write(self.style.ERROR(f"File not found: {csv_path}"))
            return

        uploader = Profile.objects.first()  # Adjust as needed

        with open(csv_path, newline="", encoding="utf-8") as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                try:
                    # Extract relevant fields from CSV
                    title = row["name"].strip()
                    description = row["description"].strip()
                    price = float(row["price"]) if row["price"] else 0
                    category_names = [
                        c.strip() for c in row["collection"].split(";") if c.strip()
                    ]
                    size_name = "Medium"  # default or extract if present
                    condition_name = "New"  # default or extract if present
                    type_name = "Jacket"  # default or extract if present
                    tag_names = [row["ribbon"].strip()] if row.get("ribbon") else []
                    image_url = row["productImageUrl"].strip()

                    # Get or create related objects
                    category = None
                    if category_names:
                        category, _ = Category.objects.get_or_create(
                            name=category_names[0]
                        )

                    size, _ = Size.objects.get_or_create(name=size_name)
                    condition, _ = Condition.objects.get_or_create(name=condition_name)
                    item_type, _ = ItemType.objects.get_or_create(name=type_name)

                    # Create Item
                    item = Item.objects.create(
                        title=title,
                        description=description,
                        category=category,
                        uploader=uploader,
                        type=item_type,
                        size=size,
                        condition=condition,
                        points=int(price),
                        is_verified=True,
                        is_published=True,
                    )

                    # Add tags
                    for tag_name in tag_names:
                        tag, _ = Tag.objects.get_or_create(name=tag_name)
                        item.tags.add(tag)

                    # Download & attach image
                    if image_url:
                        response = requests.get(image_url)
                        if response.status_code == 200:
                            image_name = os.path.basename(image_url.split("?")[0])
                            item_image = ItemImage(item=item)
                            item_image.image.save(
                                image_name, ContentFile(response.content), save=True
                            )
                        else:
                            self.stdout.write(
                                self.style.WARNING(
                                    f"Failed to download image: {image_url}"
                                )
                            )

                    self.stdout.write(self.style.SUCCESS(f"Imported: {title}"))

                except Exception as e:
                    self.stdout.write(self.style.ERROR(f"Error importing row: {e}"))
