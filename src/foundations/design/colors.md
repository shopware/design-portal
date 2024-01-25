---
sidebar: true
aside: false
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
swag:
  related: false
---

<script setup>
import SwagLine from "../../components/home/SwagLine.vue";
import SwagExposed from "../../components/home/SwagExposed.vue";
import SwagResources from "../../components/home/SwagResources.vue";
import LearnMore from "../../components/banner/LearnMore.vue";
import Cutdown from "../../components/banner/Cutdown.vue";
import Contribute from "../../components/banner/Contribute.vue";
</script>

## Colors

::: info
This is an info box.
:::

::: tip Custom Title
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

<LearnMore
    title="Accessibility made simple"
    copy="Everything you need to know to eliminate barriers for your users and meet new regulatory requirements."
    btnlabel="Learn more"
    page="/foundations/accessibility"
/>

<Cutdown
    eyebrow="Related course"
    title="Accessibility commitment"
    btnlabel="Watch lesson"
    videoURL="/foundations/accessibility"
/>

<Contribute
title="Be part of Meteor"
copy="We believe in Open-Source software – we listen to our Community and build Meteor in collaboration with merchants. The best and brightest ideas come from you. If you wish to contribute to the Meteor Design System, please read our contributing guidelines for a smooth start."
btn="true"
page="/foundations/contibutions"
/>

<Tabs>
  <Tab title="Administration">
    Admin Content
  </Tab>
  <Tab title="Storefront">
    Storefront Content
  </Tab>
  <Tab title="POS Kit">
    POS Content
  </Tab>
  <Tab title="Extension Kit">
    Content
  </Tab>
  <Tab title="Brand Kit">
    Content
  </Tab>
</Tabs>

<code>Test</code>

<p>Lorem <code>code</code></p>