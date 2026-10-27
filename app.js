import express, { urlencoded } from 'express';

const app = express();

const PORT = 3006;

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit-order', (req,res) => {
    const submission = req.body;
    submission['timestamp'] = new Date();
    console.log(submission);

    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});