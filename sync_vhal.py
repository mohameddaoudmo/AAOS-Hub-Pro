import os

source = r'D:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html'
dest = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

try:
    # Read as binary
    with open(source, 'rb') as f:
        data = f.read()
    
    # Write to destination as binary
    with open(dest, 'wb') as f:
        f.write(data)
    
    # Now, try to detect if it needs a BOM to be "sound" on Windows
    # If it's already UTF-8, adding a BOM is safe and helpful for Windows editors/browsers.
    if not data.startswith(b'\xef\xbb\xbf'):
        with open(dest, 'wb') as f:
            f.write(b'\xef\xbb\xbf' + data)
    
    print(f"Successfully synced content from {source} to {dest} with UTF-8 BOM.")
except Exception as e:
    print(f"Error: {e}")
