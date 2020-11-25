# JSON Logging for Stackdriver

## Features

- ✅ out of the box support for tracing
- ✅ out of the box support for error stacks
- ✅ out of the box support for Google Error Reporting
- ✅ compliant with @google-cloud/logging
- ✅ compliant with std output (e.g. for kubernetes)
- ✅ includes formatter for fluent-bit 1.3.0

## IMPORTANT ⚠️

To use with typescript, ensure you have `"strictNullChecks": true,` set in your `tsconfig.json`. Otherwise typescript will complain about `never` incompatiblity with string related to `resource` when passing an entry to a formatter.

SEE: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#--strictnullchecks

TODO: maybe we could disble strict null checks and see if we're compatible without too many changes (but removing `undefined` from resource, httpRequest and wherever else we have used it in combination with generics)

## Tracing

- will work out of the box when used with compatible library (e.g. OpenCensus or OpenTelemetry [recommended])

## Error Reporting

see https://cloud.google.com/error-reporting/docs/formatting-error-messages#json_representation

**Required**

- `serviceContext.service`
- `message` as `Error.message` and including `Error.stack` (will be extracted automatically if message is instance of `Error`)

## resource

When using Stackdriver Logging Client:
Define manually if using Stackdriver Client and default `global` does not fit.

When using collector agent:
Will be set automatically.

## Entry comparison

### Cloud Logging Client Entry

### Standard Entry

- you should provide a `logName` unless you're using a collector agent (e.g. fluentd or fluent-bit), which would rewrite `logName` to either `std_out` or `std_err`

## Fluent Bit

- does not need `logName`
- does not need `resource`
