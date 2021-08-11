<template>
  <div>
    <div class="container fluid">
      <form
        id="app"
        @submit="checkForm"
        method="post"
      >
      <h4>{{ id ? 'Update' : 'Add' }} User</h4>

      <div v-if="errors.length" style="color: darkred; margin: 20px 0px; text-align: left">
          <b>Please correct the following error(s):</b>
          <div>
            <div v-for="error in errors">{{ error }}</div>
          </div>
        </div>

      <div class="row my-3 form-group" >
          <label>Username:</label>
          <input v-model="user.username" class="form-control input-lg" type="text" />
      </div>

      <div class="row my-3 form-group" >
          <label>Gender:</label>&nbsp; &nbsp;
          <div class="form-check-inline">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" value="male" v-model="user.gender">Male
            </label>
          </div>
          <div class="form-check-inline">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" value="female" v-model="user.gender">Female
            </label>
          </div>
      </div>

      <div class="my-3 row form-group" >
          <label>Tel:</label>
          <input v-model="user.tel" class="form-control input-lg" type="tell">
      </div>

      <div class="row my-3 form-group" >
          <label>Email:</label>
          <input v-model="user.email" class="form-control input-lg" type="text">
      </div>

      <div class="row my-3 form-group" >
          <label>Hobby:</label>
          <textarea v-model="user.hobby" class="form-control input-lg"></textarea>
      </div>

      <div class="row my-3 form-group" >
        <label>Address:</label>
        <textarea v-model="user.address" class="form-control input-lg"></textarea>
      </div>

      <div>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
      </form>

    </div>

  </div>

</template>

<script>
export default {
  name: 'UserForm',
  data () {
    return {
      user: {
        username: '',
        tel: '',
        address: '',
        email: '',
        hobby: '',
        gender: ''
      },
      errors: []
    }
  },
  props: ['id'],
  methods: {
    checkForm (e) {
      e.preventDefault()
      // Validate form
      this.errors = []

      if (!this.user.username) {
        this.errors.push('Name required.')
      }
      if (!this.user.tel) {
        this.errors.push('Tel required.')
      }

      if (!this.user.gender) {
        this.errors.push('Gender required.')
      }
      if (!this.user.email) {
        this.errors.push('Emails required.')
      } else if (!this.validEmail(this.user.email)) {
        this.errors.push('Valid email required.')
      }

      if (!this.errors.length) {
        this.save()
        return true
      }

      return false
    },

    save () {
      this.$emit('saveUser', this.user)
      this.user = {
        username: '',
        tel: '',
        address: '',
        email: '',
        hobby: '',
        gender: ''
      }
    },

    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
