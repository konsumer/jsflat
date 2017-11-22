# jsflat

Flatten/unflatten nested Javascript objects in CLI

## install

`npm i -g jsflat`

## usage

**Flatten**

```
cat file.json | jsflat
```

**Unflatten**

```
cat file.json | jsunflat
```

You can use it with other tools like the awesome [jq](https://stedolan.github.io/jq/) to syntax-highlight and pull out the bits you want:

**Highlight**

```
cat package.json| ./jsflat.js | jq .
```