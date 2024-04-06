import http from '@/utils/http'

const addMovieService = (params) => {
  return http.post('/addMovie', params)
}
const addManyMovieService = (params) => {
  return http.post('/addManyMovie', params)
}
const getMovieService = (params) => {
  return http.get('/getMovie', {
    params
  })
}

const deleteMovieService = (params) => {
  return http.delete('/deleteMovie', {
    params
  })
}
const editMovieService = (params) => {
  return http.post('/editMovie', params)
}
const getAllMovieService = () => {
  return http.get('/getAllMovie')
}
export {
  addMovieService,
  getMovieService,
  deleteMovieService,
  editMovieService,
  addManyMovieService,
  getAllMovieService
}
