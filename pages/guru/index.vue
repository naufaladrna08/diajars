<template>
  <div class="container bg-red">
    <div class="taskbar">
      <div class="addTask" @click="() => contextIsOpen = true">
        <i class="material-icons">add</i>
      </div>
      <div v-for="task in rawTugas" :key="task.id">
        <div v-if="task.tipe === 'game'">
          <div class="task" @click="showTaskDetail(task.tugasId, task.nama)" :style="{backgroundSize: 'cover', backgroundImage: 'url(' + images.gameIcon + ')'}"></div>
        </div>  
        <div v-else>
          <div class="task" @click="showTaskDetail(task.tugasId, task.nama)" :style="{backgroundSize: 'cover', backgroundImage: 'url(' + images.materiIcon + ')'}"></div>
        </div>
      </div>
    </div>

    <div class="whitecard" :class="{taskbarOpen : taskbarIsOpen}">
      <div class="kelasFloating">
        <input id="code" value="kodekelas" style="opacity:0; position: absolute;bottom:-1000rem">

        <div class="kodeKelas" @click="copyCode">Kode Kelas : {{ kodeKelas }}</div>
        <i class="material-icons member" @click="() => $router.push('/guru/murid')">group</i>
      </div>

      <div v-if="isPremium == false">
        <div class="upgrade" @click="onUpgradeButtonClicked">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
          </svg>
          <p>
          Upgrade kelas
          </p>
        </div>
      </div>

      <label class="select" for="slct" style="position: absolute; right: 7.3rem">
        <p class="lead mb-1"> Pilih Semester </p>

        <select id="slct" @change="onChange($event)">
          <option value="1"> Semester 1 </option>
          <option value="2"> Semester 2 </option>
        </select>
        
        <svg>
          <use xlink:href="#select-arrow-down"></use>
        </svg>
      </label>
      <svg class="sprites">
        <symbol id="select-arrow-down" viewbox="0 0 10 6">
          <polyline points="1 1 5 5 9 1"></polyline>
        </symbol>
      </svg>

      <h1 class="choosetheme">Pilih tema </h1>
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
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.rekreasi + ')'}"  @click="onThemecardClick('Rekreasi')">
        <p>Rekreasi</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.kendaraan + ')'}" @click="onThemecardClick('Kendaraan')">
        <p>Kendaraan</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.pekerjaan + ')'}" @click="onThemecardClick('Pekerjaan')">
        <p>Pekerjaan</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.aau + ')'}" @click="onThemecardClick('Api,air, udara')">
        <p>Api, air dan udara</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.alatkomunikasi + ')'}" @click="onThemecardClick('Alat komunikasi')">
        <p>Alat komunikasi</p>
      </div>
      <div class="themecard" :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.negaraku + ')'}" @click="onThemecardClick('Negaraku')">
        <p>Negaraku</p>
      </div>
      <div class="themecard"  :style="{ backgroundSize: 'cover', backgroundImage: 'url(' + images.alamsemesta + ')'}" @click="onThemecardClick('Alam semesta')">
        <p>Alam semesta</p>
      </div>
    </div>

    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="logout" @click='logout'>
    <path d="M13 15V12H6V8H13V5L18 10L13 15ZM11 0C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V4H11V2H2V18H11V16H13V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H11Z" :fill="[taskbarIsOpen?'#fff':'#434343']"/>
    </svg>

    <div class="context" v-show="(contextIsOpen && !contextMateriIsOpen) || (contextIsOpen && !contextLatihanIsOpen)">
      <div class="blur" @click="() => contextIsOpen = false"></div>

      <div class="contextMenu bg-green" @click="() => {
        contextIsOpen = false
        contextMateriIsOpen = true
        }">

        <div class="label">
          <img
            :src="require(`~/assets/image/vector/Theory.svg`)"
            alt="Theory Icon"
            class="theory-icon"
          />
          <h1> Materi </h1>
        </div>

        <svg width="121" height="108" viewBox="0 0 121 108" fill="none" class="blob__left" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M92.995 108L18 108C8.05888 108 0 99.9411 0 90L0 21.7694C1.17016 21.0134 2.32814 20.2502 3.46484 19.4734C6.13958 17.6453 8.79376 15.6087 11.4628 13.5607C20.9367 6.291 30.5974 -1.12201 42.0281 0.141639C50.5902 1.08816 56.1353 7.80593 61.8186 14.6911C65.7502 19.4542 69.748 24.2975 74.8565 27.3656C80.4928 30.7506 87.8112 32.0606 94.9617 33.3405C106.213 35.3545 117.049 37.2941 120.262 47.1272C123.408 56.7573 115.951 64.4996 108.186 72.5627C102.99 77.9573 97.6564 83.4954 95.2671 89.8385C93.1313 95.5088 92.9788 101.77 92.995 108Z" fill="#00C491"/></svg>
      </div>

      <div class="contextMenu bg-yellow" @click="() => {
        contextIsOpen = false
        contextLatihanIsOpen = true
        }">

        <div class="label">
          <img
            :src="require(`~/assets/image/vector/Games.svg`)"
            alt="Latihan Icon"
            class="latihan-icon"
          />
          <h1> Latihan </h1>
        </div>

        <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg" class="blob__right"><path fill-rule="evenodd" clip-rule="evenodd" d="M99 4.28351L99 81C99 90.9411 90.9411 99 81 99L0.556617 99C0.441699 98.5481 0.341397 98.0874 0.256331 97.6176C-1.37609 88.6025 5.06571 81.643 11.7128 74.4618C16.7992 68.9667 22.0058 63.3417 23.8068 56.5664C25.7415 49.2882 23.9442 41.017 22.1962 32.9725C19.7954 21.9233 17.4874 11.3018 25.0702 4.2687C33.0394 -3.12272 44.0833 0.551417 55.4726 4.34043C62.1055 6.54708 68.8555 8.7927 75.1835 8.91423C81.3867 9.03337 87.8952 7.26831 94.3018 5.5309C95.876 5.10398 97.4441 4.67873 99 4.28351Z" fill="#F7BE3A"/></svg>
      </div>
    </div>

    <div class="materiContext" v-show="!contextIsOpen && contextMateriIsOpen">
      <div class="blur" @click="() => {
        contextMateriIsOpen = false
        contextIsOpen = true
        }"></div>

        <carousel :perPage="1" :paginationEnabled="false">
          <!-- <div> -->
            <slide v-for="materi in rawMateri" :key="materi.id">
              <div class="materiContextMenu" :style="{ backgroundSize: 'cover', backgroundImage: `url(${materi.thumbnail})`}" @click="addTask(materi.nama, materi.id, 'materi')">
                <h1 class="carousel-title"> {{ materi.nama }} </h1>
              </div>
            </slide>
          <!-- </div> -->
        </carousel>
    </div>

    <div class="latihanContext" v-show="!contextIsOpen && contextLatihanIsOpen">
      <div class="blur" @click="() => {
        contextLatihanIsOpen = false
        contextIsOpen = true
        }"></div>

        <carousel :perPage="1" :paginationEnabled="false">
            <slide v-for="game in rawGames" :key="game.id">
              <div class="latihanContextMenu" :style="{ backgroundSize: 'cover', backgroundImage: `url(${game.thumbnail})`}" @click="addTask(game.nama, game.id, 'game')">
                <h1 class="carousel-title"> {{ game.nama }} </h1>
              </div>
            </slide>
        </carousel>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      taskbarIsOpen: false,
      contextIsOpen: false,
      contextMateriIsOpen: false,
      contextLatihanIsOpen: false,
      isPremium: false,
      guruId: this.$auth.user.id,
      jenisKelas: 0,
      kodeKelas: 0,
      rawMateri: [{nama: 'ao',id:1},{nama: 'ao',id:2}],
      rawGames: [{nama: 'ao',id:1},{nama: 'ao',id:2}],
      rawTugas: [],

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
    onUpgradeButtonClicked(){
      this.$router.push('/upgrade_class')
    },
    onThemecardClick(theme){
      if (this.taskbarIsOpen != true) {
        this.taskbarIsOpen = true
      }  

      // let text = ''
      // switch (theme) {
      //   case 'Aku':
      //     text = "Pada tema ini, siswa akan diajarkan mengenai bagian-bagian tubuh manusia"
      //     break
      //   case 'Lingkunganku':
      //     text = "Pada tema ini, siswa akan diperkenalkan macam-macam benda yang ada di lingkungan kita"
      //     break;
      //   case 'Binatang':
      //     text = "Pada tema ini, siswa akan diperkenalkan macam-macam binatang yang ada di dunia"
      //     break
      //   case 'Tanaman':
      //     text = "Pada tema ini, siswa akan diperkenalkan macam-macam tumbuhan yang ada di dunia"
      //     break
      //   case 'Alat komunikasi':
      //     text = "Pada tema ini, siswa akan diajarkan alat komunikasi"
      //     break
      //   case 'Negaraku':
      //     text = "Pada tema ini, siswa akan diperkenalkan dengan negara kita dan diajarkan untuk mencintai Indonesia"
      //     break
      //   case 'Alam Semesta':
      //     text = "Pada tema ini, siswa akan diajarkan materi mengenai alam semesta"
      //     break
      // }

      // this.$swal({
      //   title: 'Deskripsi: ' + theme,
      //   text: text,
      //   type: 'warning',
      //   showLoaderOnConfirm: true
      // })
    },
    copyCode(){
      var copyText = document.getElementById("code");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      document.execCommand("copy");
    },

    logout() {
      this.$swal({
        title: 'Konfirmasi',
        text: 'Apa anda yakin akan keluar?',
        showCancelButton: true,
        type: 'warning',
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          this.$auth.logout()
        }
      }) 
    },
    checkIsPremium() {
      let self = this
      self.$axios.$post('/guru/check_class_state', {
        guruId: self.guruId
      })
      .then(function(resp) {
        if (resp == 'x') {
          self.isPremium = false
        } else {
          self.isPremium = true
        }

        self.jenisKelas = resp.jenisKelas
        self.kodeKelas = resp.kodeKelas
      })
    },
    getMateri() {
      let self = this

      this.$axios.$post('/guru/check_class_state', {
        guruId: this.guruId
      })
      .then((r1) => {
        this.$axios.$post('guru/get_materi', {
          jenisKelas: r1.jenisKelas
        })
        .then(function (resp) {
          self.rawMateri = resp
        })
      })
    },
    getGames() {
      let self = this

      this.$axios.$post('/guru/check_class_state', {
        guruId: this.guruId
      })
      .then((r1) => {
        this.$axios.$post('guru/get_games', {
          jenisKelas: r1.jenisKelas
        })
        .then(function (resp) {
          self.rawGames = resp
        })
      })
    },
    addTask(name, id, type) {
      let self = this

      this.$swal({
        title: 'Konfirmasi',
        html:
          'Tambahkan tugas <b> '+ name +' </b> kepada Siswa?',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Tambahkan',
        cancelButtonText: 'Jangan',
      }).then((result) => {
        if (result.value) {
          this.$axios.$post('/guru/check_class_state', {
            guruId: this.guruId
          })
          .then((r1) => {
            const data = new FormData
            data.append('nama', name)
            data.append('tugasId', id)
            data.append('kelasId', r1.id)
            data.append('type', type)

            this.$axios.$post('materi/tambah_tugas', data)
            .then((r2) => {
              this.$swal('Tugas ' + name + ' berhasil ditambahkan!', '', 'success');
              this.getTasks()
            })
          })
        } else {
          this.$swal('Dibatalkan', '', 'success');
        }
      })

      
    },
    getTasks() {
      this.$axios.$post('/guru/check_class_state', {
        guruId: self.guruId
      })
      .then((r1) => {
        const data = new FormData
        data.append('kodeKelas', this.kodeKelas)
        data.append('guru', 1)

        this.$axios.$post('materi/lihat_tugas', data)
        .then((r) => {
          this.rawTugas = r        
        })
      })
    },
    showTaskDetail(id, task) {
      this.$swal({
        title: "Detail Tugas",
        html: "<p> Anda menambahkan tugas <b> " + task + " </b> kepada siswa. </p>",
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: "Hapus"
      }).then((result) => {
        if (!result.value) { 
          const data = new FormData
          data.append('tugasId', id)

          this.$axios.$post('materi/hapus_tugas', data)
          .then((response) => {
            this.getTasks()
          })
        }
      });
    },
    onChange(e) {
      console.log(e.target.value)
    }
  },
  created() {
    this.checkIsPremium()
    this.getMateri()
    this.getGames()
    this.getTasks()
  }
}
</script>

<style lang="scss" scoped>
  .context{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;

    .contextMenu{
      position: relative;
      width: 18rem;
      border-radius: 1.5rem;
      height: calc(100% - 10rem);
      z-index: 5;
      text-align: center;
      margin: auto;

      .label {
        transform: translateY(80%);
        color: #222;
      }
    }
  }

  .upgrade{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: .75rem;
    padding: .2rem .5rem;
    border-radius: 100px;
    background: $yellow;
    display: flex;
    z-index: 54;

    *{
      margin: auto 0;
    }

    svg{
      margin-right: .3rem;
    }
  }

  #subContext{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .choosetheme{
    text-align: center;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .VueCarousel{
    z-index: 7;
    flex: auto;
  }
  .materiContext{
    @extend #subContext;
    .materiContextMenu{
      position: relative;
      @extend .bg-green;
      width: 80%;
      height: 80vh;
      margin: auto;
      border-radius: 1.2rem;
      z-index: 70;
    }
  }

  .latihanContext{
    @extend #subContext;
    .latihanContextMenu{
      position: relative;
      @extend .bg-yellow;
      width: 80%;
      height: 80vh;
      margin: auto;
      border-radius: 1.2rem;
      z-index: 70;
    }
  }

  .container{
    display: flex;
    height: 100%;
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

  .addTask{
    width: 2rem;
    height: 2rem;
    margin: .5rem;
    display: flex;
    background: #ffffff6e;
    border-radius: .5rem;
    .material-icons{
      color: #fff;
      margin: auto;
    }
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

  .blur{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: 4;

    background: #4444441a;
    backdrop-filter: blur(6px);
  }

  .kelasFloating{
    z-index: 22;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: #434343;
    display: flex;
    overflow: hidden;
  }

  .member{
    margin: auto 0;
  }
  .kodeKelas{
    color: #434343;
    margin: auto 0;
    margin-right: 1rem;
    background: #807d7d2f;
    padding: .2rem .4rem;
    border-radius: 100rem;
    border: 1px solid #757575;
    font-size: .8rem;
  }

  .theory-icon {
    width: 128px;
    height: 128px;
  }

  .latihan-icon {
    width: 128px;
    height: 128px;
  }

  .text-center {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translatex(-50%);
    color: #fff;
  }

  .carousel-title {
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translatex(-50%);
    color: #fff;
    padding: 20px;
    background: #222222AA;
  }

  .lead {
    font-size: 14pt;
  }

  .mb-1 {
    margin-bottom: 1em;
  }

  .select {
    position: relative;
    min-width: 200px;
    
    svg {
      position: absolute;
      right: 12px;
      top: calc(70%);
      width: 10px;
      height: 6px;
      stroke-width: 2px;
      stroke: #9098A9;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      pointer-events: none;
    }

    select {
      -webkit-appearance: none;
      padding: 7px 40px 7px 12px;
      width: 100%;
      border: 1px solid #E8EAED;
      border-radius: 5px;
      background: white;
      box-shadow: 0 1px 3px -2px #9098A9;
      cursor: pointer;
      font-family: inherit;
      font-size: 16px;
      transition: all 150ms ease;
      &:required:invalid {
        color: #5A667F;
      }
      
      option {
        color: #223254;
        &[value=""][disabled] {
            display: none;
        }
      }

      &:focus {
        outline: none;
        border-color: #0077FF;
        box-shadow: 0 0 0 2px rgba(#0077FF,.2);
      }

      &:hover + svg {
        stroke: #0077FF;
      }
    }
  }

  .sprites {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }
</style>
