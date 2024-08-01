#!/usr/bin/env node

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) return new Map();

  if (map.size === 0) throw new Error('Cannot process');

  for (const [key, value] of map) {
    if (value === 1) map.set(key, 100);
  }
}
