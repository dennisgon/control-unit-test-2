import MenuView from './View/MenuView.vue'
import LoginView from './View/LoginView.vue'

export const routes = [
    {path: '/menu/:category', component:MenuView},
    {path: '/', component:LoginView}
];