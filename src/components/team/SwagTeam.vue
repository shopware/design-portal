<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
  { id: '1', name: 'Dennis Mader', pronouns: 'he/him', role: 'Head of UX', portrait: '../../careers/team/dennis--mader.png 2x' },
  { id: '2', name: 'Anna-Lena Rauch', pronouns: 'she/her', role: 'Head of Brand Design', portrait: '../../careers/team/anna-lena--rauch.png 2x' },
  { id: '3', name: 'Ramona Samson', pronouns: 'she/her', role: 'UX Designer', portrait: '../../careers/team/ramona--samson.png 2x' },
  { id: '4', name: 'Fabian Hüske', pronouns: 'he/him', role: 'Principal UX Designer', portrait: '../../careers/team/fabian--hueske.png 2x' },
  { id: '5', name: 'Julian Preissinger', pronouns: 'he/him', role: 'UX Architect', portrait: '../../careers/team/julian--preissinger.png 2x' },
  { id: '6', name: 'Annika Pantring', pronouns: 'she/her', role: 'UX Designer', portrait: '../../careers/team/annika--pantring.png 2x' },
  { id: '7', name: 'Jessica Homan', pronouns: 'she/her', role: 'Videography & Photography', portrait: '../../careers/team/jessica--homan.png 2x' },
  { id: '8', name: 'Sỹ Thông Nguyễn', pronouns: 'he/him', role: 'UX Designer', portrait: '../../careers/team/sy-thong--nguyen.png 2x' },
  { id: '9', name: 'Pauline Feldhaus', pronouns: 'she/her', role: 'Brand Designer', portrait: '../../careers/team/pauline--feldhaus.png 2x' },
  { id: '10', name: 'Anton Toews', pronouns: 'he/him', role: 'Brand Designer', portrait: '../../careers/team/anton--toews.png 2x' },
  { id: '11', name: 'Peter Noorlander', pronouns: 'he/him', role: 'Principal UX Designer', portrait: '../../careers/team/peter--noorlander.png 2x' },
  { id: '12', name: 'Jessica Robering', pronouns: 'she/her', role: 'UI Designer', portrait: '../../careers/team/jessica--robering.png 2x' },
  { id: '13', name: 'Leonie Osterhaus', pronouns: 'she/her', role: 'Brand Designer', portrait: '../../careers/team/leonie--osterhaus.png 2x' },
  { id: '14', name: 'Niklas Kortüm', pronouns: 'he/him', role: 'Brand Architect', portrait: '../../careers/team/niklas--kortuem.png 2x' },
  { id: '15', name: 'Oskar', role: '-> Dennis', portrait: '../../careers/team/oskar.png 2x' },  
  { id: '16', name: 'Archie', role: '-> Anna-Lena', portrait: '../../careers/team/archie.png 2x' }, 
  { id: '17', name: 'Beau Beau', role: '-> Julian', portrait: '../../careers/team/beaubeau.png 2x' },
  { id: '18', name: 'Ella', role: '-> Peter', portrait: '../../careers/team/ella.png 2x' },
  
 
  

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
  <div class="m-40">
    <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="2800" pauseAutoplayOnHover="true">
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
          <div class="carousel__item-left">
            <picture>
              <source media="(prefers-color-scheme: dark)" :srcset="slide.portrait" type="image/png">

              <img decoding="async" :alt="slide.name" :src="slide.portrait" :srcset="slide.portrait" width="100%" height="auto">
            </picture>
          </div>
          <div class="carousel__item-right">
            <p>
              <h3>{{ slide.name }}</h3>
              {{ slide.role }}
          </p>
          <span class="pronouns">{{ slide.pronouns }}</span>
          </div>
        </div>
      </Slide>
      <!--<template #addons>
        <Navigation />
      </template>-->
    </Carousel>
  </div>
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
    margin: 0;
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
  .pronouns {
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }
  img {
    height: 270px;
    width: auto;
    display: block;
    object-fit: contain;
    margin-right: 42px;
  }
}
.carousel__slide {
  padding: 0px 25px;
  margin-bottom: 80px;
  display: block;
}

.carousel.is-hover {
  cursor: grab;
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
  transform: rotateY(-0deg);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(0deg);
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
  height: 375px;
  position: absolute;
  background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
  z-index: 10;
}
@media (prefers-color-scheme: dark) { 
    .carousel__fade--left {
    background: linear-gradient(90deg, #1a1f26 0%, rgba(26, 31, 38, 0) 100%);
    }
  }
.carousel__fade--right {
  width: 180px;
  height: 375px;
  position: absolute;
  background: linear-gradient(-90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
  z-index: 10;
  right: 0;
  @media (prefers-color-scheme: dark) { 
    background: linear-gradient(-90deg, #1a1f26 0%, rgba(26, 31, 38, 0) 100%);
  }
}
</style>