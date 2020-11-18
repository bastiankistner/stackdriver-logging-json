"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpan = void 0;
const node_1 = require("@opentelemetry/node");
const opentelemetry_cloud_trace_exporter_1 = require("@google-cloud/opentelemetry-cloud-trace-exporter");
const api_1 = __importDefault(require("@opentelemetry/api"));
const tracing_1 = require("@opentelemetry/tracing");
const provider = new node_1.NodeTracerProvider({
    plugins: {
    //
    },
});
const exporter = new opentelemetry_cloud_trace_exporter_1.TraceExporter();
provider.register();
provider.addSpanProcessor(new tracing_1.SimpleSpanProcessor(exporter));
api_1.default.trace.getTracerProvider();
function getSpan(spanName, eventName, tracerName = 'default') {
    const tracer = api_1.default.trace.getTracer(tracerName);
    // opentelemetry.trace.getTracer()
    // const span = tracer.withSpan(); // .startSpan(spanName);
    // span.addEvent(eventName);
    // span.context().traceId;
    // return {
    // 	traceId: span.context().traceId,
    // 	spanId: span.context().spanId,
    // 	setAttribute: (key: string, value: Parameters<typeof span['setAttribute']>[1]) => span.setAttribute(key, value),
    // 	start: () => tracer.startSpan(spanName),
    // 	end: () => span.end(),
    // };
}
exports.getSpan = getSpan;
//# sourceMappingURL=tracing.js.map