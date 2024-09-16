<template>
  <nav class="navbar sticky top-0 bg-white" id="navbar">
    <div class="container flex justify-between items-center mx-auto p-2">
      <a class="navbar-brand flex items-center" href="/">
        <img
          class="h-8 mr-2"
          alt="SUA DIGITAL logo"
          src="/public/img/logo.png"
        />
        <span class="text-primary font-bold">
          SUA <span class="text-black">DIGITAL</span>
        </span>
      </a>

      <!-- burger menu for mobile, only visible on small screens -->
      <button
        @click="toggleMenu"
        class="block lg:hidden"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="sr-only">Open navbar menu</span>
        <span
          class="block h-1 w-6 rounded-full bg-primary mb-1 transition-all duration-500 ease-in-out transform"
          :class="{ 'rotate-45 translate-y-2': isOpen }"
        ></span>
        <span
          class="block h-1 w-6 rounded-full bg-primary mb-1 transition-all duration-500 ease-in-out"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span
          class="block h-1 w-6 rounded-full bg-primary transition-all duration-500 ease-in-out transform"
          :class="{ '-rotate-45 -translate-y-2': isOpen }"
        ></span>
      </button>

      <!-- navigation for desktop -->
      <div class="hidden lg:flex space-x-8 md:items-center">
        <a
          href="#services"
          class="hover:text-primary transition-colors duration-300"
          >Our Services</a
        >
        <a
          href="#usecases"
          class="hover:text-primary transition-colors duration-300"
          >Use Cases</a
        >
        <a
          class="btn btn-dark bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors duration-300"
          href="#talktous"
        >
          Contact Us!
        </a>
      </div>
    </div>

    <!-- navigation for mobile -->
    <div
      v-show="isOpen"
      class="lg:hidden transition-all duration-500 ease-in-out"
    >
      <ul class="flex flex-col items-center space-y-4 bg-white p-4">
        <li>
          <a
            href="#services"
            class="hover:text-primary transition-colors duration-300"
            >Our Services</a
          >
        </li>
        <li>
          <a
            href="#usecases"
            class="hover:text-primary transition-colors duration-300"
            >Use Cases</a
          >
        </li>
        <li>
          <a
            class="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors duration-300"
            href="#talktous"
          >
            Contact Us!
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup="ts">
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.navbar {
  @apply w-full shadow-sm;
}

.navbar-brand span.text-primary {
  @apply text-xl font-bold;
}
</style>
