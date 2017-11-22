#!/usr/bin/env node

const unflatten = require('flat').unflatten

// TODO: make this actually streaming
let out = new Buffer([])
process.stdin.on('data', chunk => out = Buffer.concat([out, chunk]))
process.stdin.on('end', () => {
  console.log(JSON.stringify(unflatten(JSON.parse(out.toString())), null, 2))
})
