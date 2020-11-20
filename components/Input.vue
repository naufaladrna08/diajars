<template>
  <div class="input">
    <i class="material-icons" v-if="iconName != ''">{{iconName}}</i>
    <input type="text" class="inputField font-black"
    v-model="inputData"
    @input="inputChange"
    :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: ['placeholder',
          'iconName'],
  data(){
    return {
      inputData: ''
    }
  },
  methods:{
    inputChange(){
      this.$emit('inputChange',this.inputData)
    }
  }
}
</script>

<style lang="scss" scoped>
.input{
  overflow: hidden;
  border-radius: 1rem;
  background: white;
  display: flex;
}
.inputField{
  padding: .7rem;
  font-size: .75rem;
  border: none;
  background: none;

  &::placeholder{
    color: $placeholder;
    font-size: .75rem;
  }
}
.material-icons{
  margin: auto .7rem;
  margin-right: 0;
  color: $placeholder;
  font-size: 1.2rem;
}
</style>
