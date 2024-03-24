<template>
  <div class="product-display">
      <div class="product-container">
          <div class="product-image">
              <img :src="product.image" :alt="alt">
          </div>
          <div class="product-info">
              <h1>{{ product.name }}</h1>
              <h2 v-if="product.available">Available</h2>
              <h2 v-else>Out of Stock</h2>
              <p>Price: {{ formattedPrice }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  data() {
      return {
          product: {
              name: 'Men shirt',
              price: '99.99',
              available: true,
              image: require('../assets/img/shirt.jpg'),
              alt: 'shirt',
          },
      }
  },

  computed: {
      formattedPrice: function () {
          return `$${this.product.price}`;
      }
  }
};
</script>

<style lang="css" scoped>
body {
  background-color: #f2f2f2;
  margin: 0px;
  font-family: tahoma;
  color: #282828;
}

h1 {
  font-size: 50px;
  margin: 0;
  margin-bottom: 20px;
}

h2 {
  font-size: 25px;
  margin: 0;
  margin-bottom: 20px;
}

p {
  font-size: 22px;
  margin: 0;
  margin-bottom: 20px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.product-display {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgb(223, 223, 241);
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.product-image {
  width: 50%;
}

.product-info {
  margin-top: 50px;
  width: 50%;
}
</style>