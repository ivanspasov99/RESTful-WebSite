<template>
  <div>
    <b-nav>
      <b-nav-item active><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item active><router-link to="/posts">Posts</router-link></b-nav-item>
      <b-nav-item active><router-link to="/create">Create Post</router-link></b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
</style>
