# **`qr-decode-python`**

## **Overview**

**`qr-decode-python`** is a Node.js package designed to overcome the challenges many face when trying to decode QR images using various libraries in Node.js. While the JavaScript ecosystem offers a plethora of options for QR code generation and parsing, decoding certain QR images proves to be a challenge. Libraries like **`qrcode`**, **`qr-image`**, and **`node-zxing`** are popular, but in some scenarios, they might fall short.

This package essentially acts as a bridge between Node.js and Python3, utilizing the robust QR decoding capabilities of Python. It serves as a wrapper around Python3 code to decode QR images.

## **Prerequisites**

1. **Node.js**: Ensure you have a recent version of Node.js installed on your system.
2. **Python3**: This package heavily relies on Python3 for its QR decoding capabilities. Make sure Python3 is installed and accessible from the command line as **`python3`**.
3. **Python Libraries**: The following Python libraries are essential for the decoder to function correctly:
    - **`cv2`**: Used for image processing.
    - **`pyzbar`**: Used for QR code decoding.
    

## **Installation**

```bash
npm install qr-decode-python

```

## **Usage**

Here's a quick example on how you can use **`qr-decode-python`**:

```jsx
const decodeQRCode = require("qr-decode-python");

(async () => {
    try {
        const result = await decodeQRCode("path/to/your/image.png");
        console.log("Decoded QR Code:", result);
    } catch (error) {
        console.error("Error decoding the QR Code:", error.message);
    }
})();

```

## **Why this package?**

When working with QR codes in the Node.js landscape, many developers rely on existing libraries to get the job done. However, there's a recurring issue that some QR images simply can't be decoded using the available options. After trying out various packages and diving deep into their capabilities and limitations, the need for a more reliable method became evident.

With Python being versatile and offering powerful image processing libraries, it made sense to leverage its capabilities to ensure reliable QR decoding. Hence, this package was born.

## **Conclusion**

If you're facing challenges decoding QR images in Node.js, give **`qr-decode-python`** a try. With the reliability of Python3 under the hood, this package offers a robust solution for your QR decoding needs.