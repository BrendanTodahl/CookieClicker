export const state = () => ({
  numberOfCookies: 0,
  buildingsOwned: []
})

export const mutations = {
  ADD_COOKIE: (state, req) => {
    state.numberOfCookies += req.amount
  },
  BUY_BUILDING: (state, req) => {
    const building = state.buildingsOwned.find(bo => bo.name === req.name)
    if (building) {
      building.numOwned++
    } else {
      state.buildingsOwned.push({
        name: req.name,
        numOwned: 1
      })
    }

    state.numberOfCookies -= req.cost
  }
}

export const actions = {
  addCookie: (context, req) => {
    context.commit('ADD_COOKIE', req)
  },
  buyBuilding: (context, req) => {
    context.commit('BUY_BUILDING', req)
  }
}

export const getters = {
  numberOfCookies: (state) => {
    return state.numberOfCookies
  },
  buildingsOwned: (state) => {
    return state.buildingsOwned
  },
  buildingsOwnedByName: state => (name) => {
    return state.buildingsOwned.find(bo => bo.name === name)
  }
}
