import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');
      const name = file.originalname
        .normalize('NFD')
        .replace(/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase();

      const filename = `${hash}-${name}`;

      callback(null, filename);
    },
  }),
};
