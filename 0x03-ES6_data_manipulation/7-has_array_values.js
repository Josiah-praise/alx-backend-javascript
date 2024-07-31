#!/usr/bin/env node

export default function hasValuesFromArray(set, values) {
  if (!(set instanceof Set) || !Array.isArray(values)) return false;
  return values.every((val) => set.has(val));
}
