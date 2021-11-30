<template>
  <div class="w-75 m-auto mt-5">
    <Cards :user="user" :pictures="pictures" />
  </div>
</template>

<script>
import axios from 'axios';
import Cards from '../components/Cards.vue';

export default {
  props: {
    user: null,
  },
  data() {
    return {
      pictures: [],
    };
  },
  components: {
    Cards,
  },
  async mounted() {
    const res = await axios.get('/pictures');
    this.pictures = res.data;
  },
};
</script>

<style>
.avatar {
  width: 20%;
  height: 20%;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
