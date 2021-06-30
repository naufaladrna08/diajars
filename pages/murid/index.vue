<template>
  <div class="container bg-yellow">
    <div class="taskbar">
      <!-- ᮊᮥᮓᮥᮔ ᮄᮄᮉ ᮒᮨᮂ ᮝᮧᮁᮊ᮪ -->
      <div v-for="task in tasks" :key="task.id">
        <div v-if="task.tipe === 'game'">
          <div class="task" @click="showTaskDetail(task.tugasId, task._tugasId, task.tipe, task.status)" :style="{backgroundSize: 'cover', backgroundImage: 'url(' + images.gameIcon + ')'}"></div>
        </div>  
        <div v-else>
          <div class="task" @click="showTaskDetail(task.tugasId, task._tugasId, task.tipe, task.status)" :style="{backgroundSize: 'cover', backgroundImage: 'url(' + images.materiIcon + ')'}"></div>
        </div>
      </div>
    </div>

    <div class="whitecard" :class="{taskbarOpen : taskbarIsOpen}">
      <i class="material-icons insight" @click="() => $router.push('/murid/statistik')">insights</i>

      <h1 class="choosetheme">Tema Semester 1</h1>

      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.aku + ')'}" @click="onThemecardClick('Aku')">
        <p>Aku</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.lingkunganku + ')'}" @click="onThemecardClick('Lingkunganku')">
        <p>Lingkunganku</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.kebutuhanku + ')'}" @click="onThemecardClick('Kebutuhanku')">
        <p>Kebutuhanku</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.binatang + ')'}" @click="onThemecardClick('Binatang')">
        <p>Binatang</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.tanaman + ')'}" @click="onThemecardClick('Tanaman')">
        <p>Tanaman</p>
      </div>
      <!-- //semester 2 -->
      <!-- <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.rekreasi + ')'}" @click="onThemecardClick('Rekreasi')">
        <p>Rekreasi</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.kendaraan + ')'}" @click="onThemecardClick('Kendaraan')">
        <p>Kendaraan</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.pekerjaan + ')'}" @click="onThemecardClick('Pekerjaan')">
        <p>Pekerjaan</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.aau + ')'}" @click="onThemecardClick('Api,air, udara')">
        <p>Api, air, udara</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.alatkomunikasi + ')'}" @click="onThemecardClick('Alat komunikasi')">
        <p>Alat komunikasi</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.negaraku + ')'}" @click="onThemecardClick('Negaraku')">
        <p>Negaraku</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.alamsemesta + ')'}" @click="onThemecardClick('Alam semesta')">
        <p>Alam semesta</p>
        <span class="batch">Tugas baru</span>
      </div> -->

      <h1 class="choosetheme"> Tugas Siswa </h1>

      <template v-for="task in tasks">
        <div class="themecard" 
            :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + task.thumbnail + ')'}" 
            @click="showTaskDetail(task.tugasId, task._tugasId, task.tipe, task.status)">
          
          <p class="toCapitalFirst"> {{ task.tipe + ": " + task.nama }} </p>

          <span class="batch">
            <div v-if="task.status === 0">
              Belum Dikerjakan
            </div>
            <div v-else>
              Sudah Dikerjakan
            </div>
          </span>
        </div>
      </template>
    </div>

    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="logout" @click="logout">
    <path d="M13 15V12H6V8H13V5L18 10L13 15ZM11 0C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V4H11V2H2V18H11V16H13V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H11Z" fill="#434343"/>
    </svg>

  </div>
</template>

<script>
export default {
  data(){
    return {
      muridId: 2,
      taskbarIsOpen: false,
      tasks: [],
      images: {
        aku: require('@/assets/image/bitmap/thumbnails/materi/aku.png'),
        lingkunganku: require('@/assets/image/bitmap/thumbnails/materi/lingkunganku.png'),
        binatang: require('@/assets/image/bitmap/thumbnails/materi/binatang.png'),
        tanaman: require('@/assets/image/bitmap/thumbnails/materi/tanaman.png'),
        negaraku: require('@/assets/image/bitmap/thumbnails/materi/negaraku.png'),
        alatkomunikasi: require('@/assets/image/bitmap/thumbnails/materi/alatkomunikasi.png'),
        alamsemesta: require('@/assets/image/bitmap/thumbnails/materi/alamsemesta.png'),
        aau: require('@/assets/image/bitmap/thumbnails/materi/aau.png'),
        kebutuhanku: require('@/assets/image/bitmap/thumbnails/materi/kebutuhanku.png'),
        pekerjaan: require('@/assets/image/bitmap/thumbnails/materi/pekerjaan.png'),
        kendaraan: require('@/assets/image/bitmap/thumbnails/materi/kendaraan.png'),
        rekreasi: require('@/assets/image/bitmap/thumbnails/materi/rekreasi.png'),

        gameIcon: require('@/assets/image/vector/game-icon.png'),
        materiIcon: require('@/assets/image/vector/materi-icon.png'),
      }
    }
  },
  methods:{
    onThemecardClick(theme){
      this.taskbarIsOpen = true
    },

    logout() {
      this.$auth.logout()
    },
    fetchMateri() {
      this.$axios.$post('/murid/get_class', {
        muridId: this.$auth.user.id
      })
      .then((r1) => {
        const data = new FormData
        data.append('kodeKelas', r1.kodeKelas)
        data.append('muridId', this.$auth.user.id)
        
        this.$axios.$post('materi/lihat_tugas', data)
        .then((r2) => {
          this.tasks = r2
        })
      })
    },
    showTaskDetail(id, _id, type, status) {
      // Dapatkan materi/game dari task id
      this.$axios.$post('materi/detail_tugas', {
        tugasId: id,
        type: type,
        uid: this.$auth.user.id
      }).then((resp) => {
        let tugas
        if (type == "materi") {
          tugas = "Membaca materi"
        } else {
          tugas = "Menyelesaikan permainan"
        }
        console.log(resp)
        /* Jika tugas sudah dikerjakan, tampilkan nilai. */
        let html = ``
        if (status != 0 && type == "game") {
          html =  `
          <p style='text-align: left;'>
            <h1> Hallo! </h1>
            Kamu telah mengerjakan tugas: <br>
            Judul Tugas: ${resp.nama} <br>
            Jenis Tugas: ${type} <br>
            Nilai: ${resp.nilai}
          </p>`
        } else if (status != 0 && type == "materi") {
          html =  `
          <p style='text-align: left;'>
            <h1> Hallo! </h1>
            Kamu telah mengerjakan tugas: <br>
            Judul Tugas: ${resp.nama} <br>
            Jenis Tugas: ${type}
          </p>`
        } else {
          html = `
            <p style='text-align: left;'>
            <h1> Hallo! </h1>
            Kamu mempunyai tugas baru: <br>
            Judul Tugas: ${resp.nama} <br>
            Jenis Tugas: ${type}
          </p>`
        }

        this.$swal({
          title: "Detail Tugas",
          html: html,
          showCancelButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            if (type == "materi") {
              this.$router.push(`/play/video?link=${resp.link}&tugas_id=${_id}`)
            } else { 
              this.$router.push(`/play/${resp.link}?tugas_id=${_id}`)
            }
          }
        })
      })
    }
  },
  created(){
    this.fetchMateri()
  }
}
</script>

<style lang="scss" scoped>

  .container{
    display: flex;
    height: 100%;
  }

  .choosetheme{
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
  }

  .taskbar{
    position: absolute;
    width: 3rem;
    overflow: hidden;
    overflow-y: auto;
    height: calc(100% - 3rem);

    z-index: 1;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .whitecard{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    z-index: 2;
    background: white;
    margin-left: auto;
    padding: 2rem;
    overflow: auto;
  }

  .themecard{
    margin: auto;
    width: 40%;
    background: rgb(240, 230, 238);
    height: 10rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
    position: relative;
    .batch{
      background: $red;
      color: #fff;
      border-radius: 100rem;
      padding: .2rem .5rem;
      font-size: .6rem;
      position: absolute;
      top: .5rem;
      left: .5rem;
    }
    p{
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translatex(-50%);
      color: #fff;
      padding: 10px;
      background: #222222AA;
    }
  }

  .logout{
    position: absolute;
    z-index: 3;
    bottom: 1rem;
    left: 1rem;
  }

  .map{
    width: 80%;
    margin: auto;
  }

  .taskbarOpen{
    width: calc(100% - 3rem);
    border-bottom-left-radius: 2rem;
  }

  .task{
    width: 2rem;
    height: 2rem;
    background: white;
    margin: .5rem;
    border-radius: .6rem;
    text-align: center;
    text-transform: uppercase;
    border: 3px solid white;
  }

  .insight{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: #434343;
  }

  .toCapitalFirst {
    text-transform: capitalize;
  }
</style>
