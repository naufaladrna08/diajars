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
		}})
		this.$auth.setToken('local', 'Bearer ' + this.token);
    this.$auth.setStrategy('local');
    this.$auth.fetchUser().then( () => {
      return this.$router.push('/guru');
    }).catch( (e) => {
      return this.$router.push(`/auth/${this.$route.query.origin ? this.$route.query.origin : 'register'}?error=1`);
    });
	},
	auth: 'guest'
}
</script>
