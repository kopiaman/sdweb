<template>
  <section class="bg-neutral-200 py-28" id="services">
    <div class="container">
      <!-- heading -->
      <div class="row mb-8 md:mb-16">
        <div class="col md:w-4/12">
          <h2 class="display-4 mb-4">Our Services</h2>
        </div>
        <div class="col md:w-8/12">
          <p class="mb-0 text-lg font-medium text-muted">
            We leverage latest AI tools and provide solutions to empower
            government entities and SMEs. Our services are designed to
            streamline operations, enhance customer engagement, and enable
            data-driven decision-making.
          </p>
        </div>
      </div>

      <!-- content -->
      <div class="grid md:grid-cols-3 gap-x-10 gap-y-8">
        <!-- AI -->
        <div
          data-aos="fade-left"
          class="group flex flex-col gap-4 items-start bg-white p-8 rounded-2xl"
        >
          <fa-icon icon="robot" class="text-4xl text-primary-700"></fa-icon>
          <h3 class="h4 md:mt-4 mb-0">AI Strategy Consulting</h3>
          <p class="text-lg font-medium mb-0 text-muted">
            Develop tailored AI strategies that align with your organization's
            goals. Our team assesses your unique challenges and crafts roadmaps
            that integrate AI technologies effectively.
          </p>
        </div>

        <!-- DIgitlization -->
        <div
          data-aos="fade-up"
          class="group flex flex-col gap-4 items-start bg-white p-8 rounded-2xl"
        >
          <fa-icon icon="file-alt" class="text-4xl text-primary-700"></fa-icon>
          <h3 class="h4 md:mt-4 mb-0">Digitalization Transformation</h3>
          <p class="text-lg font-medium mb-0 text-muted">
            Transition to a paperless environment with our digitalization
            solutions. Streamline document workflows and enhance productivity.
          </p>
        </div>

        <!-- WEB MOBILE SOLUTIONS -->
        <div
          data-aos="fade-right"
          class="group flex flex-col gap-4 items-start bg-white p-8 rounded-2xl"
        >
          <fa-icon
            icon="laptop-code"
            class="text-4xl text-primary-700"
          ></fa-icon>
          <h3 class="h4 md:mt-4 mb-0">Web & Mobile Solutions</h3>
          <p class="text-lg font-medium mb-0 text-muted">
            Design and build user-friendly web and mobile applications that
            seamlessly integrate with your existing systems.
          </p>
        </div>

        <!-- end grid -->
      </div>
    </div>
  </section>
</template>
