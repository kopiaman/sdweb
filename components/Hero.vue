<script setup lang="ts">
import Typed from "typed.js";

const typedElement = ref(null);

onMounted(() => {
  const options = {
    strings: [
      "hutang kredit kad?",
      "hutang pinjaman peribadi?",
      "hutang rumah?",
      "hutang kereta?",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  };

  new Typed(typedElement.value, options);
});
</script>

<template>
  <section class="py-28" id="header">
    <div class="container">
      <div class="row justify-center">
        <div class="col lg:w-9/12 text-center md:w-10/12">
          <h1 class="display-4 mb-6 font-semibold text-dark">
            Anda dah serabut dengan<span class="block text-secondary">
              <span class="inline-block" ref="typedElement"
                >hutang & komitmen yang tinggi?</span
              >
            </span>
          </h1>
          <p class="font-light mb-10 h5">
            Hutang Kereta? Pinjaman Peribadi? Hutang Kredit Kad? Insyallah kami
            boleh bantu anda 'settlekan'!
          </p>
          <div
            class="flex flex-col md:flex-row justify-center gap-x-2 gap-y-3 mb-3"
          >
            <meta charset="utf-8" />
            <a
              class="btn btn-primary btn-lg"
              id=""
              href="https://forms.gle/Yfpf5vpDb16VhJaQ9"
              target="_blank"
              data-eventid="signup"
              >Saya nak sertai!</a
            >
            <a
              class="btn btn-lg btn-ghost btn-primary"
              href="/#testimonialHeader"
              id=""
              >Lihat Testimoni</a
            >
          </div>
          <p class="block mb-4 text-sm text-muted">
            Tiada deposit diperlukan. Jaminan wang dikembalikan
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
