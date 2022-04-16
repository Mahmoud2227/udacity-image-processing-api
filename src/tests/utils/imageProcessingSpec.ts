import resizeImage from '../../utils/imageProcessing';

it("rejects promise if the image couldn't be processed", async (): Promise<void> => {
    const parameters = {
        width: 100,
        height: 100,
        originalImagePath: '',
        editedImagePath: '',
    };

    await expectAsync(resizeImage(parameters)).toBeRejected();
});
