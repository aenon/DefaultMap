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
