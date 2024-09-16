<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>

<template>
  <TheNav />
  <div class="overflow-x-hidden">
    <slot />
    <TheFooter />
  </div>
  <SpeedInsights />
</template>
