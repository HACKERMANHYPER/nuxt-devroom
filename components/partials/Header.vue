<template>
    <div class="flex gap-4 w-full md:mt-5 pl-5">
        <!-- <NuxtLink class="hidden md:flex w-15 " to="/"> -->
            <img class="w-20" src="\public\blitz.svg"/>
        <!-- </NuxtLink> -->
        <UHorizontalNavigation :links="links" class="md:-ml-10 h-[2.9rem] w-[90%] border-b border-gray-800" />
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()

    const links = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    // to: `${route.path.startsWith('/pages') ? '/pages' : ''}/`
    }, {
    label: 'Calculator',
    icon: 'i-heroicons-calculator',
    badge: 'NEW',
    // to: `${route.path.startsWith('/pages') ? '/pages' : ''}/elements/page_calculator`
    }]
</script>

<style scoped>

</style>