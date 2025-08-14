---
pageClass: p-tokens
sidebar: true
aside: true
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
---

<script setup lang="ts">
  import { computed } from 'vue'
  import TokenSwatch from '../components/tokens/TokenSwatch.vue'
  import TokenCopy from '../components/tokens/TokenCopy.vue'
  import TokenPreview from '../components/tokens/TokenPreview.vue'
  import transform from '../utils/tokenUtil.ts'
  import lightdata from '../tokens/data/light.tokens.json'

  //TODO: remove when added to theme
  const tokensData = computed(() => transform(lightdata));
</script>

# All tokens

<div>
  <div v-for="category in tokensData" :key="category.category" class="mb-8">
    <h2 class="text-xl font-semibold mb-4">{{ category.category }}</h2>
    <ul class="list-none !p-0 m-0">
      <li v-for="token in category.tokens" :key="token.tokenName"
        class="w-full flex flex-row justify-between border-b-0 border-l-0 border-r-0 border-t-1 border-solid border-[#091E42]/14"
      >
        <div class="flex flex-col gap-4 text-sm m-t-5">
          <TokenCopy>
            <template #buttonText>
              <span>{{ token.tokenName }}</span>
            </template>
          </TokenCopy>
          <span class="text-[12px] text-[var(--color-text-primary-default)]">{{ token.description }}</span>
        </div>
        <div class="flex flex-row gap-4">
          <TokenSwatch :colorValue="token.tokenName" :category="category.category">
            <template #tokenValue>
              {{ token.value }}
            </template>
          </TokenSwatch>
          <TokenSwatch :colorValue="token.tokenName" mode="dark" :category="category.category">
            <template #tokenValue>
              {{ token.value }}
            </template>
          </TokenSwatch>
        </div>
      </li>
    </ul>
  </div>
</div>
