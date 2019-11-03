"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello, World!');
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var jsonParser = body_parser_1.default.json();
var urlEncodedParser = body_parser_1.default.urlencoded({ extended: false });
/*
import * as bodyparser from "body-parser";
export const jsonParser = bodyparser.json();
export const urlEncodedParser = bodyparser.urlencoded({extended: true});
*/
app.get('/brokers', function (req, res, next) {
    console.log('brokers');
    res.send('Brokers go here!');
});
app.get('/brokers/:id', function (req, res, next) {
    var brokerId = req.params.id;
    console.log("Broker with id: " + brokerId);
    res.send("Broker with id: \"" + brokerId + "\" goes here!");
});
app.delete('/brokers/:id', function (req, res, next) {
    var brokerId = req.params.id;
    console.log("Delete broker with id: " + brokerId);
    res.send("Delete broker with id: \"" + brokerId + "\"!");
});
app.post('/brokers', jsonParser, function (req, res, next) {
    console.log("Add a new broker");
    console.log(req.body);
    res.json({ "testx": "just testx" });
});
app.put('/brokers/:id', jsonParser, function (req, res, next) {
    var brokerId = req.params.id;
    console.log("Update (replace) broker with id: " + brokerId);
    res.send("Update (replace) broker with id: \"" + brokerId + "\"!");
});
app.patch('/brokers/:id', jsonParser, function (req, res, next) {
    var brokerId = req.params.id;
    console.log("Update (only included fields) broker with id: " + brokerId);
    res.send("Update (only included fields) broker with id: \"" + brokerId + "\"!");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server started and listening on port: " + PORT);
});
