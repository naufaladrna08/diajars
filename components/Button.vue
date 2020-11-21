<template>
  <div class="button"
  :class="[bgClass,isPressed ? pressedClass : '']"
  @click="clickHandler"
  @blur="()=>isPressed=false"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['buttonText',
          'bg'],

  data(){
    return {
      isPressed: false,
      bgClass: 'button__'+ this.bg,
      pressedClass: 'button__' + this.bg + '__pressed',
    }
  },

  methods: {
    clickHandler(){
      this.isPressed=true
      this.$emit('buttonClick')
    }
  }
}
</script>

<style lang="scss" scoped>

.button{
  border-radius: 1.5rem;
  padding: .7rem 2rem;
  font-size: .75rem;
  text-align: center;

  &__red{
    @extend .font-white;
    background: $red;
    box-shadow: 0 3px 0 0 #C63E5E;
    &__pressed{
      background: $red;
      box-shadow: 0 0 0 0 #C63E5E;
      transform: translateY(3px);
    }

  }
  &__yellow{
    background: $yellow;
    box-shadow: 0 3px 0 0 #D1A233;
    &__pressed{
      background: $yellow;
      box-shadow: 0 0 0 0 #D1A233;
      transform: translateY(3px);
    }

  }
  &__green{
    @extend .font-white;
    background: $green;
    box-shadow: 0 3px 0 0 #10ad83;
    &__pressed{
      box-shadow: 0 0 0 0 #10ad83;
      transform: translateY(3px);
    }
  }
  &__blue{
    @extend .font-white;
    background: $blue;
    box-shadow: 0 3px 0 0 #23738d;
    &__pressed{
      box-shadow: 0 0 0 0 #23738d;
      transform: translateY(3px);
    }
  }
  &__darkblue{
    @extend .font-white;
    background: $darkblue;
    box-shadow: 0 3px 0 0 #0a232c;
    &__pressed{
      box-shadow: 0 0 0 0 #0a232c;
      transform: translateY(3px);
    }
  }



}

</style>
