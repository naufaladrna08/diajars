<template>
  <div class="container">
    <div class="paket paket1">
        <p>Paket pemula</p>
      <div class="offer">
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>30 siswa</li>
      </div>
      <a @click.stop="paketAction(1)" class="action">Rp. xxx,-</a>
    </div>
    <div class="paket paket2">
        <p>Paket standar</p>
      <div class="offer">
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>50 siswa</li>
      </div>
      <a @click.stop="paketAction(2)" class="action">Rp. xxx,-</a>
    </div>
    <div class="paket paket3">
        <p>Paket unggulan</p>
      <div class="offer">
        <li>Something</li>
        <li>Something</li>
        <li>Something</li>
        <li>80 siswa</li>
      </div>
      <a @click.stop="paketAction(3)" class="action">Rp. xxx,-</a>
    </div>
    <a @click.stop="() => $router.push('/guru')" class="batalUpgrade">Batal</a>
  </div>
</template>

<script>
export default {
  methods:{
    paketAction(type){

    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  display: flex;
}

.batalUpgrade{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  text-decoration: underline;
  font-size: .75rem ;
}
.paket{
  margin :auto;
  width:27%;
  p{
    font-size: 1.15rem;
    font-weight: bold;
    color: #39393f;
    text-align: center;
    margin-bottom: .5rem;
  }

  .offer{
    border: 2px solid #ddd;
    padding: 1rem;
    border-radius: 1rem;
    color: #646464;
  }

  &2 .offer{
    background: #3EC6FF;
    color: white;;
    padding: 1rem;
    border-radius: 1rem;
  }

  .action{
    display: block;
    text-align: center;
    padding: .4rem 1rem;
    margin-top: 1rem;
    background: #3EC6FF;
    border-radius: 1rem;
    color: white
  }
}
</style>
