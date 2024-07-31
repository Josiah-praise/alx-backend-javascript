#!/usr/bin/env node

export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.reduce((ele, acc) => acc + ele.id, 0);
}
