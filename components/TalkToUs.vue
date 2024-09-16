<template>
  <section class="py-28 bg-dark text-white" id="talktous" data-aos="fade-up">
    <div class="container">
      <div class="row">
        <div class="col md:w-8/12 text-center mx-auto">
          <h2 class="font-semibold mb-3 text-purple-400">
            Ready to Transform Your Organization?
          </h2>
          <h5 class="mb-4">
            Discover how AI can elevate your organization.Contact us now
          </h5>
          <div
            class="inline-flex flex-col md:flex-row justify-center gap-x-2 gap-y-3 mb-3"
          >
            <a
              class="btn btn-primary btn-lg"
              href="mailto:hello@suadigital.my"
              data-aos="fade-left"
              >Email Us
            </a>
            <button
              class="btn btn-lg bg-green-500"
              @click="openWhatsApp"
              data-aos="fade-right"
            >
              Whatsapp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const openWhatsApp = () => {
  const phoneNumber = "+60197645074"; // Replace this with your actual phone number in international format without '+'
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, "_blank");
};
</script>
