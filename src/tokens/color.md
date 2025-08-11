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
import TokenSwatch from '../components/tokens/TokenSwatch.vue'
import TokenCopy from '../components/tokens/TokenCopy.vue'
import TokenPreview from '../components/tokens/TokenPreview.vue'
</script>

# Color

## Interaction

<TokenPreview>
  <template #tokenName>
    <TokenCopy buttonText="color.interaction.primary.default"/>
  </template>
  <template #lightToken>
    <TokenSwatch colorValue="#0870ff" token="color/brand/500"></TokenSwatch>
  </template>
  <template #darkToken>
    <TokenSwatch colorValue="#0870ff" token="color/brand/500" mode="dark"></TokenSwatch>
  </template>
</TokenPreview>