<template>
  <div>
    <b-table striped hover :items="posts"></b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      posts: []
    }
  },
  created() {
    axios.get("http://localhost:9000/api/post")
      .then(res => this.posts = res.data);
  }
}
</script>

<style scoped>

</style>