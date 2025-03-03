<template>
  <div class="overview-thumbnail" @click="navigateToPage">
    <img
      decoding="async"
      loading="lazy"
      alt="A sketch of a meteor component"
      :src="imgSrc"
      @click.stop="handleImageClick"
    />
    <span class="header"><slot name="header"></slot></span>
    <span class="text"><slot name="text"></slot></span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vitepress";

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
  setup(props) {
    const router = useRouter();

    const imgSrc = computed(() => {
      return `/components/overview/components-${props.section}-${props.name}.png`;
    });

    const navigateToPage = () => {
      const path = `/meteor-components/${props.section}/mt-${props.name}.html`;
      router.go(path);
    };

    const handleImageClick = (event) => {
      event.preventDefault();
      navigateToPage();
    };

    return { imgSrc, navigateToPage, handleImageClick };
  },
};
</script>

<style lang="css" scoped>
.overview-thumbnail {
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.overview-thumbnail img {
  width: 100%;
  height: auto;
  margin-bottom: 0.6rem;
  cursor: pointer !important;
  z-index: 0 !important;
}

.header {
  font-weight: 700;
  margin: 0;
}

.text {
  font-size: 0.9rem;
  color: #64748B;
}
</style>