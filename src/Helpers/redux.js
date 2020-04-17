export const createAsyncAction = (type) => {
    return {
        SUCCESS: `${type}.SUCCESS`,
        FAIL: `${type}.FAIL`,
        REQUEST: `${type}.REQUEST`,
    }
}