<template>
    <section id="testim" class="testim">
        <div class="wrap">
            <span class="arrow right fa fa-chevron-right" @click="moveSlide('right')"></span>
            <span class="arrow left fa fa-chevron-left" @click="moveSlide('left')"></span>
            <ul class="dots">
                <li v-for="(content, index) in testimonialContent" :key="index"
                    :class="{ 'dot': true, 'sliderActive': index === currentSlide }" @click="goToSlide(index)"></li>
            </ul>
            <div class="cont">
                <div v-for="(content, index) in testimonialContent" :key="index"
                    :class="{ 'sliderActive': index === currentSlide, 'inactive': index !== currentSlide }">
                    <div class="imageWrapper">
                        <NuxtImg :src="content.imgSrc" alt="sliderImage" class="img" width="60" height="60" />
                    </div>
                    <h2>{{ content.name }}</h2>
                    <p>{{ content.text }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from '@vue/composition-api';

export default {
    props: {
        testimonialContent: {
            type: Array,
            required: true,
            default: () => [
                { imgSrc: 'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Ms. Lorem R', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
                { imgSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D', name: 'Ms. Ipsum S', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
                { imgSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D', name: 'Mr. Dolor T', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
                { imgSrc: 'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Ms. Sit Amet', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
            ]
        },
        testimSpeed: {
            type: Number,
            default: 4500
        }
    },
    setup(props) {
        const currentSlide = ref(0);
        let testimTimer = null;

        const playSlide = () => {
            clearTimeout(testimTimer);
            testimTimer = setTimeout(() => {
                moveSlide('right');
                playSlide();
            }, props.testimSpeed);
        };

        const moveSlide = (direction) => {
            if (direction === 'left') {
                currentSlide.value = (currentSlide.value - 1 + props.testimonialContent.length) % props.testimonialContent.length;
            } else if (direction === 'right') {
                currentSlide.value = (currentSlide.value + 1) % props.testimonialContent.length;
            }
        };

        const goToSlide = (index) => {
            currentSlide.value = index;
        };

        onMounted(() => {
            playSlide();
            document.addEventListener('keyup', handleKeyUp);
        });

        onUnmounted(() => {
            clearTimeout(testimTimer);
            document.removeEventListener('keyup', handleKeyUp);
        });

        const handleKeyUp = (e) => {
            switch (e.keyCode) {
                case 37:
                    moveSlide('left');
                    break;
                case 39:
                    moveSlide('right');
                    break;
                default:
                    break;
            }
        };

        return {
            currentSlide,
            moveSlide,
            goToSlide
        };
    }
};
</script>

<style lang="css">
.testim .wrap {
    position: relative;
    width: 100%;
    max-width: 1020px;
    padding: 40px 20px;
    margin: auto;
}

.testim .arrow {
    position: absolute;
    color: #eee;
    cursor: pointer;
    font-size: 1.5em;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all .3s ease-in-out;
    -ms-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    padding: 15px;
    z-index: 22222222;
    background-color: rgb(102, 96, 96);
    border-radius: 50%;
}

.testim .arrow:before {
    cursor: pointer;
}

.testim .arrow:hover {
    color: #ea830e;
}


.testim .arrow.left {
    left: 30px;
}

.testim .arrow.right {
    right: 30px;
}

.testim .dots {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 60px;
    left: 0;
    display: block;
    z-index: 3333;
    height: 12px;
}

.testim .dots .dot {
    list-style-type: none;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #eee;
    margin: 0 10px;
    cursor: pointer;
    -webkit-transition: all .5s ease-in-out;
    -ms-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    position: relative;
}

.testim .dots .dot.sliderActive,
.testim .dots .dot:hover {
    background: #ea830e;
    border-color: #ea830e;
}

.testim .dots .dot.sliderActive {
    -webkit-animation: testim-scale .5s ease-in-out forwards;
    -moz-animation: testim-scale .5s ease-in-out forwards;
    -ms-animation: testim-scale .5s ease-in-out forwards;
    -o-animation: testim-scale .5s ease-in-out forwards;
    animation: testim-scale .5s ease-in-out forwards;
}

.testim .cont {
    position: relative;
    overflow: hidden;
}

.testim .cont>div {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0 70px 0;
    opacity: 0;
}

.testim .cont>div.inactive {
    opacity: 1;
}


.testim .cont>div.sliderActive {
    position: relative;
    opacity: 1;
    background-color: gray;
    border-radius: 10px;
}


.testim .cont div .img {
    display: block;
    width: 70px;
    height: 70px;
    margin: auto;
    border-radius: 50%;
}

.imageWrapper {
    padding-top: 1rem;
}

.testim .cont div h2 {
    color: #ea830e;
    font-size: 1em;
    margin: 15px 0;
}

.testim .cont div p {
    font-size: 1.15em;
    color: #eee;
    width: 80%;
    margin: auto;
}

div.sliderActive .img {
    -webkit-animation: testim-show .5s ease-in-out forwards;
    -moz-animation: testim-show .5s ease-in-out forwards;
    -ms-animation: testim-show .5s ease-in-out forwards;
    -o-animation: testim-show .5s ease-in-out forwards;
    animation: testim-show .5s ease-in-out forwards;
}

.testim .cont div.active h2 {
    -webkit-animation: testim-content-in .4s ease-in-out forwards;
    -moz-animation: testim-content-in .4s ease-in-out forwards;
    -ms-animation: testim-content-in .4s ease-in-out forwards;
    -o-animation: testim-content-in .4s ease-in-out forwards;
    animation: testim-content-in .4s ease-in-out forwards;
}

.testim .cont div.sliderActive p {
    -webkit-animation: testim-content-in .5s ease-in-out forwards;
    -moz-animation: testim-content-in .5s ease-in-out forwards;
    -ms-animation: testim-content-in .5s ease-in-out forwards;
    -o-animation: testim-content-in .5s ease-in-out forwards;
    animation: testim-content-in .5s ease-in-out forwards;
}

.testim .cont div.inactive .img {
    -webkit-animation: testim-hide .5s ease-in-out forwards;
    -moz-animation: testim-hide .5s ease-in-out forwards;
    -ms-animation: testim-hide .5s ease-in-out forwards;
    -o-animation: testim-hide .5s ease-in-out forwards;
    animation: testim-hide .5s ease-in-out forwards;
}

.testim .cont div.inactive h2 {
    -webkit-animation: testim-content-out .4s ease-in-out forwards;
    -moz-animation: testim-content-out .4s ease-in-out forwards;
    -ms-animation: testim-content-out .4s ease-in-out forwards;
    -o-animation: testim-content-out .4s ease-in-out forwards;
    animation: testim-content-out .4s ease-in-out forwards;
}

.testim .cont div.inactive p {
    -webkit-animation: testim-content-out .5s ease-in-out forwards;
    -moz-animation: testim-content-out .5s ease-in-out forwards;
    -ms-animation: testim-content-out .5s ease-in-out forwards;
    -o-animation: testim-content-out .5s ease-in-out forwards;
    animation: testim-content-out .5s ease-in-out forwards;
}

@-webkit-keyframes testim-scale {
    0% {
        -webkit-box-shadow: 0px 0px 0px 0px #eee;
        box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
        -webkit-box-shadow: 0px 0px 10px 5px #eee;
        box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
        -webkit-box-shadow: 0px 0px 10px 5px #ea830e;
        box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
        -webkit-box-shadow: 0px 0px 0px 0px #ea830e;
        box-shadow: 0px 0px 0px 0px #ea830e;
    }
}

@-moz-keyframes testim-scale {
    0% {
        -moz-box-shadow: 0px 0px 0px 0px #eee;
        box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
        -moz-box-shadow: 0px 0px 10px 5px #eee;
        box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
        -moz-box-shadow: 0px 0px 10px 5px #ea830e;
        box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
        -moz-box-shadow: 0px 0px 0px 0px #ea830e;
        box-shadow: 0px 0px 0px 0px #ea830e;
    }
}

@-ms-keyframes testim-scale {
    0% {
        -ms-box-shadow: 0px 0px 0px 0px #eee;
        box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
        -ms-box-shadow: 0px 0px 10px 5px #eee;
        box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
        -ms-box-shadow: 0px 0px 10px 5px #ea830e;
        box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
        -ms-box-shadow: 0px 0px 0px 0px #ea830e;
        box-shadow: 0px 0px 0px 0px #ea830e;
    }
}

@-o-keyframes testim-scale {
    0% {
        -o-box-shadow: 0px 0px 0px 0px #eee;
        box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
        -o-box-shadow: 0px 0px 10px 5px #eee;
        box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
        -o-box-shadow: 0px 0px 10px 5px #ea830e;
        box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
        -o-box-shadow: 0px 0px 0px 0px #ea830e;
        box-shadow: 0px 0px 0px 0px #ea830e;
    }
}

@keyframes testim-scale {
    0% {
        box-shadow: 0px 0px 0px 0px #eee;
    }

    35% {
        box-shadow: 0px 0px 10px 5px #eee;
    }

    70% {
        box-shadow: 0px 0px 10px 5px #ea830e;
    }

    100% {
        box-shadow: 0px 0px 0px 0px #ea830e;
    }
}

@-webkit-keyframes testim-content-in {
    from {
        opacity: 0;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
}

@-moz-keyframes testim-content-in {
    from {
        opacity: 0;
        -moz-transform: translateY(100%);
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        -moz-transform: translateY(0);
        transform: translateY(0);
    }
}

@-ms-keyframes testim-content-in {
    from {
        opacity: 0;
        -ms-transform: translateY(100%);
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        -ms-transform: translateY(0);
        transform: translateY(0);
    }
}

@-o-keyframes testim-content-in {
    from {
        opacity: 0;
        -o-transform: translateY(100%);
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        -o-transform: translateY(0);
        transform: translateY(0);
    }
}

@keyframes testim-content-in {
    from {
        opacity: 0;
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@-webkit-keyframes testim-content-out {
    from {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }

    to {
        opacity: 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
    }
}

@-moz-keyframes testim-content-out {
    from {
        opacity: 1;
        -moz-transform: translateY(0);
        transform: translateY(0);
    }

    to {
        opacity: 0;
        -moz-transform: translateY(-100%);
        transform: translateY(-100%);
    }
}

@-ms-keyframes testim-content-out {
    from {
        opacity: 1;
        -ms-transform: translateY(0);
        transform: translateY(0);
    }

    to {
        opacity: 0;
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
    }
}

@-o-keyframes testim-content-out {
    from {
        opacity: 1;
        -o-transform: translateY(0);
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-100%);
        transform: translateY(-100%);
    }
}

@keyframes testim-content-out {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-100%);
    }
}

@-webkit-keyframes testim-show {
    from {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    to {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@-moz-keyframes testim-show {
    from {
        opacity: 0;
        -moz-transform: scale(0);
        transform: scale(0);
    }

    to {
        opacity: 1;
        -moz-transform: scale(1);
        transform: scale(1);
    }
}

@-ms-keyframes testim-show {
    from {
        opacity: 0;
        -ms-transform: scale(0);
        transform: scale(0);
    }

    to {
        opacity: 1;
        -ms-transform: scale(1);
        transform: scale(1);
    }
}

@-o-keyframes testim-show {
    from {
        opacity: 0;
        -o-transform: scale(0);
        transform: scale(0);
    }

    to {
        opacity: 1;
        -o-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes testim-show {
    from {
        opacity: 0;
        transform: scale(0);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@-webkit-keyframes testim-hide {
    from {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    to {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
}

@-moz-keyframes testim-hide {
    from {
        opacity: 1;
        -moz-transform: scale(1);
        transform: scale(1);
    }

    to {
        opacity: 0;
        -moz-transform: scale(0);
        transform: scale(0);
    }
}

@-ms-keyframes testim-hide {
    from {
        opacity: 1;
        -ms-transform: scale(1);
        transform: scale(1);
    }

    to {
        opacity: 0;
        -ms-transform: scale(0);
        transform: scale(0);
    }
}

@-o-keyframes testim-hide {
    from {
        opacity: 1;
        -o-transform: scale(1);
        transform: scale(1);
    }

    to {
        opacity: 0;
        -o-transform: scale(0);
        transform: scale(0);
    }
}

@keyframes testim-hide {
    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0;
        transform: scale(0);
    }
}

@media all and (max-width: 300px) {
    body {
        font-size: 14px;
    }
}

@media all and (max-width: 500px) {
    .testim .arrow {
        font-size: 1.5em;
    }

    .testim .cont div p {
        line-height: 25px;
    }

}
</style>