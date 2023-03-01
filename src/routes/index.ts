
import express from 'express';
import path from 'path';
import {
  checkFileExists,
  insistDirectoryExists,
  resizeFile
} from '../utilities/imageFile';
const routes = express.Router();
routes.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const filename = req.query.f as string;
    const extension = req.query.x as string;
    const width = req.query.w as string;
    const height = req.query.h as string;
    if (
      filename === undefined ||
      extension === undefined ||
      width === undefined ||
      height === undefined
    ) {
      res.status(400).send(' ther is no parameter');
    } else {
      const w = parseInt(width) as number;
      const h = parseInt(height) as number;
      if (isNaN(w) || isNaN(h)) {
        res.status(400).send('Invalid parameters');
      } else {
        const extensionLowercase = extension.toLowerCase();
        const assetResourceName =
          path.join(__dirname, '../../assets/full/') +
          filename +
          '.' +
          extensionLowercase;
        const thumbnailDirectory = path.join(
          __dirname,
          '../../assets/thumbnail/'
        );
        const thumbnailResourceName =
          thumbnailDirectory +
          filename +
          '-' +
          width +
          'w-' +
          height +
          'h.' +
          extensionLowercase;
        const assetExists = await checkFileExists(assetResourceName);
        if (assetExists) {
          insistDirectoryExists(thumbnailDirectory);
          resizeFile(
            assetResourceName,
            parseInt(width),
            parseInt(height),
            thumbnailResourceName
          ).then((outputFileName) => {
            console.log('output file: ' + outputFileName);
            res.status(200).sendFile(outputFileName);
          });
        } else {
          res.status(404).send('Cant find  resource');
        }
      }
    }
  }
);
export default routes;
