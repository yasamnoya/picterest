<template>
  <masonry :cols="{ default: 5, 1600: 4, 1200: 3, 800: 2, 400: 1 }">
    <div v-for="picture in pictures" :key="picture.id">
      <div class="card p-1 mx-1 my-2">
        <img
          :src="picture.url"
          alt="picture.description"
          @error="picture.url = 'https://cdn.freecodecamp.org/demo-projects/images/placeholder.png'"
        />
        <div class="text-center py-1">
          <h5>{{ picture.description }}</h5>
        </div>
        <div class="px-1 py-2 d-flex justify-content-between">
          <router-link :to="`/${picture.User.username}`" class="w-25 h-25">
            <img :src="picture.User.avatarUrl" alt="avatar" class="w-100 h-100" />
          </router-link>
          <button
            v-if="user.id == picture.userId"
            @click.prevent="deletePicture(picture.id)"
            class="btn btn-outline-danger w-25"
          >
            <font-awesome-icon :icon="['fas', 'trash-alt']" />
          </button>
          <button class="btn btn-outline-primary w-25">
            <font-awesome-icon :icon="['fas', 'thumbs-up']" />
            0
          </button>
        </div>
      </div>
    </div>
  </masonry>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cards',
  props: {
    pictures: Array,
    user: null,
  },
  methods: {
    async deletePicture(pictureId) {
      try {
        await axios.delete(`/pictures/${pictureId}`);
        this.$router.go();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
