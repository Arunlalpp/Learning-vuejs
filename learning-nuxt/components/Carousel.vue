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
      <button id="prev" @click="showSlider('prev')">&lt;</button>
      <button id="next" @click="showSlider('next')">&gt;</button>
    </div>
    <div class="time" ref="timeDom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useEventListener } from '@vueuse/core'
import CarouselItem from '~/components/CarouselItem.vue'
import Thumbnail from '~/components/Thumbnail.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  timeRunning: {
    type: Number,
    default: 3000
  },
  timeAutoNext: {
    type: Number,
    default: 7000
  }
})

const carouselDom = ref(null)
const sliderDom = ref(null)
const thumbnailBorderDom = ref(null)
const timeDom = ref(null)

let runTimeOut = null
let runNextAuto = null

const resetAutoSlide = () => {
  clearTimeout(runNextAuto)
  runNextAuto = setTimeout(() => {
    showSlider('next')
  }, props.timeAutoNext)
}

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
  }, props.timeRunning)

  resetAutoSlide()
}

onMounted(() => {
  resetAutoSlide()
})

onBeforeUnmount(() => {
  clearTimeout(runTimeOut)
  clearTimeout(runNextAuto)
})

useEventListener(carouselDom, 'mouseover', () => {
  clearTimeout(runNextAuto)
})

useEventListener(carouselDom, 'mouseout', resetAutoSlide)
</script>

<style scoped>
</style>
