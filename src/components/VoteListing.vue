<script setup>
import { defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  vote: Object,
});

const showFullDescription = ref(false);

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ vote.id }}</div>
        <h3 class="text-xl font-bold">{{ vote.name }}</h3>
      </div>

      <h3 class="text-green-500 mb-2">{{ vote.voteRecords.length }} people support this vote</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-map-marker text-orange-700"></i>
          {{ vote.location }}
        </div>
        <RouterLink
          :to="'/votes/' + vote.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Check Vote Content
        </RouterLink>
      </div>
    </div>
  </div>
</template>