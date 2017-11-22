#!/usr/bin/env node

const flat = require('flat')

// TODO: make this actually streaming
let out = new Buffer([])
process.stdin.on('data', chunk => out = Buffer.concat([out, chunk]))
process.stdin.on('end', () => {
  console.log(JSON.stringify(flat(JSON.parse(out.toString())), null, 2))
})
