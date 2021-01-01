<template>
  <div class="input" v-if="type != 'number'">
    <i class="material-icons" v-if="iconName != null">{{iconName}}</i>
    <input type="text" class="inputField font-black"
    v-model="inputData"
    @input="inputChange"
    :placeholder="placeholder">
    <div class="gmailDecoy">
      <p>
        @gmail.com
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['placeholder',
          'iconName',
          'type'],
  data(){
    return {
      inputData: ''
    }
  },
  methods:{
    inputChange(){
      if(this.inputData.includes("@gmail.com")){
        this.$emit('update:inputData',this.inputData)
      }
      else this.$emit('update:inputData',this.inputData + '@gmail.com')
    }
  }
}
</script>

<style lang="scss" scoped>
.gmailDecoy{
  background: #f1f2f3;
  display: flex;
  align-items: center;
  font-size: .75rem;
  padding: 0 .75rem;
  color: #495057;
}
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
