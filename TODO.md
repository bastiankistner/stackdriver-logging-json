# TODO

- [x] what about `serviceContext` ?? https://www.npmjs.com/package/@google-cloud/logging-bunyan/v/0.9.2#error-reporting
      It is an error to specify a serviceContext but not specify serviceContext.service.
- [x] it doesn't seem like an error we send through the client shows up in the Error Reporting Dashboard :(
- [x] format message if it's an error (error.message: error.stack)

## What I want to do

- have metadata and data that I can pass to google cloud logging client to create an entry
- turn that metadata and data into an output that I can pass to std

- [x] for STD can i use any logname or will it always be stdout/stderr and will the projectId in logname automatically be set ?

- [x] construct full trace string (not only the id)

- [x] test error logging

- [x] outsource stackdriver into it's own npm module (maybe a public github module?)

- [ ] implement middleware utils for express

- [ ] implement log transport for tslog (include formatter of log args to prepare error etc.)

- [ ] add extensive readme about our assumptions and how it works
  - if no resource is set, it'll be `global`
  - latency can be full seconds and nanos or seconds only as float
  - logName and trace will always be converted into a fully qualified name
  - might look a bit complicated but thanks to types it isn't - it just provides a good amount of control
  - we can have additional formatters (e.g. for fluentbit) that require the std json
    - timestamp > time for std fluent-bit
