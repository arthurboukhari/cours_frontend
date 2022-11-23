<script>

export default {
 
  methods: {
    goTo() {
        this.$router.push('/Theme')
    },
  },
}

</script>
<template>
    <div class="logo">
        <img src="../assets/spotifyLogo.png" width="200" />
    </div>
    <div class="content">
        <h2>Enjoy Listening To Music</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
    </div>
    <button @click="goTo()">Get Started</button>
</template>
<style scoped>
h2{
    font-weight: 600;
}
body{
  background: url(@/assets/img/billie-eilish.png) no-repeat;
}
.content{
    width: 80%;
    color: white;
}

button{
    width: 80%;
    height: 75px;
    border-radius: 15px;
    background-color: '#1DB954';
    color: white
}
</style>