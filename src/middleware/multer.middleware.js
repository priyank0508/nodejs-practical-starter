const multer = require('multer');
const path = require('path');
const { AppError } = require('../exception/errorHandler');

const imageStorage = multer.diskStorage({
    // Destination to store image
    destination: (req, file, cb) => {
        cb(null,  path.join(__dirname , '../uploads'));
      },
    filename: (req, file, cb) => {
        console.log('file :>> ', file);
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const imageUpload = multer({
      storage: imageStorage,
      limits: {
          fileSize: 5000000, // 5000000 Bytes = 5 MB
        },
        fileFilter(req, file, cb) {
        console.log('imageStorage', imageStorage)
        console.log('file imageUpload :>> ', file);
      if (!file.originalname.match(/\.(png)$/)) {
         // upload only png and jpg format
        return cb(new AppError(401, 'Image should be .png'));
      }
      cb(undefined, true);
    },
  });

module.exports = imageUpload