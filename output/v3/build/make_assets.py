"""Prepare image assets for the v3 deck (docs/19-presentation-structure.md).

Clean diff theme: only photos, screenshots, the maintenance illustration and QR
codes are images. Everything else is drawn as native PowerPoint shapes.

Run with a Python that has Pillow and qrcode installed:
    python output/v3/build/make_assets.py
"""

import io
import os
import shutil
import zipfile

import qrcode
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.normpath(os.path.join(HERE, "..", "assets"))
KUOPIO = os.path.normpath(os.path.join(HERE, "..", "..", "..", "..", "kuopio-pelaa-2026", "pptx", "KuopioPelaaEsitys.pptx"))

# Personal photos and SuomiWoW screenshots that already live in the Kuopio deck.
KUOPIO_MEDIA = {
    "image17.jpeg": ("bio-1.jpg", 1400),
    "image109.png": ("suomiwow-logo.png", 800),
    "image110.png": ("suomiwow-progress.png", 1920),
}

QRS = {
    "qr-gallup.png": "https://gallup.koodattu.dev",
    "qr-maanantai.png": "https://github.com/Koodattu/lakeus-devaus-2026/blob/main/materiaalit/maanantain-kokeilu.md",
}


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)
    z = zipfile.ZipFile(KUOPIO)
    for src, (dst, max_side) in KUOPIO_MEDIA.items():
        im = Image.open(io.BytesIO(z.read("ppt/media/" + src)))
        im.thumbnail((max_side, max_side))
        path = os.path.join(OUT, dst)
        if dst.endswith(".jpg"):
            im.convert("RGB").save(path, quality=86)
        else:
            im.save(path, optimize=True)
    # Round avatar crop of the bio photo (used on title, meme, comic and closing slides).
    bio = Image.open(os.path.join(OUT, "bio-1.jpg"))
    w, h = bio.size
    side, cx, cy = int(w * 0.57), int(w * 0.58), int(h * 0.40)
    bio.crop((cx - side // 2, cy - side // 2, cx + side // 2, cy + side // 2)).resize((800, 800)).save(os.path.join(OUT, "avatar.jpg"), quality=88)
    shutil.copy(os.path.join(HERE, "..", "..", "assets", "maintenance-illustration.png"), os.path.join(OUT, "maintenance-illustration.png"))
    for name, url in QRS.items():
        q = qrcode.QRCode(border=2, box_size=16, error_correction=qrcode.constants.ERROR_CORRECT_M)
        q.add_data(url)
        q.make(fit=True)
        q.make_image(fill_color="#111827", back_color="white").save(os.path.join(OUT, name))
    print("assets in", OUT)


if __name__ == "__main__":
    main()
