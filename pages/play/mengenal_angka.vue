<template>
  <div id="root">
    <button class="btn"  @click="showMenu()"> Menu </button>
    <div class="container">
      <iframe :src="link" scrollbar="no"> </iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: "http://games.diajars.online/mengenal_angka/index.html?id=" + this.$auth.user.id + "&tugas_id=" + this.$route.query.tugas_id
    }
  },
  methods: {
    showMenu() {
      this.$swal.fire({
      title: 'Menu',
      showCancelButton: true,
      confirmButtonText: `Ke Halaman Utama`,
      cancelButtonText: 'Mainkan Lagi',
    }).then((result) => {
      if (result.isConfirmed) {
        this.$swal.fire('Disimpan!', '', 'success')

        document.location.href = 'http://diajars.online/'
      }
    })
    }
  },
  created(){
    
  }
}
</script>

<style lang="scss" scoped>
#root {
  width: 100%;
  height: 100%;
  background: rgb(28, 15, 209);
}

.container {
  width: 100%;
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

.btn {
  margin: 10px;
  padding: 20px;
  font-size: 24px;
  position: absolute;
}
</style>
