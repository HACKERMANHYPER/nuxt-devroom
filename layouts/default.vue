<template>
      <PartialsHeader/>
      <div class="min-h-[85vh] md:min-h-[75vh] lg:min-h-[75vh] xl:min-h-[75vh]">
        <slot />
      </div>
      <PartialsFooter/>
</template>


<style>
/* TODO fix this with better practice */
body {
  @apply bg-gray-900;
  font-family: Roboto;
}
</style>