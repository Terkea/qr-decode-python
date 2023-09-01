#!/usr/bin/env node

const decodeQRCode = require("./index.js");
const imagePath = process.argv[2];

if (!imagePath) {
  console.error("Please provide a path to the QR image.");
  process.exit(1);
}

console.log(decodeQRCode(imagePath));
