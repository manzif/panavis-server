import multer from 'multer';

const storage = multer.memoryStorage();

const multerUploads = multer({ storage }).array('photos', 12);

export { multerUploads };