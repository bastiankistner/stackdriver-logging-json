import { NodeTracerProvider } from '@opentelemetry/node';
import { TraceExporter } from '@google-cloud/opentelemetry-cloud-trace-exporter';
import opentelemetry from '@opentelemetry/api';
import { SimpleSpanProcessor } from '@opentelemetry/tracing';
import type { HttpPluginConfig } from '@opentelemetry/plugin-http';

const TRACING_IGNORE_URLS = [/oauth2\.googleapis\.com/];

if (typeof process.env.TRACING_IGNORE_URLS === 'string') {
	const patterns = process.env.TRACING_IGNORE_URLS.split(',');
	patterns.forEach((pattern) => {
		TRACING_IGNORE_URLS.push(new RegExp(pattern));
	});
}

const provider = new NodeTracerProvider({
	plugins: {
		http: {
			// ignoreUrls: [...COMMON_IGNORE_URLS],
			ignoreOutgoingUrls: [...TRACING_IGNORE_URLS],
			ignoreIncomingPaths: [],
		} as HttpPluginConfig,
		https: {
			// ignoreUrls: [...COMMON_IGNORE_URLS],
			ignoreOutgoingUrls: [...TRACING_IGNORE_URLS],
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

export function getContext(name: string) {
	const tracer = opentelemetry.trace.getTracer(name);
	return tracer.getCurrentSpan()?.context();
}

export function getDefaultContext() {
	const tracer = opentelemetry.trace.getTracer('default');
	return tracer.getCurrentSpan()?.context();
}
