<template>
  <div
    class="slider"
    role="region"
    aria-label="Team slider"
    tabindex="0"
    @keydown="onKeydown"
    ref="slider"
    style="position:relative;"
    @mouseenter="stopAutoSlide"
    @mouseleave="startAutoSlide"
  >
    <div class="slider-gradient left"></div>
    <div class="slider-gradient right"></div>
    <div
      v-if="isIOS"
      class="slider-track native-scroll"
    >
      <div
        v-for="(person, idx) in slides"
        :key="person.id"
        class="slider-item"
        :class="[{ dog: person.dog }]"
        :tabindex="0"
        role="button"
        :aria-label="'Show details for ' + person.name"
        @click="openModal(person)"
        @keydown.enter="openModal(person)"
        @focus="focusedIndex = idx"
        @blur="focusedIndex = null"
        style="flex-direction: column; align-items: center; min-width: 420px; max-width: 420px; justify-content: flex-start; padding: 32px 0;"
      >
        <img :src="getImgUrl(person.portrait)" :alt="person.name" class="portrait ios" style="margin: 0 0 24px 0; height: 300px; width: 300px;" />
        <div class="info" style="text-align: center;">
          <div class="name">{{ person.name }}</div>
          <div v-if="person.pronouns" class="pronouns">{{ person.pronouns }}</div>
          <div class="role">{{ person.role }}</div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="slider-track"
      :style="trackStyle"
      @mousedown="onDragStart"
      @touchstart="onDragStart"
      @touchmove.prevent="onDragMove"
      @touchend="onDragEnd"
      @mouseup="onDragEnd"
      @mouseleave="onDragEnd"
    >
      <div
        v-for="(person, idx) in extendedSlides"
        :key="idx + '-' + person.id"
        class="slider-item"
        :class="[
          { focused: focusedIndex === idx && !showModal },
          { dog: person.dog }
        ]"
        :tabindex="0"
        role="button"
        :aria-label="'Show details for ' + person.name"
        @click="openModal(person)"
        @keydown.enter="openModal(person)"
        @focus="focusedIndex = idx"
        @blur="focusedIndex = null"
        style="flex-direction: row; align-items: center; min-width: 420px; max-width: 420px; justify-content: flex-start;"
      >
        <img :src="getImgUrl(person.portrait)" :alt="person.name" class="portrait" style="margin: 0 32px 0 0;" />
        <div class="info" style="text-align: left;">
          <div class="name">{{ person.name }}</div>
          <div v-if="person.pronouns" class="pronouns">{{ person.pronouns }}</div>
          <div class="role">{{ person.role }}</div>
        </div>
      </div>
    </div>
    <button
      v-if="!isIOS"
      class="slider-arrow left"
      @click="prev"
      aria-label="Previous person"
    >
      <SwagIcon icon="chevron-left" type="solid" size="16" />
    </button>
    <button
      v-if="!isIOS"
      class="slider-arrow right"
      @click="next"
      aria-label="Next person"
    >
      <SwagIcon icon="chevron-right" type="solid" size=16 />
    </button>
    <div v-if="showModal" class="modal-backdrop" @click.self="showModal = false">
      <div class="modal" role="dialog" aria-modal="true">
        <button class="modal-close" @click="showModal = false" aria-label="Close">
          <SwagIcon icon="times-circle" type="solid" size=16 />
        </button>
        <div v-if="selectedPerson">
          <img :src="getImgUrl(selectedPerson.portrait)" :alt="selectedPerson.name" class="portrait" />
          <div class="info">
            <div class="name">{{ selectedPerson.name }}</div>
            <div class="role">{{ selectedPerson.role }}</div>
            <div v-if="selectedPerson.pronouns" class="pronouns">{{ selectedPerson.pronouns }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isIOS = ref(false)
onMounted(() => {
  if (typeof window !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
    isIOS.value = true
  }
})

const slides = [
  { id: '1', name: 'Dennis Mader', pronouns: 'he/him', role: 'Head of UX', portrait: '../../careers/team/dennis--mader.png' },
  { id: '2', name: 'Kerstin Ludwig', pronouns: 'she/her', role: 'Head of Brand Design', portrait: '../../careers/team/kerstin--ludwig.png' },
  { id: '3', name: 'Miriam Krimpmann', pronouns: 'she/her', role: 'Principal UX Designer', portrait: '../../careers/team/miriam--krimpmann.png' },
  { id: '4', name: 'Fabian Hüske', pronouns: 'he/him', role: 'Principal UX Designer', portrait: '../../careers/team/fabian--hueske.png' },
  { id: '5', name: 'Julian Preissinger', pronouns: 'he/him', role: 'UX Architect', portrait: '../../careers/team/julian--preissinger.png' },
  { id: '6', name: 'Nils Haberkamp', pronouns: 'he/him', role: 'UX Engineer', portrait: '../../careers/team/nils--haberkamp.png' },
  { id: '7', name: 'Jessica Homan', pronouns: 'she/her', role: 'Videography & Photography', portrait: '../../careers/team/jessica--homan.png' },
  { id: '8', name: 'Alastair Fraser', pronouns: 'he/him', role: 'UX Engineer', portrait: '../../careers/team/alastair--fraser.png' },
  { id: '9', name: 'Pauline Feldhaus', pronouns: 'she/her', role: 'Brand Designer', portrait: '../../careers/team/pauline--feldhaus.png' },
  { id: '10', name: 'Anton Toews', pronouns: 'he/him', role: 'Motion Designer', portrait: '../../careers/team/anton--toews.png' },
  { id: '11', name: 'Tobias Bienek', pronouns: 'he/him', role: 'UX Designer', portrait: '../../careers/team/tobias--bienek.png' },
  { id: '12', name: 'Peter Noorlander', pronouns: 'he/him', role: 'Principal UX Designer', portrait: '../../careers/team/peter--noorlander.png' },
  { id: '13', name: 'Jessica Robering', pronouns: 'she/her', role: 'UX Designer', portrait: '../../careers/team/jessica--robering.png' },
  { id: '14', name: 'Lucas Dietrich', pronouns: 'he/him', role: 'UX Engineer', portrait: '../../careers/team/lucas--dietrich.png' },
  { id: '15', name: 'Leonie Osterhaus', pronouns: 'she/her', role: 'Brand Designer', portrait: '../../careers/team/leonie--osterhaus.png' },
  { id: '16', name: 'Ida Johannessen', pronouns: 'she/her', role: 'Brand Designer', portrait: '../../careers/team/ida--johannessen.png' },
  { id: '17', name: 'Nadine Saalmann', pronouns: 'she/her', role: 'Junior UX Designer', portrait: '../../careers/team/nadine--saalmann.png' },
  { id: '18', name: 'Niklas Kortüm', pronouns: 'he/him', role: 'Brand Architect', portrait: '../../careers/team/niklas--kortuem.png' },
  { id: '19', name: 'Oskar', role: '-> Dennis', portrait: '../../careers/team/oskar.png', dog: '1' },
  { id: '20', name: 'Beau Beau', role: '-> Julian', portrait: '../../careers/team/beaubeau.png', dog: '1' },
  { id: '21', name: 'Ella', role: '-> Peter', portrait: '../../careers/team/ella.png', dog: '1' }
]

const breakpoints = {
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 2.3,
    snapAlign: 'left',
    transition: 2500,
  },
}

const slider = ref(null)
const current = ref(0)
const dragging = ref(false)
const dragStartX = ref(0)
const dragOffset = ref(0)
const focusedIndex = ref(null)
const showModal = ref(false)
const selectedPerson = ref(null)

const SLIDES_VISIBLE = 3;
const SLIDE_WIDTH = 420 + 50;

const extendedSlides = computed(() => {
  const dup = SLIDES_VISIBLE;
  return [
    ...slides.slice(-dup),
    ...slides,
    ...slides.slice(0, dup)
  ];
});

const trackStyle = computed(() => ({
  transform: `translateX(${-((current.value + SLIDES_VISIBLE) * SLIDE_WIDTH) + dragOffset.value}px)`
}))

function onDragStart(e) {
  onUserInteraction()
  dragging.value = true
  dragStartX.value = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup', onDragEnd)
}

function onDragMove(e) {
  if (!dragging.value) return
  const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX
  dragOffset.value = clientX - dragStartX.value
}

function onDragEnd(e) {
  if (!dragging.value) return
  dragging.value = false
  if (Math.abs(dragOffset.value) > 50) {
    if (dragOffset.value < 0) next()
    else prev()
  }
  dragOffset.value = 0
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', onDragEnd)
}

let autoSlideInterval = null

function startAutoSlide() {
  stopAutoSlide()
  autoSlideInterval = setInterval(() => {
    if (current.value < slides.length - 1) {
      current.value++
    } else {
      current.value = 0
    }
  }, 3500)
}
function stopAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval)
  autoSlideInterval = null
}

