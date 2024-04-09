<template>
    <div>
        <h4> 
            I offer two possible packages of Services, and you can unfold what you want.
        </h4>
        <!-- <div class="offerPlate"></div> -->
        <div class="button-container">
            <div class="button">
                <router-link to="/" style="color: white;">
                    <div class="mtl1 mtl">
                        <div style="font-size: small">
                            Muteule Software Freelancing   
                        </div> 
                    </div>
                </router-link>
                
                <router-link to="/" style="color: white;">
                    <div class="mtl2 mtl">
                        <div style="font-size: small">
                            Muteule Strategy Freelancing  
                        </div> 
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style scoped>
.offerPlate{
    display: inline-flex;
    width: 80vw;
    height: 40px;
    background-color: salmon;
    border-radius: 15%;
    border-radius: 25px;
}
.button-container{
    display: inline-flex;
    /* position: absolute; */
    width: 300px;
    height: 40px;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    background-color: red;
    border-radius: 50px;
}
.button{
            /* background-color: red; */
            font-size: 16px;
            width: 100%;
            height: 100%;
            font-weight: bold;
            font-family: sans-serif;
            text-align: center;
            line-height: 40px;
            position: relative;
            color: white;
            box-shadow: 0 0 10px black, 0 0 20px black;
            /* text-shadow: 0 4px black; */
            text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
            transition-property: all;
            transition-duration: 1s;
            overflow: hidden;
            z-index: 1;
            /* border: 1px solid #999;  */
            border-radius: 50px;
        }
.button::before, .button::after{
            position: absolute;
            content: '';
            width: 100%; 
            height: 100%;
            top: 0;
            transform: skewX(30deg);
            /* transform: skewX(0deg); */
            /* transform: skewY(-29deg); */
            z-index: -1;
            box-sizing: 0 0 10px #000;
        }
        .button::before{
            left : -110%;
            /* background-color: rgb(65, 70, 24); */
            background-color: black;
            transition-property: all;
            transition-duration: 1s;
        }
        .button::after{
            right: -110%;
            /* background-color: rgb(5, 5, 49); */
            background-color: black;
            transition-property: all;
            transition-duration: 1s;
        }
        .button:hover{
            /* box-shadow: 0 0 30px red; */
            /* width: 700px; */
            /* border-radius: 15px; */
            /* text-shadow: 0 0 3px white, 0 4px black ; */
            border: none;
        }
        /* .button:hover::before{
            left :-50%;
        } */
        .button::before{
            left :-49%;
        }
        /* .button:hover::after{
            right :-50%;
        } */
        .button::after{
            right :-54%;
        }
.mtl{
    display: inline-flex;
}
.mtl1{
    display: inline-flex;
    position: absolute;
    width: 50%;
    left: 1px;
    background-color: black;
}
.mtl2{
    display: inline-flex;
    position: absolute;
    width: 50%;
    left: 50%;
    background-color: red;
    /* text-align: center; */
    /* margin: 2px 9px; */
}
</style>