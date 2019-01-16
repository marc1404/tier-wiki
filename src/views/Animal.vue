<style scoped>
  .animal {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
  }

  .tiger-shark {
    max-width: 700px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08);
  }
</style>

<template>
  <div class="animal">
    <img class="tiger-shark" src="../assets/tiger-shark.jpg" alt="Tiger Shark" />
  </div>
</template>

<script>
  export default {
    name: 'Animal'
  };
</script>
