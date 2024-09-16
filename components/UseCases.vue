<template>
  <section class="py-12 md:py-16 lg:py-24" id="usecases" data-aos="fade-up">
    <div class="container">
      <!--heading  -->
      <div class="row mb-8 md:mb-16">
        <div class="col md:w-3/12">
          <h2 class="display-4 mb-4">Use Cases</h2>
        </div>
        <div class="col md:w-9/12">
          <p class="mb-0 text-lg font-medium text-muted">
            There are numerous examples of how AI can deliver significant
            benefits across various organizations and businesses. From enhancing
            customer service and operational efficiency to streamlining public
            services and boosting sales.
          </p>
        </div>
      </div>

      <!-- content -->
      <div class="relative p-8 bg-neutral-100 rounded-xl md:p-12">
        <!-- TABS -->
        <ul class="tab-list inline-flex gap-4 mb-12 lg:mb-20" role="tablist">
          <li role="presentation">
            <button
              class="btn text-primary font-normal btn-lg border border-primary-500"
              :class="{ active: selectedTab === 'government' }"
              @click="selectTab('government')"
              type="button"
              role="tab"
            >
              Government Services & Public Sector
            </button>
          </li>
          <li role="presentation">
            <button
              class="btn text-primary font-normal btn-lg border border-primary-500"
              :class="{ active: selectedTab === 'customerService' }"
              @click="selectTab('customerService')"
              type="button"
              role="tab"
            >
              Customer Service in SMEs
            </button>
          </li>
          <li role="presentation">
            <button
              class="btn text-primary font-normal btn-lg border border-primary-500"
              :class="{ active: selectedTab === 'salesMarketing' }"
              @click="selectTab('salesMarketing')"
              type="button"
              role="tab"
            >
              Sales and Marketing Support
            </button>
          </li>
        </ul>

        <!-- CONTENT -->
        <div class="tab-content" role="tabcontent">
          <!-- GOVERMENT -->
          <div
            class="tab-pane"
            v-if="selectedTab === 'government'"
            role="tabpanel"
          >
            <div class="row gap-y-8">
              <div class="col lg:w-6/12">
                <h2 class="h2 mb-5 md:mb-6 lg:mb-8">
                  Optimizing Public Services With AI
                </h2>
                <p class="mb-5 text-lg font-medium text-muted md:mb-6 lg:mb-8">
                  AI-powered chatbots enhance the efficiency of government
                  services by providing immediate responses to citizen
                  inquiries. From applying for permits to reporting issues,
                  citizens can access vital information quickly, improving
                  engagement and reducing wait times.
                  <br />
                  <br />
                  By automating standard processes, government agencies can
                  reduce costs and enhance service delivery, ultimately creating
                  a more responsive governance structure for citizens.
                </p>
              </div>
              <div class="col lg:w-6/12">
                <div
                  class="relative overflow-clip rounded-2xl md:h-[32rem] w-full"
                >
                  <img
                    class="w-full h-full object-cover grayscale"
                    src="/public/img/usecase-smile.jpg"
                    loading="lazy"
                    alt=""
                    width="950"
                    height="1309"
                  />
                  <div
                    class="absolute left-0 top-0 right-auto bottom-0 bg-primary w-24 md:w-16 mix-blend-multiply"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- CUSTOMER SERVICES -->
          <div
            class="tab-pane"
            v-show="selectedTab === 'customerService'"
            role="tabpanel"
          >
            <div class="row gap-y-8">
              <div class="col lg:w-6/12">
                <h2 class="h2 mb-5 md:mb-6 lg:mb-8">
                  Enhancing Customer Experience in SMEs
                </h2>
                <p class="text-lg font-medium mb-5 md:mb-6 lg:mb-8">
                  Small and medium-sized enterprises can significantly improve
                  customer service through the use of AI chatbots. These bots
                  provide instant support, addressing common customer inquiries
                  like product availability, pricing, and order tracking without
                  the need for human intervention.
                  <br />
                  <br />
                  This leads to faster response times, smoother customer
                  interactions, and increased customer satisfaction, freeing up
                  resources for employees to focus on complex tasks.
                </p>
              </div>
              <div class="col lg:w-6/12">
                <div
                  class="relative overflow-clip rounded-2xl md:h-[32rem] w-full"
                >
                  <img
                    class="w-full h-full object-cover grayscale"
                    src="/public/img/usecase-meet.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 right-auto bottom-0 bg-primary w-24 md:w-16 mix-blend-multiply"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- SALES -->
          <div
            class="tab-pane"
            v-show="selectedTab === 'salesMarketing'"
            role="tabpanel"
          >
            <div class="row gap-y-8">
              <div class="col lg:w-6/12">
                <h2 class="h2 mb-5 md:mb-6 lg:mb-8">
                  Driving Sales Growth with AI
                </h2>
                <p class="text-lg font-medium mb-5 md:mb-6 lg:mb-8">
                  AI chatbots are pivotal in boosting sales and marketing
                  efforts by efficiently qualifying leads and providing
                  personalized product recommendations. They can engage with
                  customers across various platforms, enhancing the overall
                  marketing strategy.
                  <br />
                  <br />
                  With the ability to follow up on leads and re-engage potential
                  customers through automated messages, businesses can increase
                  conversion rates while minimizing manual workload.
                </p>
              </div>
              <div class="col lg:w-6/12">
                <div
                  class="relative overflow-clip rounded-2xl md:h-[32rem] w-full"
                >
                  <img
                    class="w-full h-full object-cover grayscale"
                    src="/public/img/usecase-client.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 right-auto bottom-0 bg-primary w-24 md:w-16 mix-blend-multiply"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Reactive state to track the selected tab
const selectedTab = ref("government");

// Method to switch tabs
const selectTab = (tab: string) => {
  selectedTab.value = tab;
};
</script>

<style scoped>
/* Add any relevant CSS styles here */
.active {
  @apply text-white bg-primary;
}
</style>
