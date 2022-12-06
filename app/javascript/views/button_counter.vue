<script>
  export default {
    data() {
     return {
      count: 0
     }
    }
  }
</script>

<template>
  <button
    class="btn btn-primary"
    @click="count++"
  >You clicked me {{ count }} times.</button>
</template>
