<template>
    <div class="countdown" v-if="minutes">
          {{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}
    </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String
    }
  },
  data () {
    return {
      actualTime: this.moment().format('X'),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    addSecond () {
      this.actualTime = this.moment().format('X')
      setTimeout(() => {
        this.addSecond()
      }, 1000)
    },
    getDiffInSeconds () {
      return this.moment(this.date + ' 22:00:00').format('X') - this.actualTime
    },
    compute () {
      let duration = this.moment.duration(this.getDiffInSeconds(), 'seconds')
      this.days = duration.days() > 0 ? duration.days() : 0
      this.hours = duration.hours() > 0 ? duration.hours() : 0
      this.minutes = duration.minutes() > 0 ? duration.minutes() : 0
      this.seconds = duration.seconds() > 0 ? duration.seconds() : 0
    }
  },
  created () {
    this.compute()
    this.addSecond()
  },
  watch: {
    actualTime (val, oldVal) {
      this.compute()
    }
  }
}
</script>

<style scoped>
</style>
