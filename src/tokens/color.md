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
// import lightTokens from "@shopware-ag/meteor-tokens/dictionaries/administration/light.tokens.json";
// import darkTokens from "@shopware-ag/meteor-tokens/dictionaries/administration/dark.tokens.json";
import transform from '../utils/tokenUtil.ts'
// todo: import token files correctly
// const testTokens = transform(tokens);
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

<div class="test">
<p>{{testTokens ?? "heelo"}}</p>
</div>

<style scoped>
.test {
  width: 100%;
}
</style>
