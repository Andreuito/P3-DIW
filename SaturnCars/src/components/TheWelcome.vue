<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
    <div class="welcome">
        <WelcomeItem
        icon="DocumentationIcon"
        title="Documentation"
        description="Find in-depth information about Vue.js features and API."
        link="https://v3.vuejs.org/guide/introduction.html"
        />
        <WelcomeItem
        icon="ToolingIcon"
        title="Tooling"
        description="Discover development tools for Vue.js such as Vue CLI, Babel, TypeScript, PWA, Unit Testing and more."
        link="https://v3.vuejs.org/guide/tooling/introduction.html"
        />
        <WelcomeItem
        icon="EcosystemIcon"
        title="Ecosystem"
        description="Explore the Vue ecosystem and find libraries for your specific needs."
        link="https://v3.vuejs.org/guide/ecosystem/introduction.html"
        />
        <WelcomeItem
        icon="CommunityIcon"
        title="Community"
        description="Get support from the Vue community on forums, chat, and social media."
        link="https://v3.vuejs.org/guide/community/introduction.html"
        />
        <WelcomeItem
        icon="SupportIcon"
        title="Support"
        description="Get support from the Vue community on forums, chat, and social media."
        link="https://v3.vuejs.org/guide/support-vuejs.html"
        />
    </div>
</template>

