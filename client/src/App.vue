<template>
  <div id="app">
    <Nav :user="user" />
    <router-view :user="user" class="main" />
  </div>
</template>

<script>
import axios from 'axios';
import Nav from '@/components/Nav.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      const res = await axios.get('/users/me');
      this.user = res.data;
      console.log(this.user);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  background: linear-gradient(to top, #003366 0%, #333399 100%);
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
