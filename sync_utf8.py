import os

source = r'D:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html'
dest = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

try:
    with open(source, 'rb') as f:
        data = f.read()
    
    # Simple decode as UTF-8
    text = data.decode('utf-8')
    
    with open(dest, 'w', encoding='utf-8-sig', newline='') as f:
        f.write(text)
    print("Saved as UTF-8 with BOM.")

except Exception as e:
    print(f"Error: {e}")
