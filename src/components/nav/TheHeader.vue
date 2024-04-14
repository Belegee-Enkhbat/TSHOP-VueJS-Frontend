<template>
  <header>
    <h1>
      <router-link to="/home">TShop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Бараа</router-link>
        </li>
        <li>
          <router-link to="/cart">Сагс</router-link>
          <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <router-link to="/test">Түүх</router-link>
        </li>
        <li>
          <router-link to="/test">Бидэнтэй холбогдох</router-link>
        </li>
        <li>
            <div class="UserButton">
              <button v-if="!isLoggedIn" @click="login">Нэвтрэх</button>
              <button v-if="isLoggedIn" @click="logout">Гарах</button>
            </div>
        </li>
      </ul>
    </nav>
    
  </header>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: rgb(16, 2, 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & h1{
    padding: 0 4%;
  }

}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
  & hover,
  & active,
  & router-link-active {
  color: white;
  border-color: white;
}
}
button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 30px;
  & hover,  & active {
  background-color: #f0d5ff;
}
}
.UserButton{
  padding-right: 3rem;
}
</style>