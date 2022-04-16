import sharp from 'sharp';

interface ImageParams {
    width: number;
    height: number;
    originalImagePath: string;
    editedImagePath: string;
}

const resizeImage = async ({ width, height, originalImagePath, editedImagePath }: ImageParams): Promise<void> => {
    await sharp(originalImagePath).resize(width, height).toFile(editedImagePath);
};

export default resizeImage;
