const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniquePrefix + '-' + file.originalname);
    }
});

const fileFilter = function (req, file, cb) {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


const upload = multer(
    {
        storage,
        fileFilter
    }
);


module.exports = upload;
