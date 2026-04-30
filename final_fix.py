import os

path = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

try:
    with open(path, 'rb') as f:
        data = f.read()
    
    # Remove BOM if present
    if data.startswith(b'\xef\xbb\xbf'):
        data = data[3:]
    
    # Try to decode as UTF-8
    text = data.decode('utf-8', errors='replace')
    
    # If it contains mojibake patterns like 'ط§ظ„'
    # we need to reverse it.
    # The mojibake 'ط§ظ„' (D8 A7 D9 84) comes from UTF-8 bytes being read as CP1256.
    
    # Let's try to convert each char in the mojibake text back to its CP1256 byte
    # and then decode the resulting bytes as UTF-8.
    try:
        fixed_bytes = text.encode('windows-1256', errors='replace')
        fixed_text = fixed_bytes.decode('utf-8')
        if any('\u0600' <= c <= '\u06FF' for c in fixed_text):
            print("Successfully fixed double encoding!")
            text = fixed_text
    except Exception as e:
        print(f"Direct fix failed: {e}")
        # Try a more surgical approach if needed, but usually this works.

    with open(path, 'w', encoding='utf-8-sig', newline='') as f:
        f.write(text)
    print(f"Saved to {path} as UTF-8-BOM")

except Exception as e:
    print(f"Error: {e}")
