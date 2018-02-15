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
