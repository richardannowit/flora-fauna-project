const multer = require('multer');
const path = require('path');

class upLoadFile{

    upLoad(){
        const storage = multer.diskStorage({
            destination: `upload`,
            filename: function(req, file, callback) {
                callback(null, `${file.fieldname}${path.extname(file.originalname)}`);
            }
        });
        const upload = multer({storage: storage});
        return upload;
    }
}

module.exports = new upLoadFile;