# JSON Logging for Stackdriver

## Features

- ✅ out of the box support for tracing
- ✅ out of the box support for error stacks
- ✅ out of the box support for Google Error Reporting
- ✅ compliant with @google-cloud/logging
- ✅ compliant with std output (e.g. for kubernetes)
- ✅ includes formatter for fluent-bit 1.3.0

// TODO provide a table with all keys based on cloud logging client that maps to names and types for std

## Entry comparison

### Cloud Logging Client Entry

### Standard Entry

- you should provide a `logName` unless you're using a collector agent (e.g. fluentd or fluent-bit), which would rewrite `logName` to either `std_out` or `std_err`

## Fluent Bit

- does not need `logName`
- does not need `resource`
