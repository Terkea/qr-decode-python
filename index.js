const { exec } = require("child_process");
const path = require("path");

// This gives the absolute path to the decoder.py script within the package
const decoderPath = path.join(__dirname, "decoder.py");

function decodeQRCode(imagePath) {
  return new Promise((resolve, reject) => {
    exec(`python3 ${decoderPath} ${imagePath}`, (error, stdout, stderr) => {
      if (error) {
        reject(new Error("Failed to decode QR code: " + stderr));
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

module.exports = decodeQRCode;
