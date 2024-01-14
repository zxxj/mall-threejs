import { http } from '../index'

export const getHomePage = (params) =>
  http({
    method: 'get',
    url: '/homePage',
    params
  })
