<script setup>
import VoteListing from './VoteListing.vue';
import { reactive, defineProps, onMounted } from 'vue';
import axios from 'axios';


defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
const state = reactive({
  votes: [],
  isLoading: true,
});

// onMounted(async () => {
//   try {
//     const response = await fetch('http://localhost:8080/api/votes/items');
//     const data = await response.json();
//     votes.value = data.map((vote) => vote);
//   } catch (error) {
//     console.log('Error fetching tasks');
//   }
// });
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/votes/items');
    state.votes = response.data;
    console.log(state.votes)
  } catch (error) {
    console.error('Error fetching votes', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <VoteListing
          v-for="vote in state.votes"
          :key="vote.id"
          :vote="vote"
        />
      </div>
</template>