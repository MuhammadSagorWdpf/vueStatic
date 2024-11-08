import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ServicesPage from '../components/ServicesPage.vue';
import ContactPage from '../components/ContactPage.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';


const routes = [
	
	{ path: "/", component: HomePage },
	{ path: "/about", component: AboutPage },
	{ path: "/services", component: ServicesPage},
	{ path: "/contact", component: ContactPage},
	{ path: "/signin", component:SignIn},
	{ path: "/signup", component:SignUp},

];

const router = createRouter({

	history: createWebHistory(),
	routes,
});

export default router;