import glob
for fpath in glob.glob('src/content/**/*.mdx', recursive=True):
    with open(fpath, 'rb') as f:
        content = f.read()
    if content.startswith(b'\xef\xbb\xbf'):
        content = content[3:]
        with open(fpath, 'wb') as f:
            f.write(content)
        print(f'Removed BOM from {fpath}')
