<template>
  <div>
    <b-form @submit="editPost" :items="items">
      <b-form-group
          label="Author:"
          label-for="author"
          description="You are the next Shakespeare"
      >
        <b-form-input
            id="author"
            type="text"
            v-model="items.author"
            required
            v-bind:placeholder="items.post.author"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Note:" label-for="note">
        <b-form-input
            id="note"
            type="text"
            v-model="items.note"
            required
            v-bind:placeholder="items.post.note"
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
        .then(res => this.items.post = res.data)
  },
  data() {
    return {
      items: {
        author: "",
        note: "",
        post: {}
      }
    }
  },

  methods: {
    editPost: function (event) {
      const self = this;
      event.preventDefault();
      axios.put("http://localhost:9000/api/post/" + this.$route.params.id, {
        'author': this.items.author,
        'note': this.items.note
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