<template>
  <div>
    <h1>Axios API Example</h1>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="data">
      <li v-for="item in data" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyAxios',
  data() {
    return {
      data: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.data = response.data;
      } catch (err) {
        this.error = 'Error fetching data';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-bottom: 1rem;
}
</style>
