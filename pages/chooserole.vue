<template>
  <div class="container bg-green">
    <div class="leftSide">

    </div>

    <div class="rightSide">
      <div class="buttonContainer">
        <Button bg="red" @buttonClick="loginAsMurid">Masuk sebagai murid</Button>
        <Button bg="yellow" @buttonClick="loginAsGuru">Masuk sebagai guru</Button>
      </div>
      <svg width="328" height="194" viewBox="0 0 328 194" fill="none" xmlns="http://www.w3.org/2000/svg" class="blob__right">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M256.929 304.38C241.442 334.418 231.969 373.616 199.593 383.274C166.014 393.292 124.329 378.594 104.157 349.955C85.9665 324.128 117.609 290.218 112.132 259.097C106.721 228.356 60.1954 205.686 73.8202 177.59C86.9874 150.438 129.545 165.958 159.398 161.63C187.253 157.591 215.649 139.741 240.211 153.468C265.841 167.792 276.082 199.456 279.317 228.651C282.329 255.842 269.47 280.057 256.929 304.38Z" fill="#1BC89B"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M273.254 111.968C290.836 101.42 285.536 70.3111 303.265 60.0126C323.291 48.3799 353.903 39.6012 370.765 55.3259C388.897 72.2338 361.989 107.374 375.995 127.834C394.58 154.985 464.909 148.693 456.535 180.625C447.809 213.898 389.182 185.039 357.479 198.441C342.777 204.656 342.002 226.843 328.202 234.875C309.676 245.657 288.673 254.19 267.573 250.766C242.018 246.619 216.737 234.997 201.282 214.279C184.306 191.519 163.901 157.108 180.311 133.781C199.1 107.071 245.253 128.768 273.254 111.968Z" fill="#14BF93"/>
      </svg>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    //Method to use when the user click "Masuk sebagai murid" button
    loginAsMurid(){
      this.$router.push('/datadiri_murid')
    },
    //Method to use when the user click "Masuk sebagai guru" button
    loginAsGuru(){
      this.$router.push('/datadiri_guru')
    }
  },
  auth: false
}
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    height: 100%;
  }

  .leftSide{
    width: 50%;
    background: white;
    border-bottom-right-radius: 2rem;
  }

  .rightSide{
    width: 50%;
    display: flex;
    flex-direction: column;

  }
  .buttonContainer{
    margin: auto;
  }
  .button:nth-child(1){
    margin-bottom: 1rem;
  }
</style>

