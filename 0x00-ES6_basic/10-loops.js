#!/usr/bin/env node
/* eslint-disable */

export default function appendToEachArrayValue(array, appendString) {
  for (const [index, element] of array.entries()) {
    array[index] = appendString + element;
  }

  return array;
}
