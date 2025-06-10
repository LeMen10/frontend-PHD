// import Message from "~/pages/Message/Message"
import Contact from "~/pages/Contact/Contact"
import Home from "~/pages/Home/Home"
import Login from "~/pages/Login/Login"
import SearchResults from "~/pages/SearchResults/SearchResults"
import Service from "~/pages/Service/Service"

const publicRouter = [
    {path: '/login', component: Login, layout: null},
    {path: '/', component: Home},
    {path: '/service', component: Service},
    {path: '/search', component: SearchResults},
    {path: '/contact', component: Contact},
]

const privateRouter = [

]

export { publicRouter, privateRouter }