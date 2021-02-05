<template>
  <div class="container bg-yellow">
    <div class="taskbar">
      <!-- ᮊᮥᮓᮥᮔ ᮄᮄᮉ ᮒᮨᮂ ᮝᮧᮁᮊ᮪ -->
      
      <div class="task" @click="kerjakanTugas('Binatang', 'play/materi_binatang')"> M </div>
      <div class="task" @click="kerjakanTugas('Mengenal Huruf', 'play/mengenal_huruf')"> G </div>
      <!-- ばあみたい -->
    </div>

    <div class="whitecard" :class="{taskbarOpen : taskbarIsOpen}">
      <i class="material-icons insight" @click="() => $router.push('/murid/statistik')">insights</i>
      <h1 class="choosetheme">Pilih tema</h1>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.aku + ')'}" @click="onThemecardClick('Aku')">
        <p>Aku</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.lingkunganku + ')'}" @click="onThemecardClick('Lingkunganku')">
        <p>Lingkunganku</p>
        <span class="batch">Tugas baru</span>
      </div>
      <!-- <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.binatang + ')'}" @click="onThemecardClick('Kebutuhanku')">
        <p>Kebutuhanku</p>
        <span class="batch">Tugas baru</span>
      </div> -->
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.binatang + ')'}" @click="onThemecardClick('Binatang')">
        <p>Binatang</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.tanaman + ')'}" @click="onThemecardClick('Tanaman')">
        <p>Tanaman</p>
        <span class="batch">Tugas baru</span>
      </div>
      <!-- //semester 2 -->
      <!-- <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.binatang + ')'}" @click="onThemecardClick('Rekreasi')">
        <p>Rekreasi</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.binatang + ')'}" @click="onThemecardClick('Kendaraan')">
        <p>Kendaraan</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.binatang + ')'}" @click="onThemecardClick('Pekerjaan')">
        <p>Pekerjaan</p>
        <span class="batch">Tugas baru</span>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.binatang + ')'}" @click="onThemecardClick('Api,air, udara')">
        <p>Api,air, udara</p>
        <span class="batch">Tugas baru</span>
      </div> -->
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
      </div>
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

        this.$axios.$post('materi/lihat_tugas', data)
        .then((r2) => {
          this.task = r2
        })
      })
    },
    kerjakanTugas(name, link) {
      this.$swal.fire({
        title: 'Kerjakan tugas: ' + name + '?',
        confirmButtonText: 'Mulai'
      }).then((confirmed) => {
        if (confirmed) {
          this.$router.push(link)
        }
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
    border-radius: .5rem;
  }

  .insight{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: #434343;
  }
</style>
