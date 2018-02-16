# DefaultMap
`DefaultMap` - JavaScript implementation of Python [`collections.defaultdict`](https://docs.python.org/3/library/collections.html#collections.defaultdict)
## Implementation
```javascript
const DefaultMap = (defaultValue = undefined) => {
    const map = new Map()
    const set = (key, value) => {
        map.set(key, value)
    }
    const get = key => {
        if (map.get('a')) {
            return map.get('a')
        }
        return defaultValue
    }
    return {set, get}
}
export default DefaultMap
```
## Examples
```javascript
const myDefaultMap = DefaultMap(0)
myDefaultMap.get('abc') // 0
myDefaultMap.set('abc', 45)
myDefaultMap.get('abc') // 45
```

```javascript
const myDefaultMap2d = DefaultMap(DefaultMap(0))
myDefaultMap2d.get('a').get('b') // 0
myDefaultMap2d.get('a').set('b', 42)
myDefaultMap2d.get('a').get('b') // 42
```
