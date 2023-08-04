//const API_ENDPOINT_DEV = 'http://127.0.0.1:5001/stima-2734b/us-central1'
const API_ENDPOINT_PROD = 'https://us-central1-stima-2734b.cloudfunctions.net'
const API_KEY = '8c4f5d051cf595aaaf8ceb3b2139cc4629affb18aa121f68c5be45ef42b77f78'

export const variables = {
  apiEndpoint: API_ENDPOINT_PROD,
  apiKey: API_KEY
}

export const testVariables = async (): Promise<boolean> => {
  return Object.values(variables).every((value) => {
    return (value !== 'undefined')
  })
}
