# [Local Sync](https://levithomason.github.io/local-sync) [![npm](https://img.shields.io/npm/v/local-sync.svg?style=flat-square)](https://www.npmjs.com/package/local-sync)

A friendly, tiny, and cross-browser local storage solution:

  ✓ No dependencies  
  ✓ Synchronous  
  ✓ Namespaced storage support  
  ✓ In-memory fallback  

## Install

```
yarn add local-sync
```

<details>
<summary>CDN</summary>

Common JS
```
https://unpkg.com/local-sync@x.x.x/dist/cjs/local-sync.js
https://unpkg.com/local-sync@x.x.x/dist/cjs/local-sync.min.js
```

ES Module
```
https://unpkg.com/local-sync@x.x.x/dist/esm/local-sync.js
https://unpkg.com/local-sync@x.x.x/dist/esm/local-sync.min.js
```

UMD
```
https://unpkg.com/local-sync@x.x.x/dist/umd/local-sync.js
https://unpkg.com/local-sync@x.x.x/dist/umd/local-sync.min.js
```
</details>

## API

See [API Documentation](https://github.com/levithomason/local-sync/blob/master/API.md).

## Usage

### Buckets

Set or get the current bucket. Subsequent methods operate only in the current bucket namespace.

```js
ls = new LocalSync()              // default settings
ls = new LocalSync({              // custom settings
  prefix: 'ocean',
  bucket: 'fish',
  separator: '~'
})

ls.setBucket('BikiniBottom')      // => 'BikiniBottom'
ls.getBucket()                    // => 'BikiniBottom'
```

List all buckets in storage.

```js
ls.allBuckets()                   // => [...buckets]
```

### set, get, put

Use any JSON serializable data type.

```js
ls.set('bob', {name: 'SpongeBob'})
ls.get('bob')
// => {name: 'SpongeBob'}

ls.set('quotes', ['Squidward!'])
ls.get('quotes')
// => ['Squidward!]
```

Update stored objects and arrays.

```js
ls.put('bob', {address: '124 Conch Street'})
// => {name: 'SpongeBob', address: '124 Conch Street'}

ls.put('quotes', ['Why so crabby, Patty?'])
// => ['Squidward!', 'Why so crabby, Patty?']
```

### keys, values, getAll

List all keys in storage.

```js
ls.keys()
// => ['bob', 'quotes']
```

List all values in storage.

```js
ls.values()
// [
//   {address: '124 Conch Street', name: 'SpongeBob'},
//   ['Squidward!', 'Why so crabby, Patty?']
// ]
```

List all keys and values in storage.

```js
ls.getAll()
// [
//   {address: '124 Conch Street', name: 'SpongeBob'},
//   {quotes: ['Squidward!', 'Why so crabby, Patty?']}
// ]
```

### remove, clear

Remove a single value by key or clear all values.

```js
ls.remove('bob')
ls.keys()
// => ['quotes']
```

Clear all keys and values.

```js
ls.clear()
ls.keys()
// => []
```
