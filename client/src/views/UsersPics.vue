<template>
  <div class="w-75 m-auto mt-5">
    <Cards
      @likePicture="likePicture"
      @unlikePicture="unlikePicture"
      :user="user"
      :pictures="pictures"
    />
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
    try {
      const res = await axios.get(`/users/${this.$route.params.username}/pictures`);
      this.pictures = res.data.map((pic) => {
        const liked = pic.Likes.some((like) => like.userId === this.user.id);
        return { ...pic, liked, likeCount: pic.Likes.length };
      });
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    likePicture(pictureId) {
      const picture = this.pictures.filter((pic) => pic.id === pictureId)[0];
      picture.liked = true;
      picture.likeCount += 1;
    },
    unlikePicture(pictureId) {
      const picture = this.pictures.filter((pic) => pic.id === pictureId)[0];
      picture.liked = false;
      picture.likeCount -= 1;
    },
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
