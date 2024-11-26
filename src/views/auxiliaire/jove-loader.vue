<template>
<div class="mC">
    <div class="c-p">
        <div class="l l1"></div>
        <div class="l l2"></div>
        <div class="l l3"></div>
        <div class="l l4"></div>
        <div class="l l5"></div>
    </div>
</div>
</template>

<style scoped>
        .mC{
            display: flex;
            height: 150px;
            justify-content: center;
        }
        .c-p{
            position: absolute;
            height: 150px;
            width: 140px;
        }
        .l{
            position: absolute;
            height: 50%;
            width: 10%;
            top : 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;
            transition-property: all;
            transition-duration: 0.3s;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
        .l1{
            background-color: red;
            left : 20%;
            animation-name: a1;
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
        }
        .l1:nth-child(3n){
            animation-delay: 5s;
        }
        .l2{
            background-color: rgb(217, 255, 0);
            left : 35%;
            animation-name: a2;
        }
        .l3{
            background-color: rgb(0, 255, 34);
            left : 50%;
            animation-name: a3;
        }
        .l4{
            background-color: blueviolet;
            left : 65%;
            animation-name: a4;
        }
        .l5{
            background-color: rgb(8, 165, 139);
            left : 80%;
            animation-name: a5;
        }
        @keyframes a1 {
            0%, 100%{
                height: 50%;
            }
            50%{
                height: 75%;
                box-shadow: 0 0 45px red;
            }
            75%{
                height: 90%;
                box-shadow: 0 0 35px red;
            }
        }
        @keyframes a2 {
            0%,20%, 100%{
                height: 50%;
            }
            25%,45%{
                height: 75%;
                box-shadow: 0 0 35px rgb(217, 255, 0);
            }
            48%{
                height: 50%;
            }
            40%{
                height: 90%;
                box-shadow: 0 0 35px rgb(217, 255, 0);
            }
            
        }
        @keyframes a3 {
            0%,40%, 100%{
                height: 50%;
            }
            45%, 63%{
                height: 75%;
                box-shadow: 0 0 45px rgb(0, 255, 34);
            }
            69%{
                height: 50%;
            }
            60%{
                height: 90%;
                box-shadow: 0 0 35px rgb(0, 255, 34);
            }
        }
        @keyframes a4 {
            0%,60%, 100%{
                height: 50%;
            }
            64%, 83%{
                height: 75%;
                box-shadow: 0 0 45px blueviolet;
            }
            85%{
                height: 50%;
            }
            80%{
                height: 90%;
                box-shadow: 0 0 35px blueviolet;
            }
        }
        @keyframes a5 {
            0%,40%, 79%, 100%{
                height: 50%;
            }
            84%, 97%{
                height: 75%;
                box-shadow: 0 0 45px rgb(8, 165, 139);
            }
            93%{
                height: 90%;
                box-shadow: 0 0 35px rgb(8, 165, 139);
            }
        }
</style>

