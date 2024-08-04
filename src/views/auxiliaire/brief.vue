<template>
    <div class="mainContainer">
        <span class="b m-2">6</span> front-end projects + <span class="b m-2">2</span> back-end projects = 7 months.
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
.b{
    color: black;
}
.m-2{
    margin: 0 4px;
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