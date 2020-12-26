<template>
  <!-- //TODO : Data individual siswa -->
  <div class="container bg-red">
    <div class="infoSiswa">
      <Button bg="white" class="back_button" v-on:buttonClick="() => $router.push('/murid')" :noShadow="true"><i class="material-icons">chevron_left</i></Button>
    </div>
    <div class="chartContainer">
      Perkembangan siswa
      <div class="chart"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
.back_button{
  width: 32px !important;
  height:32px;
  padding:0 !important;
  border-radius: .5rem !important;
  position: relative;
  i{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
.container{
  display: flex;
  height: 100%;
}

.infoSiswa{
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.chartContainer{
  width: 70%;
  background: white;
  margin-left: auto;
  padding: 1rem;
  border-bottom-left-radius: 1rem;
}
</style>
