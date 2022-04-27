import { createWebHistory, createRouter } from "vue-router";
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Majors from '@/pages/Majors.vue'
import Upload from '@/pages/Upload.vue'

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    }, 
    {
    path: "/About",
    name: "About",
    component: About,
    },
    {
        path: "/Majors",
        name: "Majors",
        component: Majors,
    },
    {
        path: "/Upload",
        name: "Upload",
        component: Upload,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;