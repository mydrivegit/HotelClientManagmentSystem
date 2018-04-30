<template>
  <div class="navposition text-nowrap col-md-2">
      <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
        <router-link class="nav-link cursor" tag="li" role="tab" :to="{name: 'userProfile'}">Edit Profile</router-link>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navposition {
  position: fixed;
  padding-top: 10vh;
}
.cursor{
  cursor: pointer;
}

</style>
