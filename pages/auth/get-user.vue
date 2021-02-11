<template>
	<div class="container">
		{{ id }}
	</div>	
</template>

<script>
export default {
	data(){
    return {
      id: this.$auth.user.id
    }
  }
}
</script>