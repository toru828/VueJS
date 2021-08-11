<template>
  <div>
    <div class="container fluid">
      <!-- User -->
      <UserForm @saveUser="addUser"></UserForm>
      <br />
      <hr />
      <br />
      <h4>Users List</h4>
      <div class="card-body">
        <div class="row header">
          <div class="col card-title text-bold" >Username</div>
          <div class="col card-title text-bold">Email</div>
          <div class="col card-title text-bold">Tel</div>
          <div class="col card-title  text-bold">Gender</div>
          <div class="col card-title text-bold">Hobby</div>
          <div class="col card-title text-bold">Address</div>
        </div>
        <div class="table-hover">
          <div v-if="users.length == 0">
            There is no data.
          </div>
          <div v-else v-for="user in users" :key="user.id" class="row vertical-middle">
            <div class="col">{{ user.username }}</div>
            <div class="col">{{ user.email }}</div>
            <div class="col">{{ user.tel }}</div>
            <div class="col">{{ user.gender }}</div>
            <div class="col" v-html="user.hobby"></div>
            <div class="col" v-html="user.address"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from './UserForm'
export default {
  name: 'UsersList',
  components: {
    UserForm
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    addUser (user) {
      this.users.push(user)
    }
  }
}

</script>
<style>
  .text-bold {
    font-weight: bold;
  }
</style>
