import { createStore } from "vuex";

export default createStore({
  state: {
    user: localStorage.getItem("user"),
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: "",
    isLoading: false,
  },
  getters: {
    getUser() {
      return this.state.user;
    },
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("cart")) {
        state.cart = JSON.parse(localStorage.getItem("cart"));
      } else {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }

      if (localStorage.getItem("token")) {
        state.token = localStorage.getItem("token");
        state.isAuthenticated = true;
      } else {
        state.token = "";
        state.isAuthenticated = false;
      }
    },
    addToCart(state, item) {
      // Барааны ID-г түлхүүр болгон HashMap үүсгэх
      const cartMap = new Map(state.cart.items.map(i => [i.product.id, i]));

      // Бараа аль хэдийн сагсанд байгаа эсэхийг шалгах
      if (cartMap.has(item.product.id)) {
        // Барааны тоог нэмэгдүүлэх
        const existingItem = cartMap.get(item.product.id);
        existingItem.quantity = parseInt(existingItem.quantity) + parseInt(item.quantity);
      } else {
        // Шинэ барааг сагсанд нэмэх
        state.cart.items.push(item);
      }

      // Сагсыг localStorage-д хадгалах
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setIsLoading(state, status) {
      state.isLoading = status;
    },
    setToken(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },
    setUser(state) {
      state.user = "";
      state.isAuthenticated = true;
    },
    removeToken(state) {
      state.token = "";
      state.isAuthenticated = false;
    },
    clearCart(state) {
      state.cart = { items: [] };

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  actions: {},
  modules: {},
});
