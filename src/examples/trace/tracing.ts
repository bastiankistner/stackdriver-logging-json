import { NodeTracerProvider } from '@opentelemetry/node';
import { TraceExporter } from '@google-cloud/opentelemetry-cloud-trace-exporter';
import opentelemetry from '@opentelemetry/api';
import { SimpleSpanProcessor } from '@opentelemetry/tracing';
import type { HttpPluginConfig } from '@opentelemetry/plugin-http';

const COMMON_IGNORE_URLS = [/oauth2\.googleapis\.com/];

const provider = new NodeTracerProvider({
	plugins: {
		http: {
			// ignoreUrls: [...COMMON_IGNORE_URLS],
			ignoreOutgoingUrls: [...COMMON_IGNORE_URLS],
			ignoreIncomingPaths: [],
		} as HttpPluginConfig,
		https: {
			// ignoreUrls: [...COMMON_IGNORE_URLS],
			ignoreOutgoingUrls: [...COMMON_IGNORE_URLS],
			ignoreIncomingPaths: [],
		} as HttpPluginConfig,
		express: {
			// ignoreUrls: [...COMMON_IGNORE_URLS],
		},
		node: {
			// ignoreUrls: [...COMMON_IGNORE_URLS],
		},
	},
});

const exporter = new TraceExporter();

provider.register();

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));

opentelemetry.trace.getTracerProvider();

export function test() {
	console.log(opentelemetry.trace.getTracer('default').getCurrentSpan()?.context().traceId);
	console.log(opentelemetry.trace.getTracer('default').getCurrentSpan()?.context().traceId);
}

export function getContext(name: string) {
	const tracer = opentelemetry.trace.getTracer(name);
	return tracer.getCurrentSpan()?.context();
}

export function getDefaultContext() {
	const tracer = opentelemetry.trace.getTracer('default');
	return tracer.getCurrentSpan()?.context();
}

export function getSpan(spanName: string, eventName: string, tracerName = 'default') {
	const tracer = opentelemetry.trace.getTracer(tracerName);
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
