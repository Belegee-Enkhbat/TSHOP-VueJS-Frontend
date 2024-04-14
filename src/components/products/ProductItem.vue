<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <h4>${{ price }}</h4>
        </base-badge>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Сагсанд нэмэх</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'price', 'description'],
  methods: {
    addToCart() {
      this.$store.dispatch('cart/addToCart', {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
.product{
  width: 90%;
}
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
.product__image {
  text-align: center;
  & img {
  width: 10rem;
  object-fit: cover;
}
}

.product__text h4 {
  margin: 0;
  & h3 {
  margin: 0 0 0.5rem 0;
}
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: rgb(155, 0, 0);
  color: white;
  border: 1px solid rgb(155, 0, 0);
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  & hover,
  & active {
  background-color: red;
  border-color: red;
}
}
</style>