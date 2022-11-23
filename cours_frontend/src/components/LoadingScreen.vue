<script setup lang="ts">
import router from '@/router';

setTimeout(() => router.push('/getStarted'), 2000)
</script>

<template>
    <div class="logo">
        <img src="../assets/spotifyLogo.png" width="200" />
    </div>
</template>

<style scoped>

.logo{
    display: flex;
    justify-content: center;
}
</style>