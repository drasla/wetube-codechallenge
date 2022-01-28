import multer from "multer";

export const textUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./static/text/");
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    })
});