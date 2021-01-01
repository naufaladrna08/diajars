<template>
  <div class="container bg-yellow">
    <div class="leftSide">
      <svg width="383" height="155" viewBox="0 0 383 155" fill="none" xmlns="http://www.w3.org/2000/svg" class="blob__left">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M323.416 300.326C300.17 337.582 246.178 337.124 203.035 345.217C170.835 351.257 139.395 347.254 107.267 340.873C76.2776 334.718 40.0709 333.756 20.488 308.959C1.23531 284.58 19.196 248.424 10.6619 218.547C-0.00039867 181.22 -51.8028 149.578 -35.0445 114.548C-18.4881 79.9395 36.5169 96.1627 73.7006 86.7759C100.64 79.9754 125.979 59.2991 152.615 67.1745C178.624 74.8641 183.504 110.785 206.024 125.898C238.534 147.716 288.573 140.605 310.437 173.091C334.83 209.334 346.555 263.243 323.416 300.326Z" fill="#FFC581"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1504 35.2114C38.4509 30.1426 67.942 24.4862 86.5731 40.9021C105.254 57.3613 98.0167 87.5834 101.57 112.237C104.405 131.905 112.092 151.634 105.222 170.279C98.4764 188.586 79.3072 197.513 65.1909 210.972C48.1753 227.195 36.9217 251.294 14.1504 257.11C-10.8811 263.503 -40.2576 259.504 -60.1235 242.976C-79.6625 226.72 -80.8903 198.194 -86.4811 173.388C-91.5161 151.048 -100.187 127.432 -90.8807 106.51C-81.8581 86.2248 -57.5842 79.6058 -39.2233 67.1419C-21.6392 55.2053 -6.65006 39.5502 14.1504 35.2114Z" fill="#FEB662"/>
      </svg>

      <div class="form">
        <Input placeholder="Nama"
        type="text"
        :inputData.sync="form.nama" style="width: 100%"/>
        <InputEmail
        placeholder="Email"
        :inputData.sync="form.email"
        style="width: 100%"
        />
        <NumberInput placeholder="Umur" :inputData.sync="form.umur" class="separate"/>
        <Dropdown placeholder="Gender" :inputData.sync="form.gender" class="separate" :item="arr"/>
        <Input placeholder="Kode Kelas"
        type="text"
        iconName="school"
        :inputData.sync="form.kodeKelas" style="width: 100%"/>
        <Button bg="red" @buttonClick="mulaiBelajar" class="mulaiBelajarButton">Mulai Belajar</Button>
      </div>

    </div>
    <div class="rightSide">
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      form: {
        nama:'',
        umur: '',
        email: '',
        gender: '',
        kodeKelas: ''
      },
      arr: ['Laki-laki','Perempuan']
    }
  },
  methods: {
    mulaiBelajar(){
      //action here
    }
  }
}
</script>

<style lang="scss" scoped>
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
    border-bottom-left-radius: 2rem;
  }
  .form{
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 60%;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;

  }
  .separate{
    width: calc(50% - 1rem);
  }

  .mulaiBelajarButton{
    margin: .5rem;
    width: 100%;
  }
</style>
