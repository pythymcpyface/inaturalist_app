<template>
  <div class="container mx-auto max-w-8xl">
    <AppHeader />
    <div class="flex flex-col">
      <main class="p-2 mt-10">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
body, .highcharts-background {
  @apply fill-white dark:fill-gray-900 !important;
}

text {
  @apply dark:fill-white fill-gray-900 !important;
}


</style>
