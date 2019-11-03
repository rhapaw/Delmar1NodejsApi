console.log('Hello, World!');


import express from 'express';
import bodyparser from 'body-parser';

const app = express();
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({extended: false});

/*
import * as bodyparser from "body-parser";
export const jsonParser = bodyparser.json();
export const urlEncodedParser = bodyparser.urlencoded({extended: true});
*/

app.get('/brokers', (req, res, next) => {
    console.log('brokers');
    res.send('Brokers go here!');
} );

app.get('/brokers/:id', (req, res, next) => {
    const brokerId = req.params.id;
    console.log(`Broker with id: ${brokerId}`);
    res.send(`Broker with id: "${brokerId}" goes here!`);
} );

app.delete('/brokers/:id', (req, res, next) => {
    const brokerId = req.params.id;
    console.log(`Delete broker with id: ${brokerId}`);
    res.send(`Delete broker with id: "${brokerId}"!`);
} );

app.post('/brokers', jsonParser, (req, res, next) => {
    console.log(`Add a new broker`);
    console.log(req.body);
    res.json({"testx": "just testx"});
} );

app.put('/brokers/:id', jsonParser, (req, res, next) => {
    const brokerId = req.params.id;
    console.log(`Update (replace) broker with id: ${brokerId}`);
    res.send(`Update (replace) broker with id: "${brokerId}"!`);
} );

app.patch('/brokers/:id', jsonParser, (req, res, next) => {
    const brokerId = req.params.id;
    console.log(`Update (only included fields) broker with id: ${brokerId}`);
    res.send(`Update (only included fields) broker with id: "${brokerId}"!`);
} );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started and listening on port: ${PORT}`);
} );