const DefaultMap = (defaultValue = undefined) => {
    const map = new Map()
    const set = (key, value) => {map.set(key, value)}
    const get = key => map.get(key) || defaultValue 
    return {set, get}
}

export default DefaultMap
