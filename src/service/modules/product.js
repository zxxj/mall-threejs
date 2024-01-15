import { http } from '../index'

export const getProductList = (params) =>
  http({
    method: 'get',
    params,
    url: '/products'
  })
