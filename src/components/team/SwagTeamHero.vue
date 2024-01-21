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
          <div class="figma-cursor">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3133_20339)">
            <path d="M3.98826 6.33814C3.54682 5.14903 3.32611 4.55448 3.45768 4.16915C3.57203 3.83428 3.83505 3.57127 4.16991 3.45692C4.55525 3.32534 5.1498 3.54606 6.33891 3.9875L20.4424 9.22317C21.8415 9.74258 22.5411 10.0023 22.7452 10.3844C22.9221 10.7155 22.9251 11.1124 22.7532 11.4462C22.5548 11.8314 21.8593 12.1016 20.4681 12.6419L18.5859 13.373C17.2031 13.9101 16.5117 14.1787 15.9296 14.5938C15.4136 14.9617 14.9625 15.4129 14.5945 15.9288C14.1795 16.5109 13.9109 17.2023 13.3738 18.5851L12.6427 20.4673C12.1023 21.8585 11.8321 22.5541 11.447 22.7525C11.1132 22.9244 10.7163 22.9214 10.3852 22.7445C10.003 22.5403 9.74334 21.8408 9.22393 20.4416L3.98826 6.33814Z" fill="#A694FF"/>
            <path d="M20.8401 8.15176L6.73665 2.91608C6.72056 2.91011 6.70452 2.90416 6.68854 2.89822C6.13525 2.69279 5.64856 2.51209 5.25281 2.4045C4.87069 2.30062 4.33756 2.19203 3.8006 2.37538C3.13087 2.60407 2.60484 3.1301 2.37614 3.79984C2.19279 4.3368 2.30138 4.86993 2.40526 5.25204C2.51285 5.64779 2.69355 6.13448 2.89898 6.68777C2.90492 6.70375 2.91087 6.71979 2.91685 6.73588L8.15252 20.8394L8.17083 20.8887C8.41487 21.5461 8.624 22.1095 8.82302 22.5301C9.00592 22.9165 9.29836 23.4596 9.84667 23.7525C10.5089 24.1063 11.3027 24.1123 11.9703 23.7685C12.5229 23.4838 12.8235 22.9452 13.0122 22.5615C13.2175 22.144 13.4351 21.5838 13.689 20.9301L13.708 20.8811L14.4391 18.9989C14.9972 17.5621 15.2124 17.0309 15.5251 16.5923C15.8194 16.1796 16.1803 15.8186 16.5931 15.5243C17.0316 15.2116 17.5628 14.9964 18.9997 14.4383L20.8819 13.7072L20.9309 13.6882C21.5846 13.4343 22.1448 13.2167 22.5623 13.0114C22.946 12.8227 23.4846 12.5222 23.7692 11.9695C24.113 11.302 24.1071 10.5082 23.7533 9.8459C23.4604 9.2976 22.9173 9.00515 22.5308 8.82226C22.1103 8.62324 21.5469 8.41411 20.8894 8.17006L20.8401 8.15176Z" stroke="white" stroke-width="2.28571"/>
            </g>
            <defs>
            <filter id="filter0_d_3133_20339" x="0.849051" y="0.848075" width="25.1741" height="25.1741" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.285714" dy="0.285714"/>
            <feGaussianBlur stdDeviation="0.285714"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3133_20339"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3133_20339" result="shape"/>
            </filter>
            </defs>
            </svg>
            <span class="figma-name">Dennis</span>
          </div>
          <div class="figma-cursor-2">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_3133_20344)">
            <path d="M3.98826 6.33814C3.54682 5.14903 3.32611 4.55448 3.45768 4.16915C3.57203 3.83428 3.83505 3.57127 4.16991 3.45692C4.55525 3.32534 5.1498 3.54606 6.33891 3.9875L20.4424 9.22317C21.8415 9.74258 22.5411 10.0023 22.7452 10.3844C22.9221 10.7155 22.9251 11.1124 22.7532 11.4462C22.5548 11.8314 21.8593 12.1016 20.4681 12.6419L18.5859 13.373C17.2031 13.9101 16.5117 14.1787 15.9296 14.5938C15.4136 14.9617 14.9625 15.4129 14.5945 15.9288C14.1795 16.5109 13.9109 17.2023 13.3738 18.5851L12.6427 20.4673C12.1023 21.8585 11.8321 22.5541 11.447 22.7525C11.1132 22.9244 10.7163 22.9214 10.3852 22.7445C10.003 22.5403 9.74334 21.8408 9.22393 20.4416L3.98826 6.33814Z" fill="#57D998"/>
            <path d="M20.8401 8.15176L6.73665 2.91608C6.72056 2.91011 6.70452 2.90416 6.68854 2.89822C6.13525 2.69279 5.64856 2.51209 5.25281 2.4045C4.87069 2.30062 4.33756 2.19203 3.8006 2.37538C3.13087 2.60407 2.60484 3.1301 2.37614 3.79984C2.19279 4.3368 2.30138 4.86993 2.40526 5.25204C2.51285 5.64779 2.69355 6.13448 2.89898 6.68777C2.90492 6.70375 2.91087 6.71979 2.91685 6.73588L8.15252 20.8394L8.17083 20.8887C8.41487 21.5461 8.624 22.1095 8.82302 22.5301C9.00592 22.9165 9.29836 23.4596 9.84667 23.7525C10.5089 24.1063 11.3027 24.1123 11.9703 23.7685C12.5229 23.4838 12.8235 22.9452 13.0122 22.5615C13.2175 22.144 13.4351 21.5838 13.689 20.9301L13.708 20.8811L14.4391 18.9989C14.9972 17.5621 15.2124 17.0309 15.5251 16.5923C15.8194 16.1796 16.1803 15.8186 16.5931 15.5243C17.0316 15.2116 17.5628 14.9964 18.9997 14.4383L20.8819 13.7072L20.9309 13.6882C21.5846 13.4343 22.1448 13.2167 22.5623 13.0114C22.946 12.8227 23.4846 12.5222 23.7692 11.9695C24.113 11.302 24.1071 10.5082 23.7533 9.8459C23.4604 9.2976 22.9173 9.00515 22.5308 8.82226C22.1103 8.62324 21.5469 8.41411 20.8894 8.17006L20.8401 8.15176Z" stroke="white" stroke-width="2.28571"/>
            </g>
            <defs>
            <filter id="filter0_d_3133_20344" x="0.849051" y="0.848075" width="25.1741" height="25.1741" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="0.285714" dy="0.285714"/>
            <feGaussianBlur stdDeviation="0.285714"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3133_20344"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3133_20344" result="shape"/>
            </filter>
            </defs>
            </svg>
            <span class="figma-name">Jessica</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  </script>
  
  <style lang="scss">
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