"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryToStd = void 0;
/* eslint-disable @typescript-eslint/ban-types */
const utils_1 = require("../utils");
function entryToStd(entry) {
    const { metadata, data } = entry;
    return {
        // spread payload on root first to not overwrite metadata
        ...data,
        // add metadata
        ...utils_1.convertClientMetadataToStdMetadata(metadata),
    };
}
exports.entryToStd = entryToStd;
//# sourceMappingURL=std.js.map