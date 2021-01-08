<template>
  <div class="input" v-if="type != 'number'">
    <i class="material-icons" v-if="iconName != null">{{iconName}}</i>
    <input :type="type" class="inputField font-black"
    v-model="inputData"
    @input="inputChange"
    :maxlength="maxlength" 
    :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: ['placeholder',
          'iconName',
          'type',
          'maxlength'],
  data(){
    return {
      inputData: ''
    }
  },
  methods:{
    inputChange(){
      this.$emit('update:inputData',this.inputData)
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
  margin: auto .7rem;
  margin-right: -.7rem;
  color: $placeholder;
  font-size: 1.2rem;
}
</style>
