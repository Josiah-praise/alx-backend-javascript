#!/usr/bin/env node

export default function getStudentsByLocation(arr, location) {
  if (!Array.isArray(arr) || typeof location !== 'string') return [];
  return arr.filter((obj) => obj.location === location);
}
