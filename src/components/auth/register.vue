<template>
<div class="register">
  <div class="container">
        <form class="form-horizontal" @submit.prevent="submit">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2>User Register</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label class="sr-only" for="email">Enter your First name</label>
                        <div class="input-group mr-sm-2 mb-sm-0">
                            <input type="text" class="form-control text-center"
                            v-model="user.first_name" placeholder="First Name" autofocus>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label class="sr-only" for="email">Enter your last name</label>
                        <div class="input-group mr-sm-2 mb-sm-0">
                            <input type="text" class="form-control text-center"
                            v-model="user.last_name" placeholder="Last Name">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="sr-only" for="email">E-Mail Address</label>
                        <div class="input-group mr-sm-2 mb-sm-0">
                            <input type="text" class="form-control text-center"
                            v-model="user.username" placeholder="Username" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="sr-only">Role</label>
                        <div class="input-group mr-sm-2 mb-sm-0">
                            <b-form-select v-model="user.role" :options="role" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group ">
                        <label class="sr-only" for="password">Password</label>
                        <div class="input-group mr-sm-2 mb-sm-0">
                            <input type="password" class="form-control text-center"
                            v-model="user.password" placeholder="Password" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group btn-group mr-sm-2 mb-sm-0">
                        <button class="form-control btn btn-outline-secondary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        first_name: '',
        last_name: '',
        role: null,
        username: '',
        password: ''
      },
      role: this.$store.state.role
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('signup', this.user)
        .then(res => {
          if (res.status === 201) {
            this.$router.push({name: 'users'})
            this.$swal('Account ' + this.user.username + ' created Succesfully : please login')
          }
        })
        .catch(err => {
          console.log(err)
          this.$swal('Username already exist')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group, input{
    background-color: rgb(204, 211, 209);
}
.btn{
    background-color: rgb(96, 195, 157);;
}
.register {
    padding-top: 10vh;
}
</style>
