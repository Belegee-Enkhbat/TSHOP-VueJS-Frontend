<template>
  <div class="column is-3">
    <div class="box">
      <router-link :to="category.get_absolute_url">
        <figure class="image mb-4">
          <img :src="category.get_thumbnail" alt="Category Image" />
        </figure>
      </router-link>

      <p class="text-secondary">{{ category.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProducCategoryBox",
  props: {
    category: Object,
  },
};
</script>

<style scoped>
.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
  height: 380px;
  overflow: hidden;
}

p{
  text-align: center;
  display: grid;
}
</style>
