import os

path = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

def fix_mojibake(data):
    # This function handles the specific case where UTF-8 bytes for Arabic 
    # were misinterpreted as CP1256 and then saved as UTF-8.
    try:
        # Step 1: Decode the current bytes as UTF-8 (getting the 'ط§ظ„' string)
        text = data.decode('utf-8')
        # Step 2: Convert each character back to its CP1256 byte equivalent
        # 'ط' (U+0637) -> 0xD8, 'ا' (U+0627) -> 0xA7, etc.
        bytes_1256 = text.encode('windows-1256')
        # Step 3: Decode those bytes as UTF-8 to get the real Arabic
        fixed_text = bytes_1256.decode('utf-8')
        return fixed_text
    except Exception as e:
        print(f"Fix error: {e}")
        return None

try:
    with open(path, 'rb') as f:
        data = f.read()
    
    if data.startswith(b'\xef\xbb\xbf'):
        data = data[3:]
    
    fixed_text = fix_mojibake(data)
    
    if fixed_text:
        # Save as UTF-8 with BOM
        with open(path, 'w', encoding='utf-8-sig', newline='') as f:
            f.write(fixed_text)
        print("Successfully fixed Arabic and saved as UTF-8-BOM")
    else:
        print("Could not fix Arabic automatically.")
except Exception as e:
    print(f"Error: {e}")
