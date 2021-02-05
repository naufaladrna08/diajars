<template>
  <div id="root">
    <div class="container">
      <iframe src="http://localhost/games/html" scrollbar="no">  </iframe>
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

iframe {
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
}
</style>
