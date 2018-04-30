<template>
  <div class="userGroup">
      <div class="container col-md-3 userCard">My account Details
        <form class="form-horizontal text-left text-nowrap" @submit.prevent="enter">
            <div class="row mb-3">
                <div class="col-md-12">
                    <div class="form-inline">
                        <label class="form-group col-md-6">Username</label>
                        <div class="form-group col-md-6">
                             <input v-if="show" type="text" class="form-control form-control-sm form-control-plaintext"
                            v-model="users.username">
                            <div v-else type="text">{{users.username}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-12">
                    <div class="form-inline">
                        <label  class="form-group col-md-6 text-nowrap">First name</label>
                        <div class="form-group col-md-6">
                            <input v-if="show" type="text" class="form-control form-control-sm"
                            v-model="users.firstName" autofocus>
                            <div v-else type="text">{{users.first_name}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-3">
                  <div class="col-md-12">
                    <div class="form-inline">
                        <label class="form-group col-md-6 text-nowrap">Last name</label>
                        <div class="form-group col-md-6">
                            <input v-if="show" type="text" class="form-control form-control-sm"
                            v-model="users.lastName">
                            <div v-else type="text">{{users.last_name}}</div>
                        </div>
                  </div>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-12">
                    <div class="form-inline">
                        <label  class="form-group col-md-6 text-right">Role</label>
                        <div class="form-group col-md-6">
                            <b-form-select v-if="show" v-model="users.role" :options="role" class="form-control form-control-sm" />
                            <div v-else type="text">{{users.role}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6" v-if="show">
                    <div class="form-group">
                        <div class="input-group btn-group">
                        <input type="button" class="col-md-12 form-control btn btn-sm btn-outline-secondary" value="Modify" @click="show=!show">
                        </div>
                    </div>
                </div>
                <div class="col-md-12 " v-else>
                    <div class="form-group">
                        <div class="input-group btn-group">
                        <input type="button" class="col-md-12 form-control btn btn-sm btn-outline-secondary" value="Modify" @click="show=!show">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <div class="input-group btn-group">
                        <button  v-if="show" class="form-control btn btn-sm btn-outline-secondary">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <hr>
        <form @submit.prevent="removeUser">
          <div class="row">
              <div class="form-group col-md-12">
                   <button class="form-control btn btn-outline-secondary">Delete my account</button>
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
      show: false
    }
  },
  created () {
    this.$store.dispatch('fetchUser')
  },
  computed: {
    users () { return this.$store.getters.user },
    role () { return this.$store.state.role }
  },
  methods: {
    enter () {
      this.$store.dispatch('modifyData', this.users)
        .then(res => {
          if (res.data) {
            alert('User details altered Succesfully')
            this.$router.push('/users')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeUser () {
      this.$store.dispatch('deleteUser')
        .then(res => {
          if (res.data) {
            this.$store.dispatch('deleteMessage')
              .then(res => {
                console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
            alert('User is deleted Succesfully')
            localStorage.removeItem('token')
            this.$router.push('/users')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userGroup{
  height: 100vh;
  padding-top: 10vh;
  margin: auto;
  background-color: rgb(204, 211, 209);
  overflow: hidden;
  text-align: center;
}

</style>
