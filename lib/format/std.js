"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryToStd = void 0;
const utils_1 = require("../utils");
function entryToStd(entry) {
    const { metadata, data } = entry;
    return {
        // spread payload on root
        ...data,
        // add metadata
        ...utils_1.convertClientMetadataToStdMetadata(metadata),
    };
}
exports.entryToStd = entryToStd;
//# sourceMappingURL=std.js.map