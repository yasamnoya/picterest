<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid w-75">
        <router-link class="navbar-brand" to="/"
          ><img src="@/assets/picterest_logo.png" alt="Picterest Logo"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">All Pics</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/my">My Pics</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Add a Pic</a
              >
              <ul class="dropdown-menu p-2" aria-labelledby="navbarDropdown">
                <li>
                  <input type="text" v-model="url" placeholder="Pic url" class="form-control" />
                </li>
                <li>
                  <input
                    type="text"
                    v-model="description"
                    placeholder="Description"
                    class="form-control"
                  />
                </li>
                <li>
                  <button @click.prevent="sendPicture" class="btn btn-outline-primary mt-2 w-100">
                    Send
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          <form class="d-flex">
            <button class="btn btn-outline-dark">
              <img src="@/assets/GitHub-Mark-32px.png" alt="GitHub Logo" class="me-2" />Login
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Nav',
  data() {
    return {
      url: '',
      description: '',
    };
  },
  methods: {
    async sendPicture() {
      try {
        const { url, description } = this;
        await axios.post('/pictures', { url, description });
        this.$router.go('/');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
