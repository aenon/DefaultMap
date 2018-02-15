# defaultObj
`defaultObj` - JavaScript implementation of Python [`collections.defaultdict`](https://docs.python.org/3/library/collections.html#collections.defaultdict)
## Implementation
```javascript
const defaultObj = (defaultValue = undefined) => {
    const defaultObj = {}
    const set = (key, value) => {
        defaultObj[key] = value
    }
    const get = key => {
        if (key in defaultObj) {
            return defaultObj[key]
        }
        return defaultValue
    }
    return {set, get}
}

export default defaultObj
```
## Examples
```javascript
const myDefaultObj = defaultObj(0)
myDefaultObj.get('abc') // 0
myDefaultObj.set('abc', 45)
myDefaultObj.get('abc') // 45
```

```javascript
const myDefaultObj2d = defaultObj(defaultObj(0))
myDefaultObj2d.get('a').get('b') // 0
myDefaultObj2d.get('a').set('b', 42)
myDefaultObj2d.get('a').get('b') // 42
```
