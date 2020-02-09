import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state,payload){
      let oldProduct = state.cartList.find(item => item.id ===payload.id &&item.type ===payload.type)

      if(oldProduct){
        oldProduct.count += 1
      }
      else{
        payload.count = 1
        payload.checked = true
        state.cartList.push(payload)
      }
      console.log(state.cartList);
    }
  },
  actions: {
  },
  getters:{
    isAllChecked(state){
      for(let checked of state.cartList){
        if(checked.checked === false){
          return false
        }
      }
      return true
    }
  },
  modules: {
  }
})