const iosAutoScrollActive = ref(false)
let iosAutoScrollInterval = null

function startIOSAutoScroll() {
  if (!isIOS.value) return
  stopIOSAutoScroll()
  const track = document.querySelector('.slider-track.native-scroll')
  if (!track) return
  iosAutoScrollActive.value = true
  iosAutoScrollInterval = setInterval(() => {
    if (!iosAutoScrollActive.value) return
    const item = track.querySelector('.slider-item')
    if (!item) return
    const scrollAmount = item.offsetWidth + 25 * 2
    if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }, 3500)
}
function stopIOSAutoScroll() {
  iosAutoScrollActive.value = false
  if (iosAutoScrollInterval) clearInterval(iosAutoScrollInterval)
  iosAutoScrollInterval = null
}

onMounted(() => {
  if (isIOS.value) {
    setTimeout(() => startIOSAutoScroll(), 500)
    const track = document.querySelector('.slider-track.native-scroll')
    if (track) {
      track.addEventListener('touchstart', stopIOSAutoScroll, { passive: true })
      track.addEventListener('scroll', stopIOSAutoScroll, { passive: true })
    }
  } else {
    startAutoSlide()
  }
})
onUnmounted(() => {
  stopAutoSlide()
  stopIOSAutoScroll()
  if (isIOS.value) {
    const track = document.querySelector('.slider-track.native-scroll')
    if (track) {
      track.removeEventListener('touchstart', stopIOSAutoScroll)
      track.removeEventListener('scroll', stopIOSAutoScroll)
    }
  }
})

function onUserInteraction() {
  stopAutoSlide()
  startAutoSlide()
}

function getSlidesToJump() {
  if (window.innerWidth >= 900) return 3;
  return 1;
}

function prev() {
  onUserInteraction()
  const jump = getSlidesToJump();
  current.value -= jump;
  fixLoop();
}
function next() {
  onUserInteraction()
  const jump = getSlidesToJump();
  current.value += jump;
  fixLoop();
}

function fixLoop() {
  setTimeout(() => {
    if (current.value < 0) {
      current.value = slides.length - 1;
    } else if (current.value >= slides.length) {
      current.value = 0;
    }
  }, 400);
}

