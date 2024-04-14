<template>
    <section>
      <article class="background-img">
        <img src="/public/headphones-paint-color-splash-digital-art-4k-wallpaper-uhdpaper.com-22@0@j.jpg" alt="background">
      </article>
      <ul>
        <product-item
          v-for="prod in products"
          :key="prod.id"
          :id="prod.id"
          :title="prod.title"
          :image="prod.image"
          :description="prod.description"
          :price="prod.price"
        ></product-item>
      </ul>
    </section>
  </template>
  
  <script>
  
  import ProductItem from '../components/products/ProductItem.vue';
  
  export default {
    components: {
      ProductItem,
    },
    computed: {
      products() {
        return this.$store.getters['prods/products'];
      }
    }
  };
  </script>
  
  <style scoped>
    
    section ul {
      list-style: none;
      margin: 2rem auto;
      padding: 0;
      max-width: 80%;
      display: grid;
      gap: 1%;
      grid-template-columns: 24% 24% 24% 24%;
    }
    .background-img {
     width: 100%;
      & img{
        width: 100%;
      }
    }
  </style>