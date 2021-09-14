import stocks from '../../data/stocks';

export default {
  state: {
    stocks: [],
  },
  getters: {
    stocks(state) {
      return state.stocks;
    },
  },
  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
  },
  actions: {
    buySotck({ commit }, order) {
      commit();
    },
    initStocks({ commit }) {
      commit('setStocks', stocks);
    },
  },
};
