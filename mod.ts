import { createHash } from 'https://deno.land/std/hash/mod.ts';

export function hash(text:string) {
  const h = createHash('sha256')
  h.update(text)
  return h.toString()
}

// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

export function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export function genSalt() {
  return guid()
}
