function isNullOrEmpty(value) {
  return value === null || value === undefined || value === '' || value === 'null'
}

// Check if a value is an array
function isArray(value) {
  return Array.isArray(value)
}

// Check if a value is an object (excluding null and arrays)
function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

// Check if a value is a function
function isFunction(value) {
  return typeof value === 'function'
}

// Check if a value is a string
function isString(value) {
  return typeof value === 'string'
}

// Check if a value is a number
function isNumber(value) {
  return typeof value === 'number' && isFinite(value)
}

module.exports = {
  isNullOrEmpty,
  isArray,
  isObject,
  isFunction,
  isString,
  isNumber
}
