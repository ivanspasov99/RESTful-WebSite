<template>
  <div>
    <b-table striped bordered hover responsive="sm" :fields="fields" :items="posts">
      <template v-slot:cell(actions)="{ item }">
        <b-button-group>
          <b-form @submit="deletePost(item.id)">
            <b-button type="submit" variant="danger">Delete</b-button>
          </b-form>
          <b-button variant="dark" active><router-link :to="{ path: '/edit/' + item.id}">Edit</router-link></b-button>
        </b-button-group>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Posts",
  data() {
    return {
      fields: [
        { key: 'id', sortable: true },
        { key: 'author', sortable: true },
        { key: 'note', sortable: true },
        { key: 'createdAt', sortable: true },
        { key: 'updatedAt', sortable: true },
        { key: 'actions' },
      ],
      posts: []
    }
  },
  created() {
    axios.get("http://localhost:9000/api/post")
        .then(res => this.posts = res.data);
  },
  methods: {
    deletePost(id, event) {
      const self = this;
      event.preventDefault();
      axios.delete("http://localhost:9000/api/post/" + id).then(function () {
            self.$router.push({path: "/posts"})
      });
    },
  }
}
</script>

<style scoped>

</style>