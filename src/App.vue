
<template>
  <div class="main-app">
    <h1>My Vue.js project {{ title }}</h1>
    <p>
      Hello world!
    </p>
  </div>
</template>

<script setup lang="ts">
type Data = {
  title: string
}

const title = "Big Apple" 


</script>

<style scoped>
.main-app {
  background: lightblue;
}
h1, p {
  color: red;
  text-align: center;
}

</style>
