export type productObjectType = {
  thumbnail?: string
  title?: string
  price?: number
  shipping?: {
    free_shipping: boolean
  }
  address?: {
    state_name: string
    city_name: string
  }
  condition?: string
  permalink?: string
}

export type sortOptionsType = {
  id?: string
  name?: string
}

export type filterElementType = {
  id?: string
  name?: string
  results?: number
}
