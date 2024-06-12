<template>
    <div class="slider">
        <div class="slides-track">
            <div class="slide" v-for="(image, index) in images" :key="index">
                <img :src="image" alt="slider" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderComponent',
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    mounted() {
        const slider = this.$el;
        const slidesTrack = slider.querySelector('.slides-track');

        slider.addEventListener('mouseover', () => {
            slidesTrack.style.animationPlayState = 'paused';
        });

        slider.addEventListener('mouseout', () => {
            slidesTrack.style.animationPlayState = 'running';
        });
    }
}
</script>

<style scoped lang="scss">
.slider {
    --totSlides: 7;
    --slideWidth: 200px;
    --slideHeight: 100px;
    --animationSpeed: calc(2s * var(--totSlides));
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: var(--slideHeight);
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.slider::before,
.slider::after {
    content: '';
    position: absolute;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    height: 100%;
    width: 25%;
    z-index: 2;
    pointer-events: none;
}

.slider::before {
    left: 0;
    top: 0;
}

.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}


.slides-track {
    animation: scroll var(--animationSpeed) linear infinite;
    display: flex;
    width: calc(var(--slideWidth) * var(--totSlides) * 2);
    animation-play-state: running;
}

.slide {
    height: var(--slideHeight);
    width: var(--slideWidth);
    // filter: grayscale(100);
    overflow: hidden;
}

.slide img {
    height: 100%;
    width: auto;
    max-width: 100%;
    object-fit: contain;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(var(--slideWidth) * var(--totSlides) * -1));
    }
}
</style>
