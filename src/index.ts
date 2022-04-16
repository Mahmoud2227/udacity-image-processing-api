import path from 'path';
import fs from 'fs';

import express from 'express';

import routes from './routes';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, (): void => {
    const thumbFolderPath = path.join(__dirname, '../assets/thumb');
    const folderExists = fs.existsSync(thumbFolderPath);
    try {
        if (!folderExists) {
            fs.mkdirSync(thumbFolderPath);
        }
    } catch (err) {
        console.error(err);
    }
    console.log(`Server is up on port ${port}`);
});

export default app;
