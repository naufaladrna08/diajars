<template>
  <div class="container">
    <div class="flex">
      <div id="illustration">
        Left         
      </div>
      <div id="form">
        <NuxtLink to="/login_guru"> Masuk Sebagai Guru </NuxtLink>
        <NuxtLink to="/login_murid"> Masuk Sebagai Murid </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  width: 100%;
  box-sizing: border-box;
}

.flex {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}

.flex div {
  width: 50%
}

#form {
  
}
</style>
