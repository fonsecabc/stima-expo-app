export const variables = {
    apiEndpoint: process.env.API_ENDPOINT_DEV ?? 'undefined'
}

export const testVariables = (): boolean => {
    return Object.values(variables).every((value) => {
        return (value !== 'undefined')
    })
}
