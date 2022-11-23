<script >
export default {
 
 methods: {
  ThemeChoose(value) {
    console.log(value);
  },
  goBack() {
    this.$router.push('/RegisterOrSign')
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
      <h2>Register</h2>
      <span>If you need any support click here</span>
      <input type="text" id="name" name="name" placeholder="Full name" required minlength="4" maxlength="" size="30">
      <input type="text" id="name" name="name" placeholder="Enter email" required minlength="4" maxlength="" size="30">
      <input type="text" id="name" name="name" placeholder="Password" required minlength="4" maxlength="" size="30">
      <button @click="goTo()" class="button-next"> Create Account</button>  
      <span>Or</span> 
    </div>
    <button class="button-theme"></button>
    <button class="button-theme"></button>
    <span>not a member ? register now</span>    
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
  width: 90%;
  height: 65px;
  border-radius: 15px;
  background-color: '#1DB954';
  color: white
}

.content{
    width: 80%;
    color: white;
    display: flex;
    flex-direction: column;
}
.button-theme{
  width: 15%;
  height: 50px;
  border-radius: 15px;
  background-color: '#1DB954';
  color: white
}
</style>
