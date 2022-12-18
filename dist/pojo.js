"use strict";
const LOG_LEVEL1 = {
    DEBUG: 'DEBUG',
    WARNING: 'WARNING',
    ERROR: 'ERROR'
};
const LOG_LEVEL1_2 = {
    DEBUG: 'DEBUG',
    WARNING: 'WARNING',
    ERROR: 'ERROR'
};
// ----
console.log(Object.values(LOG_LEVEL1));
const log = (message, level) => {
    console.log(`[${LOG_LEVEL1[level]}] - ${message}`);
};
const log2 = (message, level) => {
    console.log(`[${LOG_LEVEL1[level]}] - ${message}`);
};
log('My Message', LOG_LEVEL1.DEBUG);
log('My Message', 'DEBUG');
log('My Message', LOG_LEVEL1_2.DEBUG);
log('My Message', LOG_LEVEL1.DEBUG);
log('My Message', 'DEBUG');
log('My Message', LOG_LEVEL1_2.DEBUG);
// ----
const LOG_LEVEL2 = {
    DEBUG: 0,
    WARNING: 1,
    ERROR: 2
};
const LOG_LEVEL2_2 = {
    DEBUG: 0,
    WARNING: 1,
    ERROR: 2
};
console.log(Object.values(LOG_LEVEL2));
const log3 = (message, level) => {
    console.log(level);
    // console.log(`[${LOG_LEVEL2[level]}] - ${message}`) // NOT POSSIBLE
};
const log4 = (message, level) => {
    console.log(`[${LOG_LEVEL2[level]}] - ${message}`);
};
// log4('My Message', LOG_LEVEL2.DEBUG) // NOT POSSIBLE
// log4('My Message', 0) // NOT POSSIBLE
// log4('My Message', LOG_LEVEL2_2.DEBUG) // NOT POSSIBLE
