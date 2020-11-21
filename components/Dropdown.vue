<template>
  <div class="dropdownContainer">

    <div class="input" :class="{isOpen : isOpen}">
      <div class="inputField font-black" @click="() => isOpen = !isOpen">
        {{value}} <p class="placeholder" v-show="value == ''">{{placeholder}}</p>
      </div>
      <i class="material-icons" @click="() => isOpen = !isOpen">expand_more</i>
    </div>

    <div class="dropdown" v-show="isOpen">
      <li
      @click="select(i)"
      class="dropdownItem"
      v-for="i in item"
      v-bind:key="i">{{i}}</li>
    </div>

  </div>
</template>

<script>
export default {
  props:{
    item : Array,
    placeholder: String
  },
  data(){
    return {
      isOpen: false,
      value: ''
    }
  },
  methods: {
    select(options){
      this.value = options
      this.isOpen = false
      this.$emit('update:inputData',this.value)
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
  width: 100%;
}
.inputField{
  padding: .7rem 1rem;
  font-size: .75rem;
  border: none;
  background: none;
  width: 100%;

}
.placeholder{
  color: $placeholder;
  font-size: .75rem;
}

.dropdownContainer{
  position: relative;
  margin: .5rem;
}

.dropdown{
  position: absolute;
  width: 100%;
  .dropdownItem{
    list-style: none;
    font-size: .7rem;
    background: #fff;
    padding: .7rem 1rem;

    &:nth-last-child(1){
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    &:hover{
      background: #edf8ff;
    }
  }
}

.isOpen{
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  .material-icons{
    transform: translateY(-50%) rotate(180deg);
  }
}

.material-icons{
  position: absolute;
  right: .5rem;
  top: 50%;
  transform: translateY(-50%);
  color: $darkblue;
}
</style>
