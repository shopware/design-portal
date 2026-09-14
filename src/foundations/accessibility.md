---
title: Accessibility
sidebar: true
aside: true
page: true
editLink: false
stackOverflowLink: false
prev: true
next: true
swag:
  related: false
---

<script setup>
import Cutdown from "../components/banner/Cutdown.vue";
import Resource from "../components/banner/Resource.vue";
</script>

# {{ $frontmatter.title }} 

## Commerce for everyone
At Shopware, we are committed to creating inclusive and barrier-free shopping experiences for our merchants and their customers.

<picture>
<source media="(prefers-color-scheme: dark)" srcset="/foundations/accessibility/foundations-accessibility-intro@dark.png 4x">

<img decoding="async" loading="lazy" alt="A sketch of the Accessibility icon. The image is tinted in shades of green." srcset="/foundations/accessibility/foundations-accessibility-intro.png 4x" src="/foundations/accessibility/foundations-accessibility-intro.png" width="100%" height="auto">
</picture>

## Shopware is for everyone 
Accessibility is not just a goal; it's a fundamental value that drives us to continuously enhance our products and services. By prioritizing accessibility, we are not only ensuring compliance with legal requirements but also extending our reach to untapped audiences for our merchants.

<!--<Cutdown
    eyebrow="Related course"
    title="Our commitment to accessibility"
    btnlabel="Watch lesson"
    videoURL="/foundations/accessibility"
    thumbnailIMG="/foundations/accessibility/foundations-accessibility-intro"
    alt="Video thumbnail showing abstract art – Our commitment to accessibility"
  />-->

<Resource
    eyebrow="Accessibility in ecommerce"
    title="Taking the next step towards accessibility: Preparing for the EAA and Shopware's upcoming solutions"
    URL="https://www.shopware.com/en/news/accessibility-in-ecommerce/"
    alt="Taking the next step towards accessibility: Preparing for the EAA and Shopware's upcoming solutions"
  />

## Our Approach
To achieve true accessibility, we adhere to the industry-leading guidelines set forth by the Web Content Accessibility Guidelines <code>(WCAG) 2.1 AA</code> and Barrier-Free Information Technology Regulation <code>(BITV 2.0)</code>. These guidelines are paramount in shaping web accessibility standards and will serve as the foundation for the upcoming accessibility law, the "Barrierefreiheitsstärkungsgesetz," which will be effective for online stores in Germany in 2025.

