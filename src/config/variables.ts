//const API_ENDPOINT_DEV = 'http://127.0.0.1:5001/stima-2734b/us-central1'
const API_ENDPOINT_PROD = 'https://us-central1-stima-2734b.cloudfunctions.net'
const API_KEY = 'TDOH$9cRluAUPKPFqOGl!enc%BS6^i5CHrYCqSzF8#&r6zxP6rsjheeHY^3q!gcZJ29gE8jixQAW&X5qdXt3X!Fj6v26Vs4*!3Sl'
const DOMAIN = 'https://web.stima.app.br'

export const variables = {
  apiEndpoint: API_ENDPOINT_PROD,
  apiKey: API_KEY,
  domain: DOMAIN,
}

export const testVariables = async (): Promise<boolean> => {
  return Object.values(variables).every((value) => {
    return (value !== 'undefined')
  })
}
