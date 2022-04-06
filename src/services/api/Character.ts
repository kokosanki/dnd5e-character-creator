import axios, { AxiosResponse } from 'axios'
import { Race, Class, Alignment, RaceData } from '@/types/character'

const responseBody = (response: AxiosResponse) => response.data.results ? response.data.results : response.data

const requests = {
  get: (url: string) => axios.get(url).then(responseBody)
}

export const Character = {
  getRaces: (): Promise<Race[]> => requests.get('/races'),
  getClasses: (): Promise<Class[]> => requests.get('/classes'),
  getAlignments: (): Promise<Alignment[]> => requests.get('/alignments'),
  getRaceData: (race): Promise<RaceData> => requests.get(`/races/${race}`)
}
