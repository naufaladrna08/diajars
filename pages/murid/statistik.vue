<template>
  <!-- //TODO : Data individual siswa -->
  <div class="container bg-red">
    <div class="infoSiswa">
      <Button bg="white" class="back_button" v-on:buttonClick="() => $router.push('/murid')" :noShadow="true"><i class="material-icons">chevron_left</i></Button>
    </div>
    <div class="whiteBox">
      Perkembangan siswa
      <div class="chartContainer">
        <Chart style="height: 100%;width:100% !important" :chart-data="chartData"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  data(){
    return {
      chartData:{
      labels: ['Nilai Agama', 'Motorik halus','Motorik kasar','Bahasa','Kognitif','Sosial emosi','Seni'],
      datasets: [
        {
          label: 'Skor perkembangan anak',
          backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgb(70,189,135)'
            ],
          data: [0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
                ]
        },
      ]
    },
      muridId: 1
    }
  },
  methods: {
    fetchChartData(){
      let self = this
      this.$axios.$post('murid/get_statistic', {
        muridId: self.muridId
      })
      .then(function(resp) {
        //

        this.chartData = {
          labels: ['Nilai Agama', 'Motorik halus','Motorik kasar','Bahasa','Kognitif','Sosial emosi','Seni'],
          datasets: [
            {
              label: 'Skor perkembangan anak',
              backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgb(70,189,135)'
                ],
              data: [resp.nilaiAgama,
                    resp.motorikHalus,
                    resp.motorikKasar,
                    resp.bahasa,
                    resp.bahasa,
                    resp.kognitif,
                    resp.sosialEmosi,
                    resp.seni
                    ]
            },
          ]
        }

      })
    },
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
