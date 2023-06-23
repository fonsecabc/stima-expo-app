import { variables } from './variables'

import axios from 'axios'

export const setupAxios = () => {
    axios.defaults.headers.Accept = 'application/json'
    axios.defaults.baseURL = `${variables.apiEndpoint}`
}