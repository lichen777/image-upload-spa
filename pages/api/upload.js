import nextConnect from 'next-connect';
import multer from 'multer';
import {FILE_DIR} from './utils';

const upload = multer({
  storage: multer.diskStorage({
    destination: FILE_DIR,
    filename: (req, file, cb) => {
      cb(null, file.originalname)
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