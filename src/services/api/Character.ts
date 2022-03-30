import axios, { AxiosResponse } from 'axios'

type Race = {
  index: number
  name: string
  url: string
}

const responseBody = (response: AxiosResponse) => response.data.results

const requests = {
  get: (url: string) => axios.get(url).then(responseBody)
}

export const Character = {
  getRaces: (): Promise<Race[]> => requests.get('/races')
}
