/* eslint-disable no-console */

const logLevels = ['error', 'warn', 'info', 'debug'];
const enabledOutputs = {};
let allOutputs = {};

function log (scope, level, output, ...args) {
  if (scope.enabledOutputs[level]) {
    output(level.toUpperCase(), ...args);
  }
}

function setLogLevel (level) {
  const levelIdx = logLevels.indexOf(level.toLowerCase());
  for (let i = 0; i < logLevels.length; i++) {
    enabledOutputs[logLevels[i]] = i <= levelIdx;
  }
}

function getLogger () {
  return {
    ...allOutputs,
    setLogLevel
  };
}

function init () {
  allOutputs = {
    error: log.bind(this, { enabledOutputs }, 'error', console.error),
    warn: log.bind(this, { enabledOutputs }, 'warn', console.warn),
    info: log.bind(this, { enabledOutputs }, 'info', console.info),
    debug: log.bind(this, { enabledOutputs }, 'debug', console.debug)
  };

  for (let i = 0; i < logLevels.length; i++) {
    enabledOutputs[logLevels[i]] = true;
  }
}

init();
setLogLevel('debug');

export default getLogger();
