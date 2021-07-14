import UserProfile from './components/UserProfileComponent.vue';
import Login from './components/LoginComponent.vue';
import Welcome from './components/WelcomeComponent.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'user-profile',
        path: '/user-profile',
        component: UserProfile,
        meta: {
            requiresAuth: true
        }
    }
];
