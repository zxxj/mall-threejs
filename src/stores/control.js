import { defineStore } from 'pinia'

export const useControlStore = defineStore('control', {
  state: () => {
    return { isFullScreen: false }
  },

  actions: {
    changeFullScreen(payload) {
      console.log('p', payload)
      this.isFullScreen = payload
    }
  }
})
