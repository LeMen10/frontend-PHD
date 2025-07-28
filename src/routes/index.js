import Contact from "~/pages/Contact/Contact"
import Home from "~/pages/Home/Home"
import About from "~/pages/About/About"

const publicRouter = [
    {path: '/', component: Home},
    {path: '/contact', component: Contact},
    {path: '/about', component: About},
]

const privateRouter = [

]

export { publicRouter, privateRouter }