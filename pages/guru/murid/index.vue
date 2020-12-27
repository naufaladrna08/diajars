<template>
  <div class="container bg-green">
    <div class="tableHeader">
      <Button bg="white" class="back_button" :noShadow="true" v-on:buttonClick="() => $router.push('/guru')"><i class="material-icons">chevron_left</i></Button>
      <Input placeholder="Search" style="margin:0 0 0 auto; width: 30%"  iconName="search" :inputData.sync="searchQuery"/>
    </div>
    <div class="table-container">
      <table class="table">
      <tr class="table-header">
        <th class="namaColumn">
          <p>Nama siswa</p>
          <i class="material-icons sort" @click="changeSort">{{ascendSort? 'arrow_drop_up': 'arrow_drop_down'}}</i>
        </th>
        <th>
          <p>Gender</p>
        </th>
        <th>
          <p></p>
        </th>
      </tr>
      <tr @click="cekMurid(murid.id)" v-for="murid in computedMurid" :key="murid.id">
        <td>
          <p>{{ murid.nama }}</p>
        </td>
        <td>
          <p>{{ murid.gender }}</p>
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
      ascendSort: true,
      searchQuery: '',
      rawData: []
    }
  },
  methods:{
    cekMurid(idMurid){
      this.$router.push(`/guru/murid/${idMurid}`)
    },
    fetchMurid(){
      //fetch data from api and save it to this.rawData
    },
    changeSort(){
      this.ascendSort = !this.ascendSort
    }

  },
  computed: {
    computedMurid: {
      get(){
        let sortedArray = this.rawData.sort((a,b) => {
          let modifier = 1;
          if(this.ascendSort === false) modifier = -1;
          if(a['nama'] < b['nama']) return -1 * modifier;
          if(a['nama'] > b['nama']) return 1 * modifier;
          return 0;
        })

        if(this.searchQuery.length >= 3){
          return sortedArray.filter(item => {return item.nama.includes(this.searchQuery)})
        }else return sortedArray
      },
      set(things){

      }
    }
  },
  created(){
    this.fetchMurid()
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

.sort{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem !important;
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
  border-radius: .5rem;
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
