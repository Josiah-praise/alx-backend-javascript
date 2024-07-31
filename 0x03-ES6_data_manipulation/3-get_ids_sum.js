#!/usr/bin/env node

export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((acc, obj) => acc + obj.id, 0);
}
