type ObjectValues<T> = T[keyof T];

const LOG_LEVEL1 = {
  DEBUG: 'DEBUG',
  WARNING: 'WARNING',
  ERROR: 'ERROR'
} as const;

const LOG_LEVEL1_2 = {
  DEBUG: 'DEBUG',
  WARNING: 'WARNING',
  ERROR: 'ERROR'
} as const;

type LogLevel = ObjectValues<typeof LOG_LEVEL1>
type LogLevel2 = keyof typeof LOG_LEVEL1

// ----

console.log(Object.values(LOG_LEVEL1))

const log = (message: string, level: LogLevel) => {
  console.log(`[${LOG_LEVEL1[level]}] - ${message}`)
}

const log2 = (message: string, level: LogLevel) => {
  console.log(`[${LOG_LEVEL1[level]}] - ${message}`)
}

log('My Message', LOG_LEVEL1.DEBUG)
log('My Message', 'DEBUG')
log('My Message', LOG_LEVEL1_2.DEBUG)
log('My Message', LOG_LEVEL1.DEBUG)
log('My Message', 'DEBUG')
log('My Message', LOG_LEVEL1_2.DEBUG)

// ----

const LOG_LEVEL2 = {
  DEBUG: 0,
  WARNING: 1,
  ERROR: 2
} as const;

const LOG_LEVEL2_2 = {
  DEBUG: 0,
  WARNING: 1,
  ERROR: 2
} as const;

console.log(Object.values(LOG_LEVEL2))

type LogLevel3 = ObjectValues<typeof LOG_LEVEL2>
type LogLevel4 = keyof typeof LOG_LEVEL2_2

const log3 = (message: string, level: LogLevel3) => {
  console.log(level);
  // console.log(`[${LOG_LEVEL2[level]}] - ${message}`) // NOT POSSIBLE
}

const log4 = (message: string, level: LogLevel4) => {
  console.log(`[${LOG_LEVEL2[level]}] - ${message}`)
}

// log4('My Message', LOG_LEVEL2.DEBUG) // NOT POSSIBLE
// log4('My Message', 0) // NOT POSSIBLE
// log4('My Message', LOG_LEVEL2_2.DEBUG) // NOT POSSIBLE




