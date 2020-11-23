<template>
  <div class="container bg-red">
    <div class="taskbar">

    </div>

    <div class="whitecard">

    </div>

    <i class="material-icons">face</i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container{
    // display: flex;
    height: 100%;
  }
  .taskbar{
    position: absolute;
    z-index: 1;
  }
  .whitecard{
    height: 100%;
    width: 100%;
    z-index: 2;
    background: white;
  }

</style>
