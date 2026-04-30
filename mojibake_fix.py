import os

source = r'd:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html'
dest = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

try:
    with open(source, 'rb') as f:
        data = f.read()
    
    text = data.decode('utf-8', errors='ignore')
    
    # Check for common mojibake pattern: 'ط§ظ„' (which is the UTF-8 bytes for 'ال' read as CP1256)
    if 'ط§ظ„' in text:
        print("Mojibake detected! Attempting fix...")
        # Convert the mojibake string back to bytes using CP1256
        # and then decode those bytes as UTF-8
        try:
            fixed_bytes = text.encode('windows-1256')
            fixed_text = fixed_bytes.decode('utf-8')
            text = fixed_text
            print("Fix applied successfully.")
        except Exception as e:
            print(f"Fix failed: {e}")
    else:
        print("No common mojibake pattern found.")

    with open(dest, 'w', encoding='utf-8-sig', newline='') as f:
        f.write(text)
    print(f"Saved to {dest} as UTF-8-BOM")

except Exception as e:
    print(f"Error: {e}")
