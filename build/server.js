"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello, World!');
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const jsonParser = body_parser_1.default.json();
const urlEncodedParser = body_parser_1.default.urlencoded({ extended: false });
app.get('/brokers', (req, res, next) => {
    console.log('brokers');
    res.send('Brokers go here!');
});
app.get('/brokers/:id', (req, res, next) => {
    const brokerId = req.params.id;
    console.log(`Broker with id: ${brokerId}`);
    res.send(`Broker with id: "${brokerId}" goes here!`);
});
app.delete('/brokers/:id', (req, res, next) => {
    const brokerId = req.params.id;
    console.log(`Delete broker with id: ${brokerId}`);
    res.send(`Delete broker with id: "${brokerId}"!`);
});
app.post('/brokers', jsonParser, (req, res, next) => {
    console.log(`Add a new broker`);
    console.log(req.body);
    res.json({ "testx": "just testx" });
});
app.put('/brokers/:id', jsonParser, (req, res, next) => {
    const brokerId = req.params.id;
    console.log(`Update (replace) broker with id: ${brokerId}`);
    res.send(`Update (replace) broker with id: "${brokerId}"!`);
});
app.patch('/brokers/:id', jsonParser, (req, res, next) => {
    const brokerId = req.params.id;
    console.log(`Update (only included fields) broker with id: ${brokerId}`);
    res.send(`Update (only included fields) broker with id: "${brokerId}"!`);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started and listening on port: ${PORT}`);
});
