<template>
  <div class="box mb-4">
    <h3 class="is-size-4 mb-6">Захиалга #{{ order.id }}</h3>


    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Бүтээгдэхүүн</th>
          <th>Нэр</th>
          <th>Тоо ширхэг</th>
          <th>Нийт</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in order.items" v-bind:key="item.product.id">
          <td>macbook</td>
          <td>${{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ getItemTotal(item).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: {
    order: Object,
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.price;
    },
    orderTotalLength(order) {
      return order.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
  },
};
</script>
