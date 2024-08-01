#!/usr/bin/env node

export default function createInt8TypedArray(length, position, value) {
  if (typeof position !== 'number' || typeof length !== 'number' || typeof value !== 'number') {
    return new DataView(new ArrayBuffer());
  }

  if (position < 0 || position >= length) throw new Error('Position outside range');

  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DatatView(arrayBuffer);
  dataview[position] = value;
  return dataView;
}
