<script setup>
import router from '@/router';
import { reactive } from 'vue';
import axios from 'axios';

const form = reactive({
  name: '',
});

const handleSubmit = async () => {
  const newVote = {
    name: form.name,
  };

  try {
    const response = await axios.post('http://localhost:8080/api/votes/items', null, {
        params: newVote
    });
    router.push(`/votes/${response.data.id}`);
  } catch (error) {
    console.error('Error fetching vote', error);
  }
};
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Vote</h2>

          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              v-model="form.name"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
            ></textarea>
          </div>

          <h3 class="text-2xl mb-5">Company Info</h3>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Vote
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>