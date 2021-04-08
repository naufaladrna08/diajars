<template>
	<div id="root">
		<video-player :src="link"/>
		<!-- {{link}} -->

	</div>
</template>

<script type="text/javascript">
import VideoPlayer from 'nuxt-video-player'
require('nuxt-video-player/src/assets/css/main.css')

export default {
	data() {
		return {
			link: "http://videos.diajars.online/" + this.$route.query.link
		}
	}, 
	components: {
  	VideoPlayer
	},
	mounted() {
		console.log(this.link)
	}
}

</script>

<style type="text/css">
	
</style>