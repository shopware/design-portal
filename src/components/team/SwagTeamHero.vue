<template>
    <div class="SwagDesignHero SwagHero--design">
      <div class="grid gap-10 md:grid-cols-2 items-center">
        <div class="grid gap-4">
          <div class="SwagDesignHero_label h-label"><slot name="label">Label</slot></div>
          <div class="SwagDesignHero_title"><slot name="title">Title</slot></div>
          <div class="SwagDesignHero_content"><slot name="content">Content</slot></div>
        </div>
        <div>
          <div class="SwagDesignHero_image"><slot name="image">Image</slot></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped lang="scss">
  .SwagDesignHero {
    &_label {
    }
    &_title {
        font-family: Poppins;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: 42px; /* 87.5% */
        letter-spacing: -0.8px;
    }
    &_subtitle {
        color: #F88138;
        font-family: Poppins;
        font-size: 42px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 42px */
        letter-spacing: -0.336px;
    }
    &_content {
        color: #696A6E;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 32px; /* 160% */
        letter-spacing: 0.6px;
    }
    &_links {
      @apply flex gap-4 mt-2 items-center;
    }
    &_image {
  
    }
  }
  /* FIGMA CURSOR STYLES */

.figma-name {
    padding: 2px 12px;
    display: inline-block;
    position: absolute;
    top: 24px;
    left: 20px;
    border-radius: 4px 12px 12px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
}

.figma-cursor, .figma-cursor-2 {
  position: absolute;
}

.figma-cursor {
    right: 14%;
    top: 10%;
    animation: 20s hovering-1 infinite;
}

.figma-cursor-2 {
    right: 28%;
    top: 4%;
    animation: 20s hovering-2 infinite;
}

.figma-cursor .figma-name {
  background-color: #A694FF;
  color: #1C0049;
}

.figma-cursor-2 .figma-name {
  background-color: #57D998;
  color: #001F0F;
}

@keyframes hovering-1 {
  0% {
    transform: translate3d(0px, 0px, 0px);
  }

  10% {
    transform: translate3d(10px, 10px, 0px);
  }

  20% {
    transform: translate3d(0px, 0px, 0px);
  }

  25% {
    transform: translate3d(-40px, 20px, 0px);
  }

  30% {
    transform: translate3d(-45px, 25px, 0px);
  }

  35% {
    transform: translate3d(-40px, 20px, 0px);
  }

  50% {
    transform: translate3d(-40px, 20px, 0px);
  }

  55% {
    transform: translate3d(-200px, 40px, 0px);
  }

  60% {
    transform: translate3d(-205px, 45px, 0px);
  }

  65% {
    transform: translate3d(-200px, 40px, 0px);
  }

  70% {
    transform: translate3d(-205px, 45px, 0px);
  }

  95% {
    transform: translate3d(-200px, 40px, 0px);
  }
}

@keyframes hovering-2 {
  0% {
    transform: translate3d(0px, 0px, 0px);
  }
  20% {
    transform: translate3d(0px, 0px, 0px);
  }
  35% {
    transform: translate3d(15px, 10px, 0px);
  }
  45% {
    transform: translate3d(40px, 5px, 0px);
  }
  55% {
    transform: translate3d(0px, 0px, 0px);
  }
  65% {
    transform: translate3d(0px, 0px, 0px);
  }
  75% {
    transform: translate3d(20px, 0px, 0px);
  }
  85% {
    transform: translate3d(25px, 20px, 0px);
  }
  90% {
    transform: translate3d(25px, 5px, 0px);
  }
  95% {
    transform: translate3d(0px, 0px, 0px);
  }
}
  </style>