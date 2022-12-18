// enum LogLevel {
//   DEBUG,
//   WARNING,
//   ERROR
// }
//
// enum LogLevel2 {
//   DEBUG,
//   WARNING,
//   ERROR
// }
//
// console.log(Object.values(LogLevel)) // [ 'DEBUG', 'WARNING', 'ERROR', 0, 1, 2 ]
//
// // ----
//
// const log = (message: string, level: LogLevel) => {
//   console.log(`[${level}] - ${message}`)
// }
//
// log('My Message', LogLevel.DEBUG)
// log('My Message', 0)
// // log('My Message', LogLevel2.DEBUG) // NOT POSSIBLE
