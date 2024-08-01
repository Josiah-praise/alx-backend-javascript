#!/usr/bin/env node

export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) return '';

  const remainder = [];

  for (const i of set) {
    if (typeof i === 'string') {
      if (i.startsWith(startString)) {
        remainder.push(i.slice(startString.length));
      }
    }
  }

  return remainder.join('-');
}
