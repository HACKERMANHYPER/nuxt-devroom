<template>
    <div class="flex h-11 gap-4 w-full mt-5 pl-5">
        <img class="" src="\public\blitz.svg"/>
        <UHorizontalNavigation :links="links" class="w-full border-b border-hd-white dark:border-gray-800" />
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()

    const links = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
    }, {
    label: 'Calculator',
    icon: 'i-heroicons-calculator',
    to: `${route.path.startsWith('/pages') ? '/pages' : ''}/elements/page_calculator`
    }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
    }]
</script>

<style scoped>

</style>