<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <div class="overflow-x-hidden">
    <TheNav />
    <slot />
    <TheFooter />
  </div>
  <SpeedInsights />
</template>
