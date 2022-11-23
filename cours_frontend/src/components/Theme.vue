<script >
export default {
 
 methods: {
  ThemeChoose(value) {
    console.log(value);
  },
  goTo() {
      this.$router.push('/RegisterOrSign')
    },
 },
}
</script>
<template class="Theme">
    <div class="logo">
        <img src="../assets/spotifyLogo.png" width="200" />
    </div>
    <div class="content">
        <h2>Choose Mode</h2>
        <div >
          <div class="button-list">
            <button class="button-theme" @click="ThemeChoose(1)"></button><span>Dark mode</span>
          </div>
          <div class="button-list">
            <button class="button-theme" @click="ThemeChoose(2)"></button><span>Light mode</span>
          </div>
        </div>
        <button @click="goTo()" class="button-next"> Continuer</button>
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
    width: 80%;
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
    width: 20%;
    height: 60px;
    border-radius: 15px;
    background-color: '#1DB954';
    color: white
}
</style>