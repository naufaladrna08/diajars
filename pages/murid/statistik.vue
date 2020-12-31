<template>
  <!-- //TODO : Data individual siswa -->
  <div class="container bg-red">
    <div class="infoSiswa">
      <Button bg="white" class="back_button" v-on:buttonClick="() => $router.push('/murid')" :noShadow="true"><i class="material-icons">chevron_left</i></Button>
    </div>
    <div class="whiteBox">
      Perkembangan siswa
      <div class="chartContainer">
        <Chart style="height: 100%;width:100% !important" :chartData="chartData"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      chartData: {
        nilaiAgama: 0,
        motorikHalus: 0,
        motorikKasar: 0,
        bahasa: 0,
        kognitif: 0,
        sosialEmosi: 0,
        seni: 0
      }
    }
  },
  methods:{
    fetchChartData(){
      //masukin satu2 ke chartData
    }
  },
  created(){
    this.fetchChartData()
  }
}
</script>
<style lang="scss" scoped>
.chartContainer{
  width: 100%;
  height: 100%;
  position: relative;
}
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

.whiteBox{
  width: 70%;
  background: white;
  margin-left: auto;
  padding: 1.5rem;
  border-bottom-left-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>
