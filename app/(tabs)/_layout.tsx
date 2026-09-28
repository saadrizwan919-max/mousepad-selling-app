import {Tabs} from 'expo-router';
import  Ionicons  from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'#F4C726', }}>
        <Tabs.Screen 
        name='index'
        options={{
            title:'Home',
            tabBarIcon: ({color})=> <Ionicons name='home' size={28} color={color}/>,
            headerShown:false,
           
        }}
        />

        <Tabs.Screen
         name='Cart'
         options={ {
            title: 'Cart',
            tabBarIcon: ({color}) => <Ionicons name='cart' size={28} color={color}/>,
             headerTitleAlign:'center',
             tabBarLabelStyle:{
                marginLeft:4,
             }
         }
         }
        />

    </Tabs>
  )
}

export default TabLayout