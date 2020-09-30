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
    console.log(${PRODUCT_SERVICE_SERVICE_HOST})
    console.log(${PRODUCT_SERVICE_SERVICE_PORT})
    axios.get("http://" + process.env.PRODUCT_SERVICE_SERVICE_HOST + ":" + process.env.PRODUCT_SERVICE_SERVICE_PORT + "/api/post")
        .then(res => this.posts = res.data);
  },
  methods: {
    deletePost: function (id) {
      axios.delete("http://" + process.env.PRODUCT_SERVICE_SERVICE_HOST + ":" + process.env.PRODUCT_SERVICE_SERVICE_PORT + "/api/post/" + id);
    },
  }
}
</script>

<style scoped>

</style>