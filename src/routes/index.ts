import path from 'path';
import fs from 'fs';

import express from 'express';

import resizeImage from '../utils/imageProcessing';

const routes = express.Router();

routes.get('/', async (req: express.Request, res: express.Response): Promise<unknown> => {
    const { fileName, width, height } = req.query;

    if (!fileName || !width || !height) {
        return res.send('please make sure that you entered all the parameters');
    }

    const originalImagePath = path.join(__dirname, '../../assets/images', `${fileName as string}.jpg`);
    const editedImagePath = path.join(__dirname, '../../assets/thumb', `${fileName as string}-${width}x${height}.jpg`);

    // check if the image that the user want to resize exists
    const originalImageExists = fs.existsSync(originalImagePath);
    if (!originalImageExists) {
        return res.send('Image not found!');
    }

    // check if the image exists with same width and height
    const editedImageExists = fs.existsSync(editedImagePath);

    if (editedImageExists) {
        //send the same image if it exists
        return res.sendFile(editedImagePath);
    }

    // if the image does not exist, resize it
    try {
        await resizeImage({
            width: +(width as string) as number,
            height: +(height as string) as number,
            originalImagePath,
            editedImagePath,
        });
    } catch (error) {
        return res.send('Error occurred during processing the image!');
    }
    res.sendFile(editedImagePath);
});

export default routes;
