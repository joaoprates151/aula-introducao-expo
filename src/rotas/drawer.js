import { createDrawerNavigator } from '@react-navigation/drawer'

import Atividades from '../atividades/index'
import Sobre from '../sobre';

const DrawerNavigation = createDrawerNavigator();

export default function Drawer()
{
    return(
        DrawerNavigation
    )
}



