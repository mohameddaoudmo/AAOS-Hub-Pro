source = r'D:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html'
dest = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

def fix_arabic(text):
    try:
        # If it's mojibake where UTF-8 was read as CP1256 and saved as UTF-8 again
        return text.encode('cp1252').decode('utf-8')
    except:
        try:
            # Try the other way: UTF-8 read as CP1256
            return text.encode('utf-8').decode('cp1256')
        except:
            return text

try:
    with open(source, 'rb') as f:
        data = f.read()
    
    # Try common mojibake reversal
    # If the file looks like 'ط§ظ„ط¯ظ„ظٹظ„' when read as UTF-8:
    # It means the original UTF-8 bytes were read as CP1256 and saved.
    
    # Let's try to decode as UTF-8 first (getting the 'ط§ظ„' string)
    text = data.decode('utf-8', errors='ignore')
    
    # Now, 'ط' is 0xD8 in CP1256.
    # We want to convert 'ط' back to byte 0xD8.
    fixed_data = text.encode('cp1256', errors='ignore')
    
    # Now decode the resulting bytes as UTF-8
    final_text = fixed_data.decode('utf-8', errors='ignore')
    
    with open(dest, 'w', encoding='utf-8-sig', newline='') as f:
        f.write(final_text)
    
    print("Successfully un-mojibaked and saved as UTF-8-BOM")
except Exception as e:
    print(f"Error: {e}")
