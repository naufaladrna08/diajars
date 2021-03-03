<template>
	<div class="container">
		<p> Please wait... </p>
	</div>	
</template>

<script>
export default {
	data() {
		return {
			token: this.$route.query.token ? this.$route.query.token : null
		}
	},
	async mounted() {
		await this.$auth.login({data: {
			token: this.token
		}}).catch((e) => {
			console.log(e)	
		})

		switch (this.$auth.user.jenisAkun) {
			case 'guru':
				this.$router.push('/guru')
				break
			case 'murid':
				this.$router.push('/murid')
				break
		}
	},
	auth: 'guest'
}
</script>
