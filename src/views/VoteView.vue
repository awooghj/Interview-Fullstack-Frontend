<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import axios from 'axios';

const form = reactive({
  voteId: '',
  voterName: ''
});
const route = useRoute();
const router = useRouter();

const voteId = route.params.id;

const state = reactive({
  vote: {},
  isLoading: true,
});

const handleSubmit = async () => {
  const newVote = {
    voteId: state.vote.id,
    voterName: form.voterName
  };

  try {
    const response = await axios.post('http://localhost:8080/api/votes/support', null, {
        params: newVote
    });
    router.push(`/votes/${state.vote.id}`);
  } catch (error) {
    console.error('Error fetching vote', error);
  }
};

const deleteVote = async () => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this vote?');
    if (confirm) {
      await axios.post(`http://localhost:8080/api/votes/items/${voteId}`);
      router.push('/');
    }
  } catch (error) {
    console.error('Error deleting vote', error);
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/votes/items/${voteId}`);
    state.vote = response.data;
    console.log(state.vote)
  } catch (error) {
    console.error('Error fetching job', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section v-if="!state.isLoading" class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Vote Description
            </h3>

            <p class="mb-4">
              {{ state.vote.name }}
            </p>

            <p class="mb-4">
              {{ state.vote.voteRecords }}
            </p>

            <div>

            </div>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <button
              @click="deleteVote"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete vote
            </button>
          </div>


          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <form @submit="handleSubmit">
              <div class="mb-4">
                <label for="description" class="block text-gray-700 font-bold mb-2"
                  >Voter's Name: </label
                >
                <textarea
                  id="description"
                  v-model="form.voterName"
                  name="description"
                  class="border rounded w-full py-2 px-3"
                  rows="1"
                  placeholder="Please fill in your name to vote"
                ></textarea>
              </div>
              <div>
                <button
                  class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Support
                </button>
              </div>
            </form>
          </div>




        </aside>
        
      </div>
    </div>
  </section>

</template>