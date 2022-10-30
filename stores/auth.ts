import {defineStore} from 'pinia'


export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // TODO Initialize state from local storage to enable user to stay logged in
    user: '',
    token: '',
  })
  actions: {
    async login(loginForm) {
      const URL_ENCODED_FORM = encodeURL({
        email: loginForm.email,
        password: loginForm.password,
      });
      return await $fetch('api_route', {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        body: URL_ENCODED_FORM
      }
    }
  }
})