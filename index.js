const { execSync } = require("child_process");

function decodeQRCode(imagePath) {
  try {
    // Execute the Python script
    const output = execSync(`python3 decoder.py ${imagePath}`);
    return output.toString();
  } catch (err) {
    throw new Error("Failed to decode QR code:", err);
  }
}

module.exports = decodeQRCode;
