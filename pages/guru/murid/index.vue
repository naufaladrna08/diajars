<template>
  <div class="container bg-green">
    <Input placeholder="Search" style="margin:0" iconName="search"/>
    <div class="table-container">
      <table class="table">
      <tr class="table-header">
        <th class="namaColumn">
          <p>Nama siswa</p>
        </th>
        <th>
          <p>Gender</p>
        </th>
        <th>
          <p></p>
        </th>
      </tr>
      <tr @click="cekMurid()">
        <td>
          <p>Nama yang relevan</p>
        </td>
        <td>
          <p>data</p>
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
  methods:{
    cekMurid(){
      this.$router.push('/')
    }
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
