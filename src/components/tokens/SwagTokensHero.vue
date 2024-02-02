<template>
    <div class="SwagTokensHero SwagHero--design">
      <div class="grid gap-10 md:grid-cols-2 items-center">
        <div class="grid gap-4">
          <div class="SwagTokensHero_label h-label"><slot name="label">Label</slot></div>
          <div class="SwagTokensHero_title"><slot name="title">Title</slot></div>
          <div class="SwagTokensHero_content"><slot name="content">Content</slot></div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style lang="scss">
  .SwagTokensHero {
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
  </style>