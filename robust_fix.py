import os

source = r'd:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html'
dest = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

def fix_double_encoding(data):
    # Try to fix the case where UTF-8 was interpreted as CP1252 and then saved as UTF-8
    try:
        # text = data.decode('utf-8')
        # return text.encode('cp1252').decode('utf-8')
        pass
    except:
        pass
    return None

try:
    with open(source, 'rb') as f:
        data = f.read()
    
    # If it's already good Arabic in some encoding, let's find it.
    # We'll try to decode with several and check for Arabic characters.
    
    found_text = None
    # 1. Is it simple UTF-8?
    try:
        text = data.decode('utf-8')
        if any('\u0600' <= c <= '\u06FF' for c in text):
            print("Detected: Valid UTF-8 with Arabic")
            found_text = text
    except:
        pass
    
    if not found_text:
        # 2. Is it CP1256 (Arabic)?
        try:
            text = data.decode('windows-1256')
            if any('\u0600' <= c <= '\u06FF' for c in text):
                print("Detected: Windows-1256")
                found_text = text
        except:
            pass

    if not found_text:
        # 3. Is it double-encoded? (UTF-8 bytes saved as CP1252/Latin1)
        try:
            # First decode as UTF-8 (gets the mojibake string)
            text = data.decode('utf-8')
            # Now convert that mojibake string back to bytes using CP1252 (or CP1256)
            # and try to decode those bytes as UTF-8
            for enc in ['windows-1252', 'windows-1256']:
                try:
                    fixed_bytes = text.encode(enc)
                    fixed_text = fixed_bytes.decode('utf-8')
                    if any('\u0600' <= c <= '\u06FF' for c in fixed_text):
                        print(f"Detected: Double-encoded via {enc}")
                        found_text = fixed_text
                        break
                except:
                    continue
        except:
            pass

    if found_text:
        with open(dest, 'w', encoding='utf-8-sig', newline='') as f:
            f.write(found_text)
        print(f"Successfully fixed and saved to {dest}")
    else:
        # Fallback: just copy as is but try to save as UTF-8-BOM
        print("Could not detect Arabic pattern, copying as UTF-8-BOM")
        text = data.decode('utf-8', errors='ignore')
        with open(dest, 'w', encoding='utf-8-sig', newline='') as f:
            f.write(text)

except Exception as e:
    print(f"Error: {e}")
