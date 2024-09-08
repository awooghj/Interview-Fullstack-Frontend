import { createRouter, createWebHistory } from 'vue-router';
import VotesView from '@/views/VotesView.vue';
import VoteView from '@/views/VoteView.vue';
import AddVoteView from '@/views/AddVoteView.vue';
import EditVoteView from '@/views/EditVoteView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'votes',
      component: VotesView,
    },
    {
      path: '/votes/:id',
      name: 'vote',
      component: VoteView,
    },
    {
      path: '/votes/add',
      name: 'add-vote',
      component: AddVoteView,
    },
  ],
});

export default router;