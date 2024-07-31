#!/usr/bin/env node

export default function hasValuesFromArray(arr, values) {
  if (!Array.isArray(arr) || !Array.isArray(values)) return false;
  return values.every((val) => arr.includes(val));
}
