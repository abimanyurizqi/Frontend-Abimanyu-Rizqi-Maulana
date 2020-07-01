import {Home} from '../screens/home'
import {Main} from '../components/TabNavigator'
import {ContactDetails} from '../screens/contact'
import {AddContact} from '../screens/add'
import {Contact} from '../screens/contact'
import SplashScreen from '../screens/Splash/SplashScreen'



export const routes = [
    {name: "Splash", component: SplashScreen},
    {name: "Main", component: Main},
    {name: "ContactDetail", component: ContactDetails},
    {name: "Contact", component: Contact},
    {name: "AddContact", component: AddContact},
    
];