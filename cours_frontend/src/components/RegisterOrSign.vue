<script >
export default {
 
 methods: {
  ThemeChoose(value) {
    console.log(value);
  },
  goBack() {
    this.$router.push('/Theme')
  },
  goToRegister() {
    this.$router.push('/Register')
  },
  goToSignIn() {
    this.$router.push('/Sign')
  },
 },
}
</script>
<template class="Theme">
    <button @click="goBack()" class="button-theme"></button>

    <div class="logo">
        <img src="../assets/spotifyLogo.png" width="200" />
    </div>
    <div class="content">
        <h2>Enjoy listening to music</h2>
        <span>Spotify is a proprietary Swedish audio streaming and media services provider</span>
        <button @click="goToRegister()" class="button-next"> Register</button>
        <button @click="goToSignIn()" class="button-next"> Sign in</button>
    </div>
</template>
<style scoped>
.button-list{
  display: flex;
  flex-direction: column;
}
.btn span.icon {
  float: left;
  width: 10px;
  height: 40px;
}
h2{
  font-weight: 600;
}
.button-next{
  width: 50%;
  height: 75px;
  border-radius: 15px;
  background-color: '#1DB954';
  color: white
}

.content{
    width: 80%;
    color: white;
}
.button-theme{
    width: 15%;
    height: 50px;
    border-radius: 15px;
    background-color: '#1DB954';
    color: white
}
</style>