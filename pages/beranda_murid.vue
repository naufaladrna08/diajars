<template>
  <div class="container bg-yellow">
    <div class="taskbar">
      <div class="task"></div>
      <div class="task"></div>
      <div class="task"></div>
      <div class="task"></div>
      <div class="task"></div>
    </div>

    <div class="whitecard" :class="{taskbarOpen : taskbarIsOpen}">
      <img :src="require('~/assets/image/vector/Indonesia_y.svg')" class="map"  @click="() => taskbarIsOpen = true" fill="#fff">
    </div>

    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="logout">
    <path d="M13 15V12H6V8H13V5L18 10L13 15ZM11 0C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V4H11V2H2V18H11V16H13V18C13 18.5304 12.7893 19.0391 12.4142 19.4142C12.0391 19.7893 11.5304 20 11 20H2C1.46957 20 0.960859 19.7893 0.585786 19.4142C0.210714 19.0391 0 18.5304 0 18V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H11Z" fill="#434343"/>
    </svg>

  </div>
</template>

<script>
export default {
  data(){
    return {
      taskbarIsOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    height: 100%;
  }
  .taskbar{
    position: absolute;
    width: 3rem;
    overflow: hidden;
    overflow-y: auto;
    height: calc(100% - 3rem);

    z-index: 1;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .whitecard{
    height: 100%;
    display: flex;
    width: 100%;
    z-index: 2;
    background: white;
    margin-left: auto;
  }

  .logout{
    position: absolute;
    z-index: 3;
    bottom: 1rem;
    left: 1rem;
  }

  .map{
    width: 80%;
    margin: auto;
  }

  .taskbarOpen{
    width: calc(100% - 3rem);
    border-bottom-left-radius: 2rem;
  }

  .task{
    width: 2rem;
    height: 2rem;
    background: white;
    margin: .5rem;
    border-radius: .5rem;
  }
</style>
