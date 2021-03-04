<template>
  <div id="root">
    <div class="container">
      <video width="320" height="240" controls>
        <source src="http://localhost/materi/Dadang Diajars TK A 1 scene 1, 3+4 [preview 1].mp4" type="video/mp4">
        Your browser does not support the video tag.
</video>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
#root {
  width: 100%;
  height: 100%;
  background: rgb(28, 15, 209);
}
.container {
  width: 80%;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
}

video {
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
}
</style>
