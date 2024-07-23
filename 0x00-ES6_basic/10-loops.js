#!/usr/bin/env node
/* eslint no-param-reassign: "error" */

export default function appendToEachArrayValue(array, appendString) {
  for (const [index, element] of array.entries()) {
    array[index] = appendString + element;
  }

  return array;
}
