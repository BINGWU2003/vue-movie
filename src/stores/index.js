import useStateStore from './modules/state'
import useUserStore from './modules/user'
const getStateStore = () => {
  return useStateStore()
}
const getUserStore = () => {
  return useUserStore()
}
export { getStateStore, getUserStore }
