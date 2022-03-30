import axios, { AxiosResponse } from 'axios'
import { Race, Class } from '@/services/api/types'

const responseBody = (response: AxiosResponse) => response.data.results

const requests = {
  get: (url: string) => axios.get(url).then(responseBody)
}

export const Character = {
  getRaces: (): Promise<Race[]> => requests.get('/races'),
  getClasses: (): Promise<Class[]> => requests.get('/classes')
}
