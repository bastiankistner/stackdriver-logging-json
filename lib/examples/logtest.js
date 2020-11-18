"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("@google-cloud/logging");
const node_fetch_1 = __importDefault(require("node-fetch"));
const entry_1 = require("./entry");
const format_1 = require("../format");
const entry = entry_1.createSampleEntry();
async function writeToClient() {
    const { metadata, data } = entry;
    const loggingClientEntry = new logging_1.Entry(metadata, data);
    const loggingClient = new logging_1.Logging();
    const logger = loggingClient.log('my-logger');
    const result = await logger.write(loggingClientEntry);
    console.log(loggingClientEntry);
    console.log(result);
}
async function writeToFluentBit() {
    const useLocalhost = false;
    const useStdErr = false;
    const url = useLocalhost ? 'http://localhost:8080/test' : 'https://graphql.sanalytics.io/test';
    const body = format_1.entryToFluentBit130(entry);
    const response = await node_fetch_1.default(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json',
            warning: useStdErr ? 'true' : 'false',
        },
    });
    console.log({ response });
    const result = await response.json();
    console.log(result);
}
async function run() {
    await writeToClient();
    await writeToFluentBit();
}
void run();
//# sourceMappingURL=logtest.js.map