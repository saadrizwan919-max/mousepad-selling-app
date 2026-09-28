import {Stack} from 'expo-router'
import  Toast from 'react-native-toast-message';
import ToastConfig from '@/config/utils/ToastConfig';

const Layout = () => {
  return (
    <>
   <Stack>
    <Stack.Screen name= '(tabs)' options={{headerShown:false}}/>
    <Stack.Screen name='ProductDetails' options={{headerTitleAlign:'center'}}/>
   </Stack>
    <Toast config={ToastConfig}/>
   </>
  )
}

export default Layout