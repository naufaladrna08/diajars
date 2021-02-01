<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  extends: Bar,
  mixins: [reactiveProp],
  mounted () {
    this.renderChart({
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
          data: [this.chartData.nilaiAgama,
                this.chartData.motorikHalus,
                this.chartData.motorikKasar,
                this.chartData.bahasa,
                this.chartData.bahasa,
                this.chartData.kognitif,
                this.chartData.sosialEmosi,
                this.chartData.seni
                ]
        },
      ]
    },
    {
      responsive: false,
      scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    })
  }
}
</script>
