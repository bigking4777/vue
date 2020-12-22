import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router/index'

const getDefaultState = () => {
  return {
    token: getToken(),
  }
}

const state = getDefaultState()

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { user_tel, user_passwd } = userInfo
    return new Promise((resolve, reject) => {
      login({ user_tel: user_tel.trim(), user_passwd: user_passwd }).then(response => {
        const { data } = response
        window.sessionStorage.setItem('user_no',data.user_no)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('请联系管理员,或重新登录!')
        }
        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      localStorage.clear();
      sessionStorage.clear();
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()

      return
      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

