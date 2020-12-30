<template>
  <div class="container bg-green">
    <div class="tableHeader">
      <Button bg="white" class="back_button" v-on:buttonClick="back" :noShadow="true"><i class="material-icons">chevron_left</i></Button>
      <Input placeholder="Search" style="margin:0 0 0 auto; width: 30%"  iconName="search" :inputData.sync="searchQuery"/>
    </div>
    <div class="table-container">
      <table class="table">
      <tr class="table-header">
        <th class="namaColumn">
          <p>Nama siswa</p>
        </th>
        <th>
          <p>tgl dikirim</p>
        </th>
        <th>
          <p></p>
        </th>
      </tr>
      <tr @click="cekMurid()" v-for="murid in computedMurid" :key="murid.id">
        <td>
          <p>{{ murid.nama }}</p>
        </td>
        <td>
          <p>{{ murid.tgl_dikirim }}</p>
        </td>
        <td>
          <div class="actionContainer">
            <i class="material-icons">chevron_right</i>
          </div>
        </td>
      </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    rawData: [{
      id: 123134,
      nama: 'bayu',
      tgl_dikirim: new Date()
    }],
    searchQuery: ''
  }
  },
  computed: {
    computedMurid: {
      get(){
        return this.searchQuery.length >= 3 ? this.rawData.filter(item => {return item.nama.includes(this.searchQuery)}) : this.rawData
      },
      set(newValue){

      }
    }
  },
  methods:{
    cekMurid(){
      this.$router.push('/')
    },
    back(){
      this.$router.push('/guru')
    },
    fetchMateri(){

    }
  },
  created(){
    this.fetchMateri()
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tableHeader{
  width: 100%;
  display: flex;
}

.back_button{
  width: 2.5rem !important;
  height: 2.5rem;
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

.table-container{
  padding:0 1rem;
  border-radius: 1rem;
  background: white;
  margin-top: 1rem;
  height: auto;
  flex: 1;
  overflow: auto;
}

.table{
  position: relative;
  border-collapse: collapse;
  width: 100%;
  text-align: left;

  th{
    font-size: 1.15rem;
    position: sticky;
    top: 0;
    background: white;
    border-bottom: 1px solid #e2e2e2;
  }

  tr{
    border-bottom: 1px solid #e2e2e2;

     &:hover{
       background: #f1f1f1;
     }
  }


  td{
    color: #7a7a7a;
  }

  p{
    margin: .6rem 0;
  }

  .actionContainer{
    display: flex;
    color: $blue;
  }

  .material-icons{
    font-size: 1rem;
    margin: auto 1rem auto auto;

  }
}
</style>
