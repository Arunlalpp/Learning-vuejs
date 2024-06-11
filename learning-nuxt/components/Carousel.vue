<template>
  <div class="carousel">
    <div class="list" ref="sliderDom">
      <CarouselItem v-for="(item, index) in items" :key="index" :image="item.image" :author="item.author"
        :title="item.title" :topic="item.topic" :description="item.description" />
    </div>
    <div class="thumbnail" ref="thumbnailBorderDom">
      <Thumbnail v-for="(item, index) in items" :key="index" :image="item.image" />
    </div>
    <div class="arrows">
      <button id="prev" @click="showSlider('prev')"><</button>
          <button id="next" @click="showSlider('next')">></button>
    </div>
    <div class="time" ref="timeDom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CarouselItem from '~/components/CarouselItem.vue'
import Thumbnail from '~/components/Thumbnail.vue'

const items = ref([
  {
    image: 'https://images.unsplash.com/photo-1718030323555-214805b7f884?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...'
  },
  {
    image: 'https://images.unsplash.com/photo-1707243103665-1de6cbf8f66f?q=80&w=1493&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...'
  },
  {
    image: 'https://images.unsplash.com/photo-1612967335954-cb297626daa7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...'
  },
  {
    image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'LUNDEV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...'
  }
])

const carouselDom = ref(null)
const sliderDom = ref(null)
const thumbnailBorderDom = ref(null)
const timeDom = ref(null)
let runTimeOut
let runNextAuto
const timeRunning = 3000
const timeAutoNext = 7000

const showSlider = (type) => {
  const sliderItemsDom = sliderDom.value.querySelectorAll('.item')
  const thumbnailItemsDom = thumbnailBorderDom.value.querySelectorAll('.item')

  if (type === 'next') {
    sliderDom.value.appendChild(sliderItemsDom[0])
    thumbnailBorderDom.value.appendChild(thumbnailItemsDom[0])
    carouselDom.value.classList.add('next')
  } else {
    sliderDom.value.prepend(sliderItemsDom[sliderItemsDom.length - 1])
    thumbnailBorderDom.value.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1])
    carouselDom.value.classList.add('prev')
  }

  clearTimeout(runTimeOut)
  runTimeOut = setTimeout(() => {
    carouselDom.value.classList.remove('next')
    carouselDom.value.classList.remove('prev')
  }, timeRunning)

  clearTimeout(runNextAuto)
  runNextAuto = setTimeout(() => {
    showSlider('next')
  }, timeAutoNext)
}

onMounted(() => {
  runNextAuto = setTimeout(() => {
    showSlider('next')
  }, timeAutoNext)
})

onBeforeUnmount(() => {
  clearTimeout(runTimeOut)
  clearTimeout(runNextAuto)
})
</script>
