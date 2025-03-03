<template>
  <div class="overview-thumbnail">
    <img
      decoding="async"
      loading="lazy"
      alt="A sketch of a meteor component"
      :src="props.imgSrc"
      width="100%"
      height="auto"
    />
    <h2><slot name="header"></slot></h2>
    <p><slot name="subHeader"></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
};

const imgSrc = computed(() => {
    console.log(`/components/overview/${props.section}-${props.img}.png`)
  return `/components/overview/${props.section}-${props.img}.png`;
});
</script>

<style scoped>
.overview-thumbnail {
  width: 100%;
  border: 1px solid red;
}
</style>
