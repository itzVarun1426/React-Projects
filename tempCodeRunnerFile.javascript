const qrcode = require('qrcode');
const fs = require('fs');

async function generateQRCode(url, filename) {
    try {
        //address to store the pdfs
        let location = "D:\varun\DSA in December\riddle\QR\A";
        const qrCodeBuffer = await qrcode.toBuffer(url);
        fs.writeFileSync(location + filename, qrCodeBuffer);
        console.log(":)");
    } catch (error) {
        console.error("E:", error);
    }
}


//reload this array with 6 links 
let links = [
    "https://drive.google.com/file/d/1wjOrDLSErPC6N4y0UGwb9M--QzFlf6mL/view?usp=drive_link",
    "https://drive.google.com/file/d/1JGrdqrA_crx-Rg-mXW5XC9BwEXMyKSer/view?usp=drive_link",
    "https://drive.google.com/file/d/16UfZJ-HsASS2c3Co-dMVfBQq_XaFc8Oq/view?usp=drive_link",
    "https://drive.google.com/file/d/14BJQXr3IZV5c6EP2g09jn_o_ctg0iMxu/view?usp=drive_link",
    "https://drive.google.com/file/d/1yly_RXQxVdPzfwUATMPR3wcZyD7uaWAk/view?usp=drive_link",
    "https://drive.google.com/file/d/1b30APej-2v51cyv75afz9RnXzmsnoYQ1/view?usp=drive_link",
]

let Chars = ["A", "B", "C", "D", "E", "F", "G", "H"]
let nums = ["1", "2", "3", "4", "5", "6"]

// change char index for every group of link 

for (let i = 0; i < 6; i++) {
    let name = Chars[0] + nums[i] + ".png";
    generateQRCode(links[i], name);
}