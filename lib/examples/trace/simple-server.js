"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const logger_1 = require("./logger");
const app = express_1.default();
const loggingMiddleware = (req, res, next) => {
    req.log = logger_1.createLogger(req.headers['traceparent']);
    next();
};
const port = process.env.PORT || 6060;
app.get('/trace-01', async (req, res) => {
    req.log;
    const response = await node_fetch_1.default(`http://localhost:6061/trace-02`);
    res.send(`respond with ${await response.text()}`);
});
app.get('/trace-02', async (req, res) => {
    const response = await node_fetch_1.default(`http://localhost:6062/trace-03`);
    console.log(req.headers);
    res.send(`respond with ${await response.text()}`);
});
app.get('/trace-03', (req, res) => {
    console.log(req.headers);
    //
    res.send('ok');
});
app.get('*', (req, res) => {
    console.log('request received');
    res.send(`ok on ${req.path}`);
});
app.listen(port, () => {
    console.log(`Simple express server listening on http://localhost:${port}`);
});
//# sourceMappingURL=simple-server.js.map