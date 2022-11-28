import http from './httpService'

function getCategories() {
  return http.get('/categories')
}

export default { getCategories }
