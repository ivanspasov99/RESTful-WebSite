<template>
  <div>
    <b-form @submit="editPost" :items="post">
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
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Note:" label-for="note">
        <b-form-input
            id="note"
            type="text"
            v-model="post.note"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ViewPost",
  created() {
    axios.get("http://localhost:9000/api/post/" + this.$route.params.id)
        .then(res => this.post = res.data)
  },
  data() {
    return {
      post: {}
    }
  },

  methods: {
    editPost: function (event) {
      const self = this;
      event.preventDefault();
      axios.put("http://localhost:9000/api/post/" + this.$route.params.id, {
        'author': this.post.author,
        'note': this.post.note
      }).catch(error => {
        console.log(error)
      }).then(function () {
        self.$router.push({path: "/posts"})
      });
    }
  }
}
</script>

<style scoped>

</style>