import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './components/Homepage.vue';
import Services from './components/Services.vue';
import About from './components/About.vue';
import Gallery from './components/Gallery.vue';
import Reviews from './components/Reviews.vue';
import Contact from './components/Contact.vue';
import Account from './components/Account.vue';
import Log from './components/Log.vue';
import Sign from './components/Sign.vue';
import Appointment from './components/Appointment.vue';

const routes = [
  { path: '/', component: Homepage },
  { path: '/services', component: Services },
  { path: '/about', component: About },
  { path: '/gallery', component: Gallery },
  { path: '/reviews', component: Reviews },
  { path: '/contact', component: Contact },
  { path: '/account', component: Account },
  { path: '/log', component: Log },
  { path: '/sign', component: Sign },
  { path: '/appointment', component: Appointment },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
