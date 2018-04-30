<template>
<div class="userGroup"> List of users
  <div class="container">
    <div class="card userCard"
      v-for="user in users"
      :key="user._id">
    <div class="card-body card-body-sm " @click="sendMessage(user._id)">
      <h6 class="card-subtitle">{{user.first_name}}</h6>
      <!-- <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a> -->
    </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  created () {
    this.$store.dispatch('fetchUsersList')
  },
  methods: {
    sendMessage (arg) {
      this.$router.push({ name: 'manageUser', params: { userId: arg } })
    }
  },
  computed: {
    users () {
      return this.$store.getters.users
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userGroup{
  height: 100%;
  padding-top: 10vh;
  margin: auto;
  background-color: rgb(204, 211, 209);
  overflow: hidden;
  text-align: center;
}
.userCard{
  margin: auto;
  width: 18rem;
  text-align: left;
}
</style>
