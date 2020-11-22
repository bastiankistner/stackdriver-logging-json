"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const jsdom_1 = require("jsdom");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const prettier_1 = require("prettier");
function createLabels(labels) {
    if (labels.length === 0)
        return '[]';
    return `['${labels.join(`', '`)}']`;
}
async function run() {
    const html = await (await node_fetch_1.default('https://cloud.google.com/logging/docs/api/v2/resource-list#resource-types')).text();
    const { document } = new jsdom_1.JSDOM(html).window;
    const [apiTable] = Array.from(document.querySelectorAll('table'));
    const [, ...apiRows] = Array.from(apiTable.querySelectorAll('tr'));
    const labelsForResource = apiRows.map((row) => {
        const [resourceColumn, labelsColumn] = Array.from(row.querySelectorAll('td'));
        const resource = resourceColumn.querySelector('code')?.textContent;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        const labels = Array.from(labelsColumn.querySelectorAll('code')).map((label) => label.textContent);
        return {
            resource,
            labels,
        };
    });
    labelsForResource.unshift({ resource: 'auto', labels: [] });
    const CONTENT = labelsForResource
        .map(({ resource, labels }) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `'${resource}': ${createLabels(labels)} as const`;
    })
        .join(',\n');
    const result = `
  export const LABELS_FOR_RESOURCES = {
  ${CONTENT}  
  } as const;
  `;
    const resourceFilePath = path.resolve(__dirname, '../src/__generated__', 'resources.ts');
    fs.ensureFileSync(resourceFilePath);
    fs.writeFileSync(resourceFilePath, `// prettier-ignore\n${prettier_1.format(result, {
        parser: 'typescript',
        useTabs: true,
        singleQuote: true,
        printWidth: 140,
    })}`);
}
void run();
console.log('HELLO');
//# sourceMappingURL=stackdriver-labels-for-resources.js.map