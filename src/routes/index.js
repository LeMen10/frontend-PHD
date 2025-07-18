import Contact from "~/pages/Contact/Contact"
import Home from "~/pages/Home/Home"
import Service from "~/pages/Service/Service"

const publicRouter = [
    {path: '/', component: Home},
    {path: '/services', component: Service},
    {path: '/contact', component: Contact},
]

const privateRouter = [

]

export { publicRouter, privateRouter }