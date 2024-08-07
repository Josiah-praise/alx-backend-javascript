#!/usr/bin/env node

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    if (weakMap.get(endpoint) + 1 < 5) {
      weakMap.set(endpoint, weakMap.get(endpoint) + 1);
    } else {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}
