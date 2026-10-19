"""Remove duplicate media parts from a .pptx (pptxgenjs embeds one copy per use)."""
import hashlib, re, shutil, sys, zipfile

src = sys.argv[1]
tmp = src + ".tmp"
zin = zipfile.ZipFile(src)
names = zin.namelist()
canon, drop = {}, set()
for n in names:
    if n.startswith("ppt/media/"):
        h = hashlib.sha1(zin.read(n)).hexdigest()
        if h in canon:
            drop.add(n)
            canon[n] = canon[h]
        else:
            canon[h] = n
            canon[n] = n
zout = zipfile.ZipFile(tmp, "w", zipfile.ZIP_DEFLATED)
for n in names:
    if n in drop:
        continue
    data = zin.read(n)
    if n.endswith(".rels"):
        txt = data.decode("utf8")
        def fix(m):
            t = m.group(1)
            full = "ppt/media/" + t.split("/")[-1]
            if full in drop:
                return 'Target="../media/' + canon[full].split("/")[-1] + '"'
            return m.group(0)
        txt = re.sub(r'Target="(\.\./media/[^"]+)"', fix, txt)
        data = txt.encode("utf8")
    zout.writestr(zin.getinfo(n), data)
zout.close()
shutil.move(tmp, src)
print(f"removed {len(drop)} duplicate media parts")
