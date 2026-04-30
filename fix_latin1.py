import os

source = r'D:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html'
dest = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

try:
    with open(source, 'rb') as f:
        data = f.read()
    
    # Try to reverse double encoding (latin-1 / cp1252)
    # The mojibake 'â€”' is em-dash in UTF-8 (E2 80 94) read as latin-1
    # E2 (â) 80 (€) 94 (”)
    
    text = data.decode('utf-8')
    fixed_bytes = text.encode('latin-1')
    fixed_text = fixed_bytes.decode('utf-8')
    
    with open(dest, 'w', encoding='utf-8-sig', newline='') as f:
        f.write(fixed_text)
    print("Successfully reversed double-encoding (latin-1) and saved.")

except Exception as e:
    print(f"Error: {e}")
