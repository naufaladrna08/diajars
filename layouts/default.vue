<template>
  <div class="superContainer">
    <Nuxt />
  </div>
</template>


<style lang="scss">
//used as library

@import url('https://fonts.googleapis.com/css2?family=Boogaloo&family=Varela+Round&display=swap');
//Varela round for general use, whilst Boogaloo used for app title cards

*{
  box-sizing: border-box;
  margin: 0;padding: 0;
  font-family: 'Varela Round', sans-serif;
}

//optimize the height because nuxt makes the hierarchy fucking weird
html, body, #__layout, .superContainer, #__nuxt{
  height: 100%;
}


//library starts here
.font-boogaloo{
  font-family: 'Boogaloo', cursive;
}

//standard black color for the text
.font-black{
  color: #434343;
}

//standard white color for the text
.font-white{
  color: #f8f8f8;
}

.bg-red{
  background-color: #EF476F;
}
.bg-yellow{
  background-color: #FFD166;
}
.bg-green{
  background-color: #06D6A0;
}
.bg-blue{
  background-color: #118AB2;
}
.bg-darkblue{
  background-color: #073B4C;
}
</style>
