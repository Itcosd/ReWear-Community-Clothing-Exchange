import csv
import os
import requests
from django.core.files.base import ContentFile
from django.core.management.base import BaseCommand
from items.models import Item, ItemImage

IMAGE_PREFIX = "https://static.wixstatic.com/media/"  # Adjust if needed


# ... keep the existing imports and class definition ...


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
            for row_number, row in enumerate(reader, start=1):
                product_name = row.get("name")
                image_id = row.get("productImageUrl")

                if not product_name or not image_id:
                    self.stdout.write(
                        self.style.WARNING(
                            f"⚠️ Row {row_number}: Missing name or image URL. Skipping."
                        )
                    )
                    skipped += 1
                    continue

                qs = Item.objects.filter(title__iexact=product_name)
                if not qs.exists():
                    self.stdout.write(
                        self.style.ERROR(
                            f"❌ Row {row_number}: No item found for name '{product_name}'"
                        )
                    )
                    failed += 1
                    continue

                if qs.count() > 1:
                    self.stdout.write(
                        self.style.WARNING(
                            f"⚠️ Row {row_number}: Multiple items found for '{product_name}', using first (id={qs.first().id})"
                        )
                    )
                item = qs.first()

                # Delete existing images for the item before adding new one
                existing_images = ItemImage.objects.filter(item=item)
                if existing_images.exists():
                    for img in existing_images:
                        # Delete the image file from storage
                        img.image.delete(save=False)
                        # Delete the ItemImage instance
                        img.delete()
                    self.stdout.write(
                        self.style.NOTICE(
                            f"ℹ️ Row {row_number}: Existing images for item '{product_name}' (id={item.id}) deleted."
                        )
                    )

                # Compose full URL
                if image_id.startswith("http://") or image_id.startswith("https://"):
                    image_url = image_id
                else:
                    image_url = IMAGE_PREFIX + image_id

                try:
                    response = requests.get(image_url, timeout=10)
                    response.raise_for_status()
                except Exception as e:
                    self.stdout.write(
                        self.style.ERROR(
                            f"❌ Row {row_number}: Failed to download image for '{product_name}': {e}"
                        )
                    )
                    failed += 1
                    continue

                file_name = os.path.basename(image_url.split("?")[0])

                try:
                    item_image = ItemImage(item=item)
                    item_image.image.save(file_name, ContentFile(response.content))
                    item_image.save()
                except Exception as e:
                    self.stdout.write(
                        self.style.ERROR(
                            f"❌ Row {row_number}: Failed to save image for '{product_name}': {e}"
                        )
                    )
                    failed += 1
                    continue

                self.stdout.write(
                    self.style.SUCCESS(
                        f"✅ Row {row_number}: Attached image '{file_name}' to item {item.id}"
                    )
                )
                success += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"\n✅ Done. Success: {success}, Skipped: {skipped}, Failed: {failed}"
            )
        )
