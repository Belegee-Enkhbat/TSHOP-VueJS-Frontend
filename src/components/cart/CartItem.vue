<template>
  <li>
    <div>
      <img :src="image" :alt="title" />
    </div>
    <div>
      <h3>{{ title }}</h3>
    </div>
    <div>
      Price per Item:
      <strong>${{ price }}</strong>
    </div>
    <div>
      Quantity:
      <strong>{{ qty }}</strong>
    </div>
    <div class="item__total">Total: ${{ itemTotal }}</div>
    <button @click="remove">Remove</button>
  </li>
</template>

<script>
export default {
  props: ['prodId', 'title', 'image', 'price', 'qty'],
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    },
  },
  methods: {
    remove() {
      this.$store.dispatch('cart/removeFromCart', { productId: this.prodId });
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  height: 3rem;
  border-radius: 10px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c;
}
</style>
