#!/usr/bin/env node
/* eslint no-param-reassign: "error" */
/* eslint-disable */

export default function appendToEachArrayValue(array, appendString) {
  let index = 0;

  for (const element of array) {
    array[index] = appendString + element;
    index += 1;
  }

  return array;
}
