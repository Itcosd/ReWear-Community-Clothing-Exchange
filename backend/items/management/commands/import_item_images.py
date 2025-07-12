import csv
import os
import requests
from django.core.files.base import ContentFile
from django.core.management.base import BaseCommand
from items.models import Item, ItemImage  # adjust path if needed

IMAGE_PREFIX = "https://static.wixstatic.com/media/"


class Command(BaseCommand):
    help = "Import images for items from a CSV file and attach them as ItemImage"

    def add_arguments(self, parser):
        parser.add_argument("csv_file", type=str, help="Path to the CSV file")

    def handle(self, *args, **options):
        csv_file = options["csv_file"]
        success = 0
        skipped = 0
        failed = 0

        with open(csv_file, newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)

            for row in reader:
                product_name = row.get("name")
                image_id = row.get("productImageUrl")

                if not product_name or not image_id:
                    self.stdout.write(
                        self.style.WARNING(f"⚠️ Skipping row: missing name or image")
                    )
                    continue

                qs = Item.objects.filter(title__iexact=product_name)
                if not qs.exists():
                    self.stdout.write(
                        self.style.ERROR(f"❌ No item found for name: {product_name}")
                    )
                    failed += 1
                    continue

                if qs.count() > 1:
                    self.stdout.write(
                        self.style.WARNING(
                            f"⚠️ Multiple items found for name: {product_name}, using the first one (id={qs.first().id})"
                        )
                    )

                item = qs.first()

                # Check if item already has any ItemImage
                if ItemImage.objects.filter(item=item).exists():
                    self.stdout.write(
                        self.style.NOTICE(
                            f"ℹ️ Item '{product_name}' (id={item.id}) already has an image. Skipping."
                        )
                    )
                    skipped += 1
                    continue

                image_url = IMAGE_PREFIX + image_id
                try:
                    response = requests.get(image_url)
                    response.raise_for_status()
                except Exception as e:
                    self.stdout.write(
                        self.style.ERROR(
                            f"❌ Failed to download image for '{product_name}': {e}"
                        )
                    )
                    failed += 1
                    continue

                file_name = os.path.basename(image_id)
                item_image = ItemImage(item=item)
                item_image.image.save(file_name, ContentFile(response.content))
                item_image.save()
                self.stdout.write(
                    self.style.SUCCESS(
                        f"✅ Attached image {file_name} to item {item.id} as ItemImage"
                    )
                )
                success += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"\n✅ Done. Success: {success}, Skipped: {skipped}, Failed: {failed}"
            )
        )
