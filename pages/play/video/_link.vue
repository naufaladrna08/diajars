<template>
	<div id="root">

		<video width="100%" height="100%" controls>
			<source :src="link" type="video/mp4">
		</video>

	</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			link: "http://videos.diajars.online/" + this.$route.query.link
		}
	}
}

</script>

<style type="text/css">
	
</style>