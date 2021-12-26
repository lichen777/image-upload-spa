import nextConnect from 'next-connect';
import path from 'path';
import multer from 'multer';
import {FILE_DIR} from './utils';

const upload = multer({
  storage: multer.diskStorage({
    destination: FILE_DIR,
    filename: (req, file, cb) => {
      const parsedPath = path.parse(file.originalname);
      cb(null, parsedPath.name + '-' + Date.now() + parsedPath.ext)
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.error(error)
    res.status(501).json({ error: `Image upload is failed! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('image'));

apiRoute.post((req, res) => {
  res.status(200).json({ data: req.file });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false
  },
};