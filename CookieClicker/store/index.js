import { Decimal } from 'decimal.js'

export const state = () => ({
  numberOfCookies: new Decimal(0),
  cookiesPerSecond: new Decimal(0),
  buildingsOwned: []
})

export const mutations = {
  ADD_COOKIE: (state, req) => {
    state.numberOfCookies = (Decimal.round((state.numberOfCookies.plus(req.amount)).times(100)).dividedBy(100))
  },
  SET_COOKIES_PER_SECOND: (state, req) => {
    state.cookiesPerSecond = req.cookiesPerSecond
  },
  BUY_BUILDING: (state, req) => {
    const building = state.buildingsOwned.find(bo => bo.name === req.name)
    if (building) {
      building.numOwned = building.numOwned.plus(1)
    } else {
      state.buildingsOwned.push({
        name: req.name,
        numOwned: new Decimal(1)
      })
    }

    state.numberOfCookies = Decimal.round(state.numberOfCookies.minus(req.cost))
  }
}

export const actions = {
  // todo: may not need to pass an amount.
  addCookie: (context, req) => {
    context.commit('ADD_COOKIE', req)
  },
  setCookiesPerSecond: (context, req) => {
    context.commit('SET_COOKIES_PER_SECOND', req)
  },
  buyBuilding: (context, req) => {
    context.commit('BUY_BUILDING', req)
  }
}

export const getters = {
  numberOfCookies: (state) => {
    return state.numberOfCookies
  },
  cookiesPerSecond: (state) => {
    return state.cookiesPerSecond
  },
  buildingsOwned: (state) => {
    return state.buildingsOwned
  },
  buildingsOwnedByName: state => (name) => {
    return state.buildingsOwned.find(bo => bo.name === name)
  }
}