const openModal = (person) => {
  selectedPerson.value = person
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const onKeydown = (event) => {
  if (event.key === 'ArrowLeft') {
    prev()
  } else if (event.key === 'ArrowRight') {
    next()
  }
}

function getImgUrl(path) {
  if (path.startsWith('..')) {
    return path.replace(/^\.\.\/?|^\.\//, '/');
  }
  return path;
}
</script>

<style scoped lang="scss">
.carousel--container {
  position: relative;
  user-select: none;
}
.carousel__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  .carousel__item-left {
    display: block;
    margin-right: 24px;
  }
  .carousel__item-right {
    display: grid;
  }
  p {
    text-align: left;
    color: var(--c-text);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 160% */
    letter-spacing: 0.6px;
    margin: 0;
    h3 {
      color: var(--c-text);
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

.carousel--container:before {
        background: linear-gradient(90deg, var(--vp-c-bg) 0%, rgba(255, 255, 255, 0.00) 100%);
        width: 100px;
        height: 280px;
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        z-index: 10;
}
.carousel--container:after {
        background: linear-gradient(-90deg, var(--vp-c-bg) 0%, rgba(255, 255, 255, 0.00) 100%);
        width: 100px;
        height: 280px;
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        z-index: 10;
}

.sticker {
  position: relative;
}
.sticker-move {
  position: absolute;
}
.icr-sticker {
    position: absolute;
    right: 116px;
    top: 2px;
    width: 164px;
    height: 84px;
    transform: rotate(-5.605deg);
    cursor: move;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .sw-proud-sticker {
    position: absolute;
    left: 1145px;
    top: 6px;
    width: 131px;
    height: 131px;
    cursor: move!important;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .sw-proud2-sticker {
    position: absolute;
    right: -52px;
    top: 75px;
    width: 96px;
    height: 96px;
    cursor: move!important;
    z-index: 11;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    transform: rotate(8deg);
  }

.slider {
  position: relative;
  overflow: hidden;
  outline: none;
}
.slider-track {
  display: flex;
  transition: transform 0.7s cubic-bezier(.4,0,.2,1);
  will-change: transform;
  height: 400px;
  align-items: center;
}
.slider-item {
  min-width: 420px;
  max-width: 420px;
  margin: 0 25px;
  background: none;
  border-radius: 0;
  box-shadow: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;
  position: relative;
  justify-content: flex-start;
}
.slider-item.focused {
  box-shadow: 0 0 0 4px #0070f3;
}
.portrait {
  height: 220px;
  width: 220px;
  object-fit: contain;
  border-radius: 0;
  margin: 0 32px 0 0;
  background: none;
  box-shadow: none;
  transition: box-shadow 0.2s;
  display: block;
}
.portrait.ios {
  height: 300px;
  width: 300px;
  max-width: 90vw;
  max-height: 60vw;
  margin: 0 0 20px 0;
  display: block;
}
.slider-item.dog .portrait {
  box-shadow: none;
  cursor: inherit;
}
.slider-item.dog:hover {
  cursor: url('/public/careers/team/dog-cursor.png'), pointer;
}
.info {
  text-align: left;
}
.name {
  font-size: 1.2rem;
  font-weight: bold;
}
.role {
  font-size: 1rem;
  color: #666;
}
.pronouns {
  font-size: 0.9rem;
  color: #999;
}
.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 19;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.slider-arrow.left {
  left: 0.5rem;
}
.slider-arrow.right {
  right: 0.5rem;
}
.slider-arrow .SwagIcon,
.modal-close .SwagIcon {
  width: 16px !important;
  height: 16px !important;
  min-width: 16px !important;
  min-height: 16px !important;
  max-width: 16px !important;
  max-height: 16px !important;
  display: inline-block;
}
@media (max-width: 900px) {
  .slider-item {
    min-width: 90vw;
    max-width: 90vw;
    flex-direction: column;
    align-items: center;
    padding: 24px 8px;
  }
  .portrait {
    margin-right: 0;
    margin-bottom: 16px;
    height: 120px;
    width: 120px;
  }
  .slider-track {
    height: auto;
  }
  .info {
    text-align: center;
  }
  .slider-track.native-scroll .slider-item {
    flex-direction: column !important;
    align-items: center !important;
    padding: 32px 8px !important;
  }
  .slider-track.native-scroll .portrait.ios {
    height: 220px;
    width: 220px;
    max-width: 90vw;
    max-height: 60vw;
    margin: 0 0 20px 0;
  }
  .slider-track.native-scroll .info {
    text-align: center !important;
  }
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  position: relative;
}
.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
.slider-gradient {
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.slider-gradient.left {
  left: 0;
  background: linear-gradient(90deg, var(--vp-c-bg) 0%, rgba(255, 255, 255, 0.00) 100%);
}
.slider-gradient.right {
  right: 0;
  background: linear-gradient(-90deg, var(--vp-c-bg) 0%, rgba(255, 255, 255, 0.00) 100%);
}
.slider-track.native-scroll {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  transition: none !important;
  will-change: unset;
  height: 400px;
  align-items: center;
  display: flex;
}
.slider-track.native-scroll .slider-item {
  scroll-snap-align: center;
}
</style>