<template>
  <div class="superContainer">
    <Nuxt />
  </div>
</template>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Boogaloo&family=Varela+Round&display=swap');
//Varela round for general use, whilst Boogaloo used for app title cards

*{
  box-sizing: border-box;
  margin: 0;padding: 0;
  font-family: 'Varela Round', sans-serif;
  transition: all .1s ease-in-out;
   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}

//optimize the height because nuxt makes the hierarchy fucking weird
html, body, #__layout, .superContainer, #__nuxt{
  height: 100%;
}



</style>
