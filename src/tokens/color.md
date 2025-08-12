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
      <TokenCopy>
        <template #buttonText>
          <span>color.interaction.primary.default</span>
        </template>
      </TokenCopy>
    </template>
    <template #tokenDescription>
      <span class="text-[var(--color-text-primary-default)]">This is a token description</span>
    </template>
    <template #lightToken>
      <TokenSwatch colorValue="var(--color-interaction-primary-default)" token="color/brand/500"></TokenSwatch>
    </template>
    <template #darkToken>
      <TokenSwatch colorValue="var(--color-interaction-primary-default)" token="color/brand/500" mode="dark"></TokenSwatch>
    </template>
  </TokenPreview>

<div class="test"></div>

<style scoped>
.test {
  width: 200px;
  height: 100px;
  background-color: var(--color-elevation-surface-raised);
}
</style>