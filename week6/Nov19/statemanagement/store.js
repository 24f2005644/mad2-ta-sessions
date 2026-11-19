const store = new Vuex.Store({
  state: {
    childMessage: 'Hello from child component!',
    innerMessage: 'Hello from inner component!',
    message: 'Hello Vue! This is a message from the store.',


  },
  mutations: {
        updateMessage(state, newMessage) {
            state.message = newMessage
        },

        updateChildMessage(state, newChildMessage) {
            state.childMessage = newChildMessage
        }

  },
  actions: {
    async getData({ commit }) {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => {
            commit('updateMessage', json.title)
        })
    }

  },
  getters: {
    combinedMessage(state) {
        return state.message + ' ' + state.childMessage + ' ' + state.innerMessage
    }
  }
})
