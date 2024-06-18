<template>
    <div style="position: relative;">
        <Carousel :items="items" :timeRunning="3000" :timeAutoNext="7000" />
    </div>
    <Cards />
    <WrapperContainer>
        <LazyInfiniteCarousel :images="dummyImages" />
        <LazyTestimonialSlider />
    </WrapperContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSliderStore } from '~/store/UseGetSlider.ts'
import Carousel from '~/components/Carousel.vue'

const sliderStore = useSliderStore()
const items = ref([])

onMounted(() => {
    sliderStore.setItems([
        {
            image:
                "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "LUNDEV",
            title: "DESIGN SLIDER",
            topic: "HOME TOUR",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        },
        {
            image:
                "https://images.unsplash.com/photo-1707243103665-1de6cbf8f66f?q=80&w=1493&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "LUNDEV",
            title: "DESIGN SLIDER",
            topic: "HOME TOUR",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        },
        {
            image:
                "https://images.unsplash.com/photo-1612967335954-cb297626daa7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "LUNDEV",
            title: "DESIGN SLIDER",
            topic: "HOME TOUR",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        },
        {
            image:
                "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            author: "LUNDEV",
            title: "DESIGN SLIDER",
            topic: "HOME TOUR",
            description:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        },
    ],)
    items.value = sliderStore.items
})
const dummyImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',

]
</script>

<style></style>