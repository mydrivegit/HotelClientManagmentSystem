<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <router-link class="nav-link text-nowrap" style="cursor: pointer;" data-toggle="collapse" data-target=".navbar-collapse.show"
  tag="li" :to="{name: 'reserve'}">Hotel Reservation</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="ture" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link borderLineRight" data-toggle="collapse" data-target=".navbar-collapse.show" tag="li" :to="{name: 'book'}">Booking</router-link>
      </li>
    </ul>
    <ul class="navbar-nav mr-end">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-nowrap" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{users.username}}
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item cursor" data-toggle="collapse" data-target=".navbar-collapse.show" tag="li"
          :to="{name: 'userProfile'}">Profile</router-link>
          <router-link class="dropdown-item cursor" data-toggle="collapse"
        data-target=".navbar-collapse.show" tag="li" :to="{name: 'users'}">List of User</router-link>
          <router-link v-if="users.role" class="dropdown-item cursor" data-toggle="collapse"
        data-target=".navbar-collapse.show" tag="li" :to="{name: 'register'}">User Register</router-link>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item cursor" @click="logout">Log Out</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import http from '../helper/axois'
export default {
  data () {
    return {
      users: [],
      data: {
        Admin: 'ture'
      }
    }
  },
  created () {
    http.get('/users/profile')
      .then(res => {
        if (res.status === 401) {
          localStorage.removeItem('token')
          this.$router.push('/users')
        } else {
          this.users = res.data.doc['0']
        }
      })
      .catch(err => {
        this.$router.push('/login')
        console.log(err)
      })
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.borderLineRight{
  border-right: 1px solid lightgray;
  cursor: pointer;
}
.borderLineLeft{
  border-left: 1px solid lightgray;
}
.cursor{
  cursor: pointer;
}
</style>
