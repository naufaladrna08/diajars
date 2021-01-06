<template>
  <div class="container bg-red">
    <div class="leftSide">
      <svg width="383" height="155" viewBox="0 0 383 155" fill="none" xmlns="http://www.w3.org/2000/svg" class="blob__left">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M323.416 300.326C300.169 337.582 246.178 337.124 203.035 345.217C170.835 351.257 139.395 347.254 107.267 340.873C76.2776 334.718 40.0709 333.756 20.488 308.959C1.23527 284.58 19.196 248.424 10.6619 218.547C-0.000429188 181.22 -51.8029 149.578 -35.0446 114.548C-18.4881 79.9395 36.5168 96.1627 73.7005 86.7759C100.64 79.9754 125.978 59.2991 152.615 67.1745C178.624 74.8641 183.504 110.785 206.024 125.898C238.534 147.716 288.573 140.605 310.437 173.091C334.83 209.334 346.555 263.243 323.416 300.326Z" fill="#E22B57"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1502 35.2114C38.4507 30.1426 67.9418 24.4862 86.5729 40.9021C105.253 57.3613 98.0165 87.5834 101.57 112.237C104.405 131.905 112.091 151.634 105.222 170.279C98.4762 188.586 79.3071 197.513 65.1907 210.972C48.1751 227.195 36.9215 251.294 14.1502 257.11C-10.8813 263.503 -40.2578 259.504 -60.1237 242.976C-79.6627 226.72 -80.8904 198.194 -86.4813 173.388C-91.5163 151.048 -100.187 127.432 -90.8809 106.51C-81.8583 86.2248 -57.5844 79.6058 -39.2235 67.1419C-21.6394 55.2053 -6.65025 39.5502 14.1502 35.2114Z" fill="#DE1F4D"/>
      </svg>


      <div class="form">
        <Input placeholder="Nama"
        type="text"
        :inputData.sync="form.nama"
        style="width: 100%"/>
        <InputEmail
        placeholder="Email"
        :inputData.sync="form.email"
        style="width: 100%"
        />

        <NumberInput placeholder="Umur" :inputData.sync="form.umur" class="separate"/>
        <Dropdown placeholder="Gender" :inputData.sync="form.gender" class="separate" :item="arr"/>
        <Input placeholder="Nama Kelas"
        type="text"
        iconName="school"
        :inputData.sync="form.namaKelas" style="width: 100%"/>
        <Dropdown placeholder="Jenis kelas"
        :inputData.sync="form.jenis_kelas"
        style="width: 100%"
        :item="['A','B']"/>
        <Button bg="yellow" @buttonClick="mulaiMengajar" class="mulaiMengajarButton">Mulai Mengajar</Button>
      </div>

    </div>
    <div class="rightSide">
      <img v-if="url" :src="url">
      <label for="upload-photo" class="upload-button">{{ url? 'Ganti foto':'Upload foto' }}</label>
      <input type="file" id="upload-photo" @change="onFileChange" accept="image/*">

    </div>

    <div class="errMessage" v-show="errMessage" @click="() => errMessage = ''"><i class="material-icons">error</i> {{errMessage}}</div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      url:null,
      form: {
        nama:'',
        umur: '',
        email: '',
        gender: '',
        namaKelas: '',
        jenisKelas: ''
      },
      errMessage: '',
      arr: ['Laki-laki','Perempuan']
    }
  },
  methods: {
    mulaiMengajar(){
      this.$axios.$post('register/guru', {
          photo: this.url,
          data: this.form}
        )
        .then((resp) => {
          console.log(resp)
        })
    },
    onFileChange(e) {
      const file = e.target.files[0];
      try {
        this.url = URL.createObjectURL(file);
      } catch (error) {

      }
    }
  }
}
</script>

<style lang="scss" scoped>

label {
   cursor: pointer;
   /* Style as you please, it will become the visible UI component. */
}
.upload-button{
  @extend .font-white;
  border-radius: 1.25rem;
  position: relative;
  z-index: 2;
  padding: .7rem 2rem;
  font-size: .75rem;
  text-align: center;
  margin: auto;
  margin-bottom: 4rem;
  background: $red;
  box-shadow: 0 3px 0 0 #C63E5E;
  &__pressed{
    background: $red;
    box-shadow: 0 0 0 0 #C63E5E;
    transform: translateY(3px);
  }

}
#upload-photo {
   opacity: 0;
   position: absolute;
   z-index: -1;
}
  .container{
    display: flex;
    height: 100%;
  }
  .leftSide{
    width: 50%;
    height: 100%;
    display: flex;
  }
  .rightSide{
    width: 50%;
    background: #fff;
    display: flex;
    overflow: hidden;
    border-bottom-left-radius: 2rem;
    position: relative;
    img{
      height: 100%;
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  }
  .form{
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 60%;
    flex-wrap: wrap;
    z-index: 1;
  }
  .separate{
    width: calc(50% - 1rem);
  }

  .mulaiMengajarButton{
    margin: .5rem;
    width: 100%;
  }

  .errMessage{
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 10px 16px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    i{
      font-size: 1.2rem;
      margin: auto 0;
      margin-right: .6rem;
      color: red;
    }
  }
</style>
