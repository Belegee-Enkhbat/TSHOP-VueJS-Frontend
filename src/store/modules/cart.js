export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const { id, title, image, price } = payload;
      const productInCart = state.items.find(item => item.productId === id);

      if (productInCart) {
        productInCart.qty++;
      } else {
        state.items.push({
          productId: id,
          title,
          image,
          price,
          qty: 1,
        });
      }
      state.qty++;
      state.total += price;
    },
    removeProductFromCart(state, payload) {
      const prodId = payload.productId;
      const productIndex = state.items.findIndex(item => item.productId === prodId);
      const prodData = state.items[productIndex];
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
      state.items.splice(productIndex, 1);
    },
  },
  actions: {
    addToCart({ commit, rootGetters }, payload) {
      const { id } = payload;
      const products = rootGetters['prods/products'];
      const product = products.find(prod => prod.id === id);
      commit('addProductToCart', product);
    },
    removeFromCart({ commit }, payload) {
      commit('removeProductFromCart', payload);
    }
  },
  getters: {
    products(state) {
      return state.items;
    },
    totalSum(state) {
      return state.total.toFixed(2);
    },
    quantity(state) {
      return state.qty;
    }
  }
};
