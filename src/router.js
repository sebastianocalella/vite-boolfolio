import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ProjectPage from './pages/ProjectPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        },
        {
            path: '/Projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/Projects/:slug',
            name: 'project',
            component: ProjectPage
        },
    ]
});

export { router };