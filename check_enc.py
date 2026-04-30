import sys

def check_encoding(path):
    with open(path, 'rb') as f:
        data = f.read()
    
    encodings = ['utf-8', 'windows-1256', 'utf-8-sig', 'iso-8859-6']
    for enc in encodings:
        try:
            text = data.decode(enc)
            print(f"--- Encoding: {enc} ---")
            print(text[:200])
            print("\n")
        except Exception as e:
            print(f"--- Encoding: {enc} failed: {e} ---")


if __name__ == "__main__":
    check_encoding(r'D:\learn\AAOS_Hub_Pro\guides\vhal-guide-arabic.html')
