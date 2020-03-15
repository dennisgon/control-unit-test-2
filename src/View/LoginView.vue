<template>
	<form class="form-signin">
		<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
		<label for="inputEmail" class="sr-only">Username</label>
		<input type="username" v-model="username" id="inputusername" class="form-control" placeholder="username " required="" autofocus="">
		<label for="inputPassword" class="sr-only">Password</label>
		<input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required="">
		<div class="checkbox mb-3">
		</div>
		<button class="btn btn-lg btn-primary btn-block"  @click="LoginAction" type="button">Sign in</button>
    </form>
</template>

<script>
	export default {
		name: 'LoginView',
		data(){
			return{
				username:"",
				password:""
			}
		},
		methods:{
			LoginAction(){
				let username = this.username;
				let password = this.password;
				if(username == "admin" && password == "admin"){
					this.$store.state.login = true;
					console.log(this.$store.state.login);
					this.$router.push('/menu/all')
				}else{
					alert('username dan password salah')
				}
			}
		}
	}

</script>

<style scoped>
</style>
