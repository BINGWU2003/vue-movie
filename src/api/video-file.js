import http from '@/utils/http'

const addVideoFileService = (params) => {
  return http.post('/addVideoFile', params)
}

const getVideoFileService = (params) => {
  return http.get('/getVideoFile', {
    params
  })
}
const getAllVideoFileService = (params) => {
  return http.get('/getAllVideoFile', {
    params
  })
}

const deleteVideoFileService = (params) => {
  return http.delete('/deleteVideoFile', {
    params
  })
}

export {
  addVideoFileService,
  getVideoFileService,
  deleteVideoFileService,
  getAllVideoFileService
}
