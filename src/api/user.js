import http from '@/utils/http'

const addUserService = (params) => {
  return http.post('/addUser', params)
}
const loginUserService = (params) => {
  return http.post('/loginUser', params)
}
const getUserService = (params) => {
  return http.get('/getUser', {
    params
  })
}
const getAllUserService = () => {
  return http.get('/getAllUser')
}
const deleteUserService = (params) => {
  return http.delete('/deleteUser', {
    params
  })
}
const editUserService = (params) => {
  return http.post('/editUser', params)
}
const getUserInfoService = (params) => {
  return http.get('/getUserInfo', {
    params
  })
}
export {
  addUserService,
  loginUserService,
  getUserService,
  deleteUserService,
  editUserService,
  getUserInfoService,
  getAllUserService
}
