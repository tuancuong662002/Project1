const multer = require('multer');
const path = require('path');

const upload = multer({
    dest: path.join(__dirname, '../uploads'), // Đặt file tải lên trong thư mục uploads
});

module.exports = upload;
