<template>
  <div class="container">
    <br>
    <div class="col-lg-7" v-for="room  in roomDetails" :key ="room._id">
      <div class="card" v-if="!room.deleted">
        <div class="card-header">{{ room.full_name }}
          <span class="card-title pull-right"> {{ room.room_number }} </span>
        </div>
        <div class="card-body">
          <div>{{ room.people }} </div> People
          <br>
          <br>
          <div>{{ room.room_type }}</div>
          <button type="button" class="btn btn-danger pull-right" data-toggle="modal" data-target=".bd-example-modal-sm" @click="removeData(room._id)">Remove</button>
        </div>
        <div class="card-footer footerH">
          <CountdownTimer :date="room.time"></CountdownTimer>
        </div>
      </div>
    </div>
    <!-- @click="deleteData(room, room._id)" -->
  </div>
</template>

<script>
import CountdownTimer from './timer'
import Book from './book.vue'
import http from './../../helper/axois'
export default {
  data () {
    return {
      roomDetails: []
    }
  },
  components: {
    CountdownTimer,
    Book
  },
  methods: {
    removeData (arg) {
      let _data = {
        deleted: true,
        deleted_at: Date.now(),
        time: null,
        room_number: null
      }
      http.patch('/rooms/' + arg, _data)
        .then(response => console.log(response))
      window.location.reload()
    }
  },
  created () {
    http.get('/rooms')
      .then((response) => {
        this.roomDetails = response.data
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.container {
  padding-top: 5vh;
}

</style>
