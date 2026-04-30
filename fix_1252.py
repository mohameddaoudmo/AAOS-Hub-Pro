import os

source = r'd:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html'
dest = r'd:\AAOS-Hub-Pro\guides\vhal-guide-arabic.html'

def un_mojibake(text):
    try:
        # Common pattern: UTF-8 bytes interpreted as Windows-1252
        return text.encode('windows-1252').decode('utf-8')
    except:
        return text

try:
    with open(source, 'rb') as f:
        data = f.read()
    
    text = data.decode('utf-8', errors='ignore')
    fixed_text = un_mojibake(text)
    
    with open(dest, 'w', encoding='utf-8-sig', newline='') as f:
        f.write(fixed_text)
    print(f"Fixed with windows-1252 and saved to {dest}")

except Exception as e:
    print(f"Error: {e}")
