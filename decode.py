import cv2
from pyzbar.pyzbar import decode
import sys

def decode_qr_code(image_path):
    try:
        # Read the image with OpenCV
        image = cv2.imread(image_path)
        
        # Check if image is loaded correctly
        if image is None:
            print(f"Error: Couldn't load image at {image_path}. Please check the path and try again.")
            return
        
        # Decode the QR Code
        decoded_objects = decode(image)
        
        if not decoded_objects:
            print("No QR codes found in the image.")
            return

        for obj in decoded_objects:
            print(obj.data.decode('utf-8'))

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 script_name.py <path_to_qr_image>")
        sys.exit(1)

    # Get the image path from the command-line argument
    image_path = sys.argv[1]
    decode_qr_code(image_path)
