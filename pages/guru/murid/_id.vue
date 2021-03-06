<template>
  <!-- //TODO : Data individual siswa -->
  <div class="container bg-red">
    <div class="infoSiswa">
      <Button bg="white" class="back_button" v-on:buttonClick="() => $router.push('/guru/murid')" :noShadow="true"><i class="material-icons">chevron_left</i></Button>
      <div class="datamuridContainer">
        <p>Nama</p><p class="data">{{ userdata.nama }}</p>
        <p>JK</p><p class="data">{{ userdata.jenisKelamin }}</p>
        <p>Umur</p><p class="data">{{ userdata.umur }}</p>
      </div>
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
                  0
                  ]
          },
        ]
      },
      muridId: 1,
      userdata: {
        nama: "",
        jenisKelamin: "",
        umur: ""
      }
    }
  },
  methods:{
    fetchChartData(){
      let self = this

      this.$axios.$post('murid/get_statistic', {
        muridId: this.$route.params.id
      })
      .then(function(resp) {
        console.log(self.$route.path)
        self.chartData = {
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
              data: [resp.agama,
                    resp.motorik_halus,
                    resp.motorik_kasar,
                    resp.bahasa,
                    resp.kognitif,
                    resp.sosial_emosi,
                    resp.seni
                  ]
            },
          ]
        }
      })
    },
    fetchUserdata() {
      let self = this
      this.$axios.$post('murid/get_data', {
        muridId: this.$route.params.id
      }).then((resp) => {
        self.userdata.nama = resp.nama
        self.userdata.jenisKelamin = resp.jenisKelamin
        self.userdata.umur = resp.umur
      })      
    },
  },
  mounted(){
    this.fetchChartData()
    this.fetchUserdata()
  }
}
</script>
<style lang="scss" scoped>
.chartContainer{
  width: 100%;
  height: 100%;
  position: relative;
}
.datamuridContainer{
  margin: auto;
  margin-left: 0;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  p, .data{
    color: white;
    width: 30%;
  }
  .data{
    width: 70%;
    text-align: right;
  }
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
