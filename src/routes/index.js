import Contact from "~/pages/Contact/Contact"
import Home from "~/pages/Home/Home"
import Service from "~/pages/Service/Service"
import About from "~/pages/About/About"

const publicRouter = [
    {path: '/', component: Home},
    {path: '/services', component: Service},
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
]

const privateRouter = [

]

export { publicRouter, privateRouter }