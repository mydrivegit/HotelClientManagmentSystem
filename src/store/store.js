import Vue from 'vue'
import Vuex from 'vuex'
import http from './../helper/axois'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: null,
    user: [],
    userId: [],
    role: [{
      text: 'Select the Role of User',
      value: null
    }, 'Admin', 'User']
  },
  actions: {
    signup: ({commit}, authdata) => http.post('/auth/signup', authdata),
    login: ({commit}, authdata) => http.post('/auth/login', authdata),
    fetchUsersList ({commit}) {
      http.get('/users')
        .then(res => {
          commit('storeUsers', res.data.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchUser ({commit}) {
      http.get('/users/profile')
        .then(res => {
          commit('storeUserProfile', res.data.doc[0])
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchUserId ({ commit }, IdParams) {
      http.get('/users/' + IdParams)
        .then(res => {
          if (res.status === 204) {
            this.showAlert()
          } else {
            console.log(res.data.result)
            commit('storeUserId', res.data.result)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    modifyData: ({commit}, userdata) => http.patch('/users', userdata),
    modifyUserIdData: ({ commit }, data) => http.patch('/users/update/' + data.id, data.data),
    deleteUser: ({commit}) => http.delete('/users'),
    deleteUserById: ({ commit }, paramsId) => http.delete('/users/delete/' + paramsId)
  },
  mutations: {
    storeUsers (state, users) {
      state.users = users
    },
    storeUserProfile (state, user) {
      state.user = user
    },
    storeUserId (state, userId) {
      state.userId = userId
    }
  },
  getters: {
    users: (state) => state.users,
    user: (state) => state.user,
    userId: (state) => state.userId
  }
})