[Learn more about the Barrierefreiheitsstärkungsgesetz](https://www.bmas.de/SharedDocs/Downloads/DE/Teilhabe/leitlinien-barrierefreiheit.pdf;jsessionid=1B302D9D42BC7B770886B484C4E6391A.delivery2-master?__blob=publicationFile&v=2) (only available in German)

## Our Commitment
Our commitment extends beyond compliance. We are determined to be fully prepared well before the accessibility law takes effect. While we may not currently conform to all aspects of <code>WCAG 2.1 AA</code>, we are working diligently to bridge the gap. Our target is to achieve full conformance by the end of the year, ensuring our merchants' online shops are accessible to all.

## Roadmap
**Understanding WCAG Guidelines**
- Familiarizing the entire company with the WCAG guidelines, particularly <code>WCAG 2.1</code>, which provides a comprehensive framework for web accessibility at Shopware.
- Studying how the principles of Perceivable, Operable, Understandable, and Robust affect our product.

**Setting Accessibility Goals**
- Defining clear accessibility goals and objectives for our product. In the first step we decided on a conformance level of at least AA based on your target audience and legal requirements.

**Implement Changes**
- Start making changes to your product based on (audit findings and) focus areas.
- Updating our code and make necessary structural alternations.
- Initiating organizational structures to ensure new content and features will also be designed with accessibility in mind.

**User Testing**
- We engage with users with disabilities for testing and feedback an incorporate their insights to refine our changes.
- This includes performing usability testing with assistive technologies such as screen readers and voice commands.

**Education and Training**
- Training our development and design teams on accessibility principles and techniques.
- Fostering a culture of accessibility awareness within the Shopware organization.

**Documentation**
- Documenting our accessibility efforts, guidelines, and standards.
- Creating an accessibility statement or page that informs users about your commitment to accessibility.

**Continuous Monitoring and Improvement**
- Accessibility is an ongoing process. We continuously monitor our product for new accessibility challenges.
- Staying updated with the latest WCAG guidelines and accessibility practices.

## Our Promise
Shopware is unwavering in its dedication to fostering a digital environment that's welcoming and accessible for everyone. We understand that accessibility is an ongoing journey, and we're committed to continuous improvement. Our shared goal is to empower our merchants to connect with a wider audience and offer unparalleled shopping experiences.



## Meeting the Web Content Accessibility Guidelines (WCAG)

For more information, see the following resources:

[WCAG 2.1](https://www.w3.org/TR/WCAG21/)

[ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/)

## Recommended toolkits

  <Resource
    eyebrow="Stark Figma Plugin"
    title="Stark makes it effortless to design accessible products by helping you to meet current accessibility standards."
    URL="https://www.getstark.co/"
    alt="Stark makes it effortless to design accessible products by helping you to meet current accessibility standards."
  />

  <Resource
    eyebrow="Contrast Checker"
    title="Test colour contrast compliance with the Web Content Accessibility Guidelines (WCAG)."
    URL="https://contrastchecker.com"
    alt="Test colour contrast compliance with the Web Content Accessibility Guidelines (WCAG)"
  />

  <Resource
    eyebrow="Accessibility Cheatsheet"
    title="The Accessibility Cheatsheet"
    URL="https://bitsofco.de/the-accessibility-cheatsheet/"
    alt="The Accessibility Cheatsheet"
  />

  ## Accessibilty Checklist for UX Designers

A comprehensive yet designer-friendly accessibility checklist to help UX designers create inclusive, intuitive, and compliant user experiences from the start. Perfect for integrating accessibility into every stage of your design process.

  ::: details 1. Perceivable
  - Text Alternatives : Add descriptive alt text to images so screen readers can convey the information.
  - Time-based Media : Provide captions for videos to assist users who are deaf or hard of hearing.
  - Adaptable Content : Use proper HTML headings to maintain structure when styles are disabled.
  - Distinguishable : Ensure sufficient color contrast between text and background.
  :::

  ::: details 2. Operable
  - Text Alternatives : Add descriptive alt text to images so screen readers can convey the information.
  - Enough Time : Allow users to extend session timeout on forms.
  - Seizures and Physical Reactions : Don’t use flashing content that blinks more than 3 times per second.
  - Navigable : Use clear headings and skip links for easier navigation.
  - Input Modalities : Make buttons large enough to tap on a touchscreen.
  :::

  ::: details 3. Understandable
  - Readable : Use short sentences and common words.
  - Predictable : Allow users to extend session timeout on forms.
  - Input Assistance : Show an error message when a form field is incorrect.
  :::

  ::: details 4. Constrast Ratios
  - Contrast (Minimum) – Level AA
    - Regular text must have a contrast ratio of at least 4.5:1 against the background.
    - Large text (18pt or 14pt bold) must have a contrast ratio of at least 3:1.
  - Contrast (Enhanced) – Level AAA
    - Regular text: contrast ratio of at least 7:1.
    - Large text: contrast ratio of at least 4.5:1.
  - Non-text Contrast – Level AA
    - Visual elements like buttons and icons must have a contrast ratio of at least 3:1 against adjacent colors.
  :::

  ::: details 5. Text Presentation
  - Resize Text – Level AA : Text must be resizable up to 200% without loss of content or functionality.
  - 1.4.12 Text Spacing – Level AA : No loss of content or functionality when users set the following spacing:
      - Line height (line spacing): at least 1.5 times the font size.
      - Spacing after paragraphs: at least 2 times the font size.
      - Letter spacing (tracking): at least 0.12 times the font size.
      - Word spacing: at least 0.16 times the font size.
  :::

  ::: details 6. Additional Recommendations
  - Font sizes : WCAG does not specify minimum font sizes, but at least 16px is commonly recommended for body text.
  - Touch targets : For interactive elements, use a minimum target size of 24x24 CSS pixels.
  :::
