<template>
<div class="b">
  <div class="a">
    <div class="d row">
        <div class="col-md-3"></div>
            <div class="offset-1 col-md-6">
                <h2>Hotel Booking System</h2>
            </div>
        </div>
  </div>

  <div class="container">
        <form class="form-horizontal" @submit.prevent="login">
           <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h2>Login</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="sr-only" for="email">E-Mail Address</label>
                        <div class="input-group mr-sm-2 mb-sm-0">
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                            <input type="text" name="username" class="form-control text-center"
                                   placeholder="Username" v-model="user.username" required autofocus>
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
                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-unlock"></i></div>
                            <input type="password" name="password" class="form-control text-center"
                                   placeholder="Password" v-model="user.password" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group btn-group mr-sm-2 mb-sm-0">
                        <div class="btn btn-outline-secondary input-group-addon" style="width: 2.6rem"><i class="fa fa-sign-in"></i></div>
                        <button class="form-control btn btn-outline-secondary" >Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-center"><span style=" color:  rgb(47, 90, 78);">New user?</span>
                <a @click="navigateToSignup" style=" color: rgb(96, 195, 157); cursor: pointer">Create new account</a></p>
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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
        .then(res => {
          const jwttoken = res.data.token
          localStorage.setItem('token', jwttoken)
          if (jwttoken) {
            this.$router.push({ name: 'users' })
          }
        })
        .catch(err => {
          console.log(err)
          this.$swal('Please provide the correct Username / Password ')
        })
    },
    navigateToSignup () {
      this.$router.push({ name: 'signup' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.b{
  width: 100%;
  height: 100vh;
  background-color: rgb(204, 211, 209);
  overflow: hidden;
}
.a{
  height: 40vh;
  width: 140vw;
  background-color: rgb(96, 195, 157);
  transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  position: relative;
  top: -100px;
  left: -20px;
  -webkit-box-shadow: 10px 10px 105px 12px rgba(181,181,181,1);
  -moz-box-shadow: 10px 10px 105px 12px rgba(181,181,181,1);
  box-shadow: 10px 10px 105px 12px rgba(181,181,181,1);
}
.d{
    position: relative;
    font-family: "Comfortaa", cursive;
    font-weight: bolder;
    font-size: 6vh;
    top:30vh;
    color: rgb(218, 247, 236);
    transform: rotate(5deg);
    -webkit-transform: rotate(5deg);
    -moz-transform: rotate(5deg);
}
.form-group, input, span{
    background-color: rgb(204, 211, 209);
}
.btn{
    background-color: rgb(96, 195, 157);;
}
</style>
