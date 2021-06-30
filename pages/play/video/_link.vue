<template>
	<div id="root">
		<video width="100%" height="100%" @ended="onFinish()" controls>
			<source :src="link" type="video/mp4">
		</video>

	</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			link: "http://videos.diajars.online/" + this.$route.query.link,
			tugasId: this.$route.query.tugas_id,
		}
	},
	methods: {
		onFinish() {
			let self = this

			this.$swal({
        title: "Selesai",
        text: "Hore, kamu telah menyelesaikan tugasmu! Silahkan kembali ke halaman utama dengan menekan tombol di bawah.",
        confirmButtonText: 'Kembali',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.$post('video/selesai', {
						id: this.$auth.user.id,
						tugas_id: this.tugasId
					})
		      .then(function(r) {
		        self.$router.push('/murid')
		     	})
        }
      })
		}
	}
}

</script>

<style type="text/css">
	.button {
		padding: 8px 8px;
		border-radius: 0;
	}
</style>