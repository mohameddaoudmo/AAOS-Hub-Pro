import os

def fix_encoding(filepath):
    try:
        with open(filepath, 'rb') as f:
            content = f.read()
        # The content was read as ANSI and written as UTF-8
        # Reversing the process:
        text = content.decode('utf-8-sig')
        # Try to recover original bytes. windows-1252 is better than iso-8859-1 for special chars.
        original_bytes = text.encode('windows-1252', errors='replace')
        fixed_text = original_bytes.decode('windows-1256', errors='replace')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_text)
        print(f"Fixed: {filepath}")
    except Exception as e:
        print(f"Failed: {filepath} - {e}")

for root, dirs, files in os.walk('d:\\learn\\AAOS_Hub_Pro'):
    for file in files:
        if file.endswith('.html'):
            fix_encoding(os.path.join(root, file))
