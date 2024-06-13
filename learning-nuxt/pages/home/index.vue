<template>
    <LazyHeader></LazyHeader>
    <div style="position: relative;">
        <LazyCarousel />
    </div>
    <Cards />
    <WrapperContainer>
        <LazyInfiniteCarousel :images="dummyImages" />
    </WrapperContainer>
</template>

<script setup>
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