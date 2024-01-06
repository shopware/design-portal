<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
  { id: '1', name: 'Dennis Mader', role: 'Head of UX', portrait: '../../careers/team/dennis--mader.png 2x' },
  { id: '2', name: 'Anna-Lena Rauch', role: 'Head of Brand Design', portrait: '../../careers/team/anna-lena--rauch.png 2x' },
  { id: '3', name: 'Ramona Samson', role: 'UX Designer', portrait: '../../careers/team/ramona--samson.png 2x' },
  { id: '4', name: 'Fabian Hüske', role: 'Principal UX Designer', portrait: '../../careers/team/fabian--hueske.png 2x' },
  { id: '5', name: 'Sỹ Thông Nguyễn', role: 'UX Designer', portrait: '../../careers/team/sy-thong--nguyen.png 2x' },
  { id: '6', name: 'Annika Pantring', role: 'UX Designer', portrait: '../../careers/team/annika--pantring.png 2x' },
  { id: '7', name: 'Peter Noorlander', role: 'Principal UX Designer', portrait: '../../careers/team/peter--noorlander.png 2x' },
  { id: '8', name: 'Julian Preissinger', role: 'UX Architect', portrait: '../../careers/team/julian--preissinger.png 2x' },
  { id: '9', name: 'Pauline Feldhaus', role: 'Brand Designer', portrait: '../../careers/team/pauline--feldhaus.png 2x' },
  { id: '10', name: 'Leonie Osterhaus', role: 'Brand Designer', portrait: '../../careers/team/leonie--osterhaus.png 2x' },
  { id: '11', name: 'Niklas Kortuem', role: 'Brand Architect', portrait: '../../careers/team/niklas--kortuem.png 2x' },
]

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 2.3,
    snapAlign: 'left',
    transition: 2500,
  },
}
</script>

<template>
  <div class="h-label">Shopware Design</div>
    <h2 class="h-homepage">Who we are</h2>
    <p class="md:max-w-5/12">We are Shopware design, a dedicated remote team committed to crafting exceptional user experiences and brand identity across our product suite and services. Our mission is to drive innovation and excellence through collaborative, user-centric design principles. Embracing diversity and inclusivity, we ensure our solutions are elegant, accessible, and empowering for everyone.</p>
  <div class="carousel__fade--left"></div>
  <div class="carousel__fade--right"></div>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="3800" pauseAutoplayOnHover="true">
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <div class="carousel__item-left">
          <picture>
          <source media="(prefers-color-scheme: dark)" :srcset="slide.portrait">

          <img decoding="async" :alt="slide.name" :src="slide.portrait" :srcset="slide.portrait" width="100%" height="auto">
          </picture>
        </div>
        <div class="carousel__item-right">
          <p>
            <h3>{{ slide.name }}</h3>
            {{ slide.role }}
        </p>
        </div>
      </div>
    </Slide>
    <!--<template #addons>
      <Navigation />
    </template>-->
  </Carousel>
</template>

<style scoped>
.carousel__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  .carousel__item-left {
    display: block;
    margin-right: 24px;
  }
  .carousel__item-right {
    align-portrait: center;
    display: grid;
  }
  p {
    text-align: left;
    color: #1E293B;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 160% */
    letter-spacing: 0.6px;
    h3 {
      color: #1E293B;
      font-family: Poppins;
      font-size: 38px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 48px */
      letter-spacing: -1.44px;
      margin-bottom: 4px;
    }
  }
  img {
    height: 320px;
    width: auto;
    display: block;
    object-fit: contain;
  }
}
.carousel__slide {
  padding: 0px 25px;
  margin-bottom: 80px;
  display: block;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg);
  z-index: 120;
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg);
  z-index: 120;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0);
}

.carousel__fade--left {
  width: 100px;
  height: 343px;
  position: absolute;
  background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
  z-index: 99;
}
.carousel__fade--right {
  width: 180px;
  height: 343px;
  position: absolute;
  background: linear-gradient(-90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
  z-index: 99;
  right: 0;
}
</style>