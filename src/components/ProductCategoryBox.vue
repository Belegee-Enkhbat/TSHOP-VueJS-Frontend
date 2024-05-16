<template>
  <div class="column is-3">
    <div class="box">
      <figure class="image mb-4">
        <img v-bind:src="category.get_thumbnail" />
      </figure>

      <h3 class="is-size-4">{{ category.name }}</h3>
      <h3 class="is-size-4">{{ category.id }}</h3>
      <router-link
        v-bind:to="category.get_absolute_url"
        class="button is-primary mt-4"
        >Дэлгэрэнгүй</router-link
      >
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
</style>
