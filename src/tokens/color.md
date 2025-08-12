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
  import darkdata from '../tokens/data/dark.tokens.json'

  //TODO: remove when added to theme
  const lightTokensData = computed(() => transform(lightdata, "light"));
  const darkTokensData = computed(() => transform(darkdata, "dark"));

  const colorTokens = computed(() => {
    const lightColor = lightTokensData.value?.find(category => category.category === 'color');
    const darkColor = darkTokensData.value?.find(category => category.category === 'color');

    const lightTokens = lightColor?.tokens || [];
    const darkTokens = darkColor?.tokens || [];

    return [...lightTokens, ...darkTokens];
  });

  const fontTokens = computed(() => {
    const lightFont = lightTokensData.value?.find(category => category.category === 'font');
    const darkFont = darkTokensData.value?.find(category => category.category === 'font');

    const lightTokens = lightFont?.tokens || [];
    const darkTokens = darkFont?.tokens || [];

    return [...lightTokens, ...darkTokens];
  });

  const borderTokens = computed(() => {
    const lightBorder = lightTokensData.value?.find(category => category.category === 'border');
    const darkBorder = darkTokensData.value?.find(category => category.category === 'border');

    const lightTokens = lightBorder?.tokens || [];
    const darkTokens = darkBorder?.tokens || [];

    return [...lightTokens, ...darkTokens];
  });
</script>

# Color

## Interaction

<div>
  <ul>
    <div v-for="token in colorTokens"
      class="w-full flex flex-row justify-between border-t-0 border-l-0 border-r-0 border-b-1 border-solid border-[#091E42]/14"
    >
      <div class="flex flex-col m-t-16px gap-4 text-sm">
        <TokenCopy>
          <template #buttonText>
            <span>{{ token.tokenName }}</span>
          </template>
        </TokenCopy>
        <span class="text-[12px] text-[var(--color-text-primary-default)]">{{token.description}}</span>
      </div>
      <div class="flex flex-row justify-between">
        <TokenSwatch colorValue="var(--color-interaction-primary-default)">
          <template #tokenValue>
            {{ token.value }}
          </template>
        </TokenSwatch>
        <TokenSwatch colorValue="var(--color-interaction-primary-default)" mode="dark">
          <template #tokenValue>
            {{ token.value }}
          </template>
        </TokenSwatch>
      </div>
    </div>
  </ul>
</div>

<div class="test">
  <p>{{colorTokens ?? "heelo"}}</p>
</div>

<style scoped>
.test {
  width: 100%;
}
</style>
