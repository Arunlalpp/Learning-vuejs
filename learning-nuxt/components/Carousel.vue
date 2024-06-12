<template>
  <div class="carousel" ref="carouselDom">
    <div class="list" ref="sliderDom">
      <CarouselItem v-for="(item, index) in items" :key="index" :image="item.image" :author="item.author"
        :title="item.title" :topic="item.topic" :description="item.description" />
    </div>
    <div class="thumbnail" ref="thumbnailBorderDom">
      <Thumbnail v-for="(item, index) in items" :key="index" :image="item.image" />
    </div>
    <div class="arrows">
      <button id="prev" @click="showSlider('prev')">
        <</button>
          <button id="next" @click="showSlider('next')">></button>
    </div>
    <div class="time" ref="timeDom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CarouselItem from '~/components/CarouselItem.vue'
import Thumbnail from '~/components/Thumbnail.vue'
import { dummySliderData } from './assets/data/dummyData.ts'

const items = ref(dummySliderData)

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
