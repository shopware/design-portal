---
title: Basics
class: p-landing-768
sidebar: true
aside: true
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
import Cutdown from "../../components/banner/Cutdown.vue";
import UsageBlock from "../../components/interaction/UsageBlock.vue";
</script>

# {{ $frontmatter.title }} 

## Active voice

You should (almost) always write in the active voice. Avoid passive voice.

In active voice, the subject of the sentence does the action. In passive voice, the subject of the sentence has the action done to it.

<UsageBlock>
  <template #correct>
    Dennis logged into the account
  </template>
  <template #incorrect>
    The account was logged into by Dennis
  </template>
</UsageBlock>

::: info Tip
Words like “was” and “by” may indicate that you’re writing in passive voice. Scan for these words and rework sentences where they appear.
:::

One exception is when you want to specifically emphasize the action over the subject. In some cases, this is fine.

<UsageBlock>
  <template #correct>
    Your account was flagged by our Support team
  </template>
  <template #incorrect>
    Our Support team has flagged your account
  </template>
</UsageBlock>

## Passive voice

To tell if you’re using the passive voice, look out for:
- When the object comes before the subject (“the item was purchased by the customer”)
- Past tense verbs (“was added,” “was created,” and so on)
- Forms of the verb “to be” (“was,” “is,” “were,” and so on)

You should almost always write in the active voice, but here’s when to use the passive voice:
- To avoid referring to yourself or Shopware
- To make it clear that you didn’t personally take an action or make a decision
- If the object (thing being done) is more important than the subject (person doing the thing)

<UsageBlock>
  <template #correct>
    Invoices are created monthly and emailed to j.johnson@acme.inc
  </template>
  <template #incorrect>
    Shopware creates and emails your invoices monthly to j.johnson@acme.inc
  </template>
</UsageBlock>