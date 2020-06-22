<template>
  <div class="home">
    <img src="../assets/talkify-logo.png" alt />

    <Button class="mr-4" @click.native="loginWithGithub()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-github"
        id="github_icon"
      >
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        />
      </svg>
      <span class="mr-1">Login with Github</span>
    </Button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Button from '@/components/Button.vue';

export default {
  name: 'Home',
  components: {
    Button
  },
  computed: {
    //...mapActions(['/auth/loginWithGithub']);

    ...mapActions('auth', ['loginWithGithub'])
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}

.home {
  width: 100%;
  height: 100%;
  background: #151b21;
  color: #00c1f9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img {
  width: 500px;
  height: 500px;
}

.mr-1 {
  margin-left: 1rem;
}

.mt-4 {
  margin-top: 4rem;
}
</style>
