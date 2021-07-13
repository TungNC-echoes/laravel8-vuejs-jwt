import EditUser from './components/EditUserComponent.vue';
import Login from './components/LoginComponent.vue';

export const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditUser
    }
];
