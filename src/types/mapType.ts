export type actionMarksType = {
  fetch: boolean,
  data: {
    id?: number[] | undefined
    participant?: boolean | undefined
  }
}

export type actionObjectType = {
  fetch: boolean,
  id: number
}

export type actionObjectImageType = {
  fetch: boolean,
  name: number
}
export interface IMark {
  id: number
  title: string
  latitude: number | string
  longitude: number | string

}

export interface IRegions {
  id: number
  title: string
}

export type anotherImageType= {
  id: number,
  filename: string
}
export interface IObject {
  id: number
  title: string
  address: string
  type: string
  region: {
    id: number
    title: string
  }
  latitude: string
  longitude: string
  participant: boolean
  // eslint-disable-next-line camelcase
  main_image: string| undefined
  // eslint-disable-next-line camelcase
  before_image: string|undefined
  // eslint-disable-next-line camelcase
  after_image: string|undefined
  // eslint-disable-next-line camelcase
  another_images: anotherImageType[]
  "video": string|undefined
  "audio": string|undefined
  description: string

}
export interface IState {
  regions: IRegions[]
  markers: IMark[]
  center: {
    latitude: number
    longitude: number
  }
  zoom: number
  object: IObject | null
  isFetching: boolean
  error: boolean
}
