<template>
  <div>
    <b-form @submit="createPost" :items="post">
      <b-form-group
          label="Author:"
          label-for="author"
          description="You are the next Shakespeare"
      >
        <b-form-input
            id="author"
            type="text"
            v-model="post.author"
            required
            placeholder="Enter Author"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Note:" label-for="note">
        <b-form-input
            id="note"
            type="text"
            v-model="post.note"
            required
            placeholder="Enter Note"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreatePost",
  data() {
    return {
      post: {
        author: "",
        note: "",
      }
    }
  },
  methods: {
    createPost: function (event) {
      const self = this;
      event.preventDefault();
      axios.post("http://" + process.env.PRODUCT_SERVICE_SERVICE_HOST + ":" + process.env.PRODUCT_SERVICE_SERVICE_PORT + "/api/post", {
        'author': this.post.author,
        'note': this.post.note
      }).catch(error => {
        // here we can add some generated html to show if the data in incorrect
        console.log(error)
      }).then(function () {
        self.$router.push({ path: "/posts" })
      });
    }
  }
}
</script>

<style scoped>

</style>