<template>
	<div class="container">

		<div class="apptitle font-boogaloo">DIAJARS</div>

		<img class="signInButton"
		draggable="false"
		:src="require(`~/assets/image/bitmap/btn_google_signin_dark_${state}_web.png`)"
		@click="signInGoogle"
		@mouseover="()=>{state='focus'}"
		@mouseout="() => {state = 'normal'}"
		>

		<svg width="293" height="223" viewBox="0 0 293 223" fill="none" xmlns="http://www.w3.org/2000/svg" class="blob__left">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M149.125 96.1218C176.64 94.7205 203.869 105.531 225.78 122.253C246.769 138.27 257.64 163.018 268.401 187.146C279.078 211.086 286.398 235.507 287.963 261.679C289.844 293.144 300.19 331.112 278.366 353.829C256.355 376.741 217.808 368.987 186.083 367.727C161.973 366.769 140.342 356.854 118.109 347.464C98.3607 339.122 80.2236 329.42 63.5285 315.96C43.5819 299.879 20.7606 285.409 11.49 261.506C1.22876 235.049 -2.62875 203.476 10.0588 178.096C22.6626 152.883 53.0579 144.117 77.323 129.814C100.572 116.109 122.182 97.494 149.125 96.1218Z" fill="#E6F2F4"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M-99.5916 234.028C-111.266 209.773 -118.673 181.884 -111.779 155.833C-105.26 131.196 -82.0451 116.028 -63.6812 98.3164C-47.98 83.1734 -31.0061 71.1893 -12.3268 59.9161C10.9571 45.8638 32.8729 17.3619 59.1717 24.1725C85.6707 31.035 86.9841 69.589 104.871 90.267C121.178 109.118 149.401 116.628 159.033 139.614C169.307 164.131 164.788 191.975 158.308 217.785C151.166 246.236 144.668 279.127 120.004 295.076C95.4335 310.964 63.3378 298.254 34.0935 298.107C7.09534 297.972 -20.8389 305.906 -45.1606 294.248C-70.082 282.303 -87.6161 258.91 -99.5916 234.028Z" fill="#D6EAED"/>
		</svg>

		<svg width="281" height="192" viewBox="0 0 281 192" fill="none" xmlns="http://www.w3.org/2000/svg" class="blob__right">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M169.943 65.2679C191.357 69.9411 213.091 70.9607 232.264 81.596C252.392 92.7614 271.965 106.732 282.043 127.451C292.232 148.398 284.969 172.566 287.766 195.698C291.801 229.068 324.907 268.774 302.115 293.446C278.976 318.494 235.172 280.226 202.101 288.43C171.409 296.043 153.433 347.437 123.312 337.801C92.8756 328.065 107.735 275.057 86.251 251.369C63.861 226.682 9.80513 235.238 1.09622 203.046C-7.20222 172.371 36.4129 152.459 52.005 124.78C65.8187 100.258 62.2246 62.6346 87.3288 49.9669C112.856 37.0856 142.014 59.173 169.943 65.2679Z" fill="#E6F2F4"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M273.539 0.0177769C305.604 1.1125 315.672 45.8551 337.201 69.672C352.413 86.4995 367.211 101.881 381.525 119.479C401.196 143.662 435.86 161.224 437.021 192.391C438.162 223.027 411.352 248.695 387.032 267.321C365.092 284.124 335.711 282.693 309.159 290.317C282.818 297.881 258.959 312.869 231.572 311.961C199.089 310.883 161.411 309.194 140.004 284.708C118.596 260.221 127.786 222.655 125.136 190.22C122.662 159.943 108.35 126.333 124.991 100.932C141.683 75.4539 181.841 82.3354 207.024 65.2275C233.232 47.423 241.885 -1.06291 273.539 0.0177769Z" fill="#D6EAED"/>
		</svg>

		<div class="errMessage" v-show="errMessage" @click="() => errMessage = ''"><i class="material-icons">error</i> {{errMessage}}</div>

		<div class="infoMessage" v-show="infoMessage" @click="() => infoMessage = ''"><i class="material-icons">error</i> {{infoMessage}}</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			state: 'normal',
			errMessage: '',
			infoMessage: ''
		}
	},
	methods: {
		signInGoogle() {
			
			window.location.href = `${process.env.baseUrl}auth/google/`

			this.state = 'pressed'
		}
	},
	mounted() {
		if (this.$auth.loggedIn == true) {
			let type = this.$auth.user.account_type
			if (type == 'student') {
				this.$router.push('/murid')
			} else {
				this.$router.push('/guru')
			}
		}

		if (this.$route.query.error == 'unregistered') {
			this.errMessage = "Email belum terdaftar!"
		} else if (this.$route.query.error == 'login') {
			this.infoMessage = "Silahkan masuk dengan Google"
		}
	}
}
</script>

<style lang="scss" scoped>
.container{
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
}
.apptitle{
	margin: auto;
	font-size:4.5rem;
	color: $darkblue;
}

.signInButton{
	width: 191px;
	height: 46px;
	margin: auto;
	margin-top: 0;
}

.errMessage{
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 10px 16px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  i{
    font-size: 1.2rem;
    margin: auto 0;
    margin-right: .6rem;
    color: red;
  }
}

.infoMessage{
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 10px 16px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  i{
    font-size: 1.2rem;
    margin: auto 0;
    margin-right: .6rem;
    color: green;
  }
}
</style>
