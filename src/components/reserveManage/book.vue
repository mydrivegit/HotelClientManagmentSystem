<template>
    <div class="container">
      <h1 class="modal-title">Book a Room</h1>
      <form @submit.prevent="bookingDetail">
          <div class="form-group" >
              <label class="form-control-label">Full Name</label>
              <input type="text" class="form-control" placeholder="e.g. John Smith" v-model="Room.full_name" required>
          </div>
          <div class="form-group">
              <label class="form-control-label">ID Proof</label>
              <select class="form-control" v-model="Room.id_proof" required>
                  <option>Passport</option>
                  <option>National identity card</option>
                  <option>Driving Licence</option>
              </select>
          </div>
          <div class="form-group">
              <label class="form-control-label">Id Proof Number</label>
              <input type="text" class="form-control" v-model="Room.id_proof_number" required>
          </div>
          <div class="form-group">
              <label class="form-control-label">Checkout</label>
              <input type="date" class="form-control" v-model="Room.time" required>
          </div>
          <div class="form-group">
              <label class="form-control-label">How Many People</label>
              <select class="form-control" v-model="Room.people" required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </select>
          </div>
          <div class="form-group">
              <label class="form-control-label">Room Type</label>
              <select class="form-control" v-model="Room.room_type" required>
                  <option>Single</option>
                  <option>Double</option>
                  <option>Triple</option>
                  <option>Quad</option>
                  <option>Queen</option>
                  <option>King</option>
                  <option>Twin</option>
                  <option>Hollywood Twin Room</option>
                  <option>Studio</option>
                  <option>Suite / Executive Suite</option>
                  <option>President Suite | Presidential Suite</option>
              </select>
          </div>
          <div class="form-group">
              <label class="form-control-label">Room Number</label>
              <select class="form-control" v-model="Room.room_number" required>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
              </select>
          </div>
          <button class="btn btn-primary">Book</button>
      </form>
    </div>
</template>

<script>
import http from './../../helper/axois'
export default {
  data () {
    return {
      Room: {
        full_name: '',
        time: '',
        people: '',
        kids: '',
        room_type: '',
        room_number: '',
        id_proof_number: '',
        id_proof: ''
      }
    }
  },
  methods: {
    bookingDetail () {
      let newRoom = {
        full_name: this.Room.full_name,
        time: this.Room.time,
        people: this.Room.people,
        kids: this.Room.kids,
        room_type: this.Room.room_type,
        room_number: this.Room.room_number,
        room_occupied: this.Room.room_number,
        id_proof_number: this.Room.id_proof_number,
        id_proof: this.Room.id_proof
      }
      http.post('/rooms', newRoom)
        .then((response) => {
          console.log(response)
          this.$router.push({ name: 'reserve' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>
