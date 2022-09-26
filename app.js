//include all required modules in order to initiate a project
import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 3000;
const DB_URL = 'mongodb+srv://Arthur:Weareforever12@cluster0.dkel6qu.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use(express.static('static'));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server is Working on ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

startApp();