<template>
  <div class="input">
    <input class="inputField" type="number"
    :placeholder="placeholder"
    v-model="inputData"
    min="1"
    >
    <i class="material-icons increase" @click="increase">expand_less</i>
    <i class="material-icons decrease" @click="decrease">expand_more</i>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String
  },

  data(){
    return {
      rawInputData: null
    }
  },

  computed:{
    inputData:{
      set(val){
        this.rawInputData = val
      },
      get(){
        if(this.rawInputData == 0)return null;
        return Math.abs(this.rawInputData)
      }
    }
  },

  methods:{
    increase(){
      this.inputData++
    },
    decrease(){
      if(this.inputData > 1)this.inputData--
    }
  }
}
</script>

<style lang="scss" scoped>
.input{
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: white;
  display: flex;
  margin: .5rem;
}
.inputField{
  padding: .7rem 1rem;
  font-size: .75rem;
  border: none;
  background: none;
  width: 100%;

  &::placeholder{
    color: $placeholder;
    font-size: .75rem;
  }
}

.material-icons{
  color: $darkblue;
  font-size: 1.25rem;
  position: absolute;
  right: .5rem;
}

.increase{
  top: .1rem;
}

.decrease{
  bottom: .1rem;
}
</style>
