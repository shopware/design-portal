---
pageClass: p-tokens
sidebar: true
aside: false
page: true
#footer: false
editLink: false
stackOverflowLink: false
prev: false
next: false
---

<script setup>
import ComponentThumbnail from '../components/meteor-components/ComponentThumbnail.vue'
</script>

# Components

## Feedback indicator

These indicators components will help the user understand what's going on in the administration. Elements like banners that will show valuable info or loading indicators that show a process is loading.

<div class="thumb-list">
    <ComponentThumbnail name="banner" section="feedback-indicator">
        <template v-slot:header>Banner</template>
        <template v-slot:text>Banners provide contextual feedback messages.</template>
    </ComponentThumbnail>
    <ComponentThumbnail name="loader" section="feedback-indicator">
        <template v-slot:header>Loader</template>
        <template v-slot:text>Loaders indicate ongoing processes.</template>
    </ComponentThumbnail>
    <ComponentThumbnail name="progress-bar" section="feedback-indicator">
        <template v-slot:header>Progress Bar</template>
        <template v-slot:text>Progress bars show task completion progress.</template>
    </ComponentThumbnail>
</div>

## Form

Form elements are components within our admin to show and edit data. These elements include text fields, checkboxes, radio buttons, dropdowns, and more.

<div class="thumb-list">
    <ComponentThumbnail name="button" section="form">
        <template v-slot:header>Button</template>
        <template v-slot:text>Buttons trigger actions.</template>
    </ComponentThumbnail>
    <ComponentThumbnail name="checkbox" section="form">
        <template v-slot:header>Checkbox</template>
        <template v-slot:text>Checkboxes allow multiple selections.</template>
    </ComponentThumbnail>
    <ComponentThumbnail name="colorpicker" section="form">
        <template v-slot:header>Color Picker</template>
        <template v-slot:text>Select colors easily.</template>
    </ComponentThumbnail>
    <ComponentThumbnail name="datepicker" section="form">
        <template v-slot:header>Date Picker</template>
        <template v-slot:text>Select dates efficiently.</template>
    </ComponentThumbnail>
    <ComponentThumbnail name="text-field" section="form">
        <template v-slot:header>Text Field</template>
        <template v-slot:text>Enter text inputs.</template>
    </ComponentThumbnail>
</div>

## Icons & Media

Icons and multimedia elements are graphical elements used to visually enhance or support actions and features.

<div class="thumb-list">
    <ComponentThumbnail name="icon" section="icons">
        <template v-slot:header>Icon</template>
        <template v-slot:text>Graphical representations of actions.</template>
    </ComponentThumbnail>
</div>

## Layout

The layout components are the main elements of the page that provide structure and organization to the content. They are responsible for holding and displaying the different parts of the page in a logical and consistent manner.

<div class="thumb-list">
    <ComponentThumbnail name="card" section="layout">
        <template v-slot:header>Card</template>
        <template v-slot:text>Encapsulates content in a structured way.</template>
    </ComponentThumbnail>
</div>

## Navigation

Navigation components such as search and tabs can help users easily locate desired content.

<div class="thumb-list">
    <ComponentThumbnail name="search" section="navigation">
        <template v-slot:header>Search</template>
        <template v-slot:text>Allows users to find information quickly.</template>
    </ComponentThumbnail>
    <ComponentThumbnail name="tabs" section="navigation">
        <template v-slot:header>Tabs</template>
        <template v-slot:text>Organize content into sections.</template>
    </ComponentThumbnail>
</div>

## Overlay

Overlay items are temporary components placed on top of main layout components with a shadow to enhance visual elevation.

<div class="thumb-list">
    <ComponentThumbnail name="popover" section="overlay">
        <template v-slot:header>Popover</template>
        <template v-slot:text>Popovers allow users to access a list of temporary choices or actions.</template>
    </ComponentThumbnail>
</div>

## Table and list

Table and list components are used to present interactive data that can be ordered, searched, and edited if the UI allows it.

<div class="thumb-list">
    <ComponentThumbnail name="pagination" section="table-list">
        <template v-slot:header>Pagination</template>
        <template v-slot:text>Paginations are used to split the listed data into sections for better performance.</template>
    </ComponentThumbnail>
</div>

<style lang="css">
.thumb-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 100%;
    padding-top: 1rem;
    margin-bottom: 5rem;
}

@media (max-width: 900px) {
    .thumb-list {
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
    }
}
</style>
