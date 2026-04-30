import shutil
import os

source = r'D:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html'
dest = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

try:
    # Read as UTF-8
    with open(source, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Write as UTF-8 with BOM (utf-8-sig in Python)
    with open(dest, 'w', encoding='utf-8-sig') as f:
        f.write(content)
    
    print(f"Successfully copied from {source} to {dest} with UTF-8-BOM")
except Exception as e:
    print(f"Error: {e}")
