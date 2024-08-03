<template>
    <div class="mainContainer">
        Ici le briefing
    </div>
</template>

<style scoped>
.mainContainer{
    width: 40vw;
    height: 15vh;
    background-color: salmon;
    border: 2px solid black;
    position: relative;
    top: 84vh;
    left: 30vw;
    animation-name: meme;
    animation-duration: 100ms;
}

@keyframes meme {
    from{
        width: 50vw;
        height: 25vh;
        top: 78vh;
        left: 25vw;
    }
    to{
        width: 40vw;
        height: 15vh;
    }   
}
</style>