import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { useCallback, useReducer } from 'react'
import {cartData, CartDataProp} from '../../Data/data'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from 'expo-router';
import Toast from 'react-native-toast-message';

const Cart = () => {

  const [, forceUpdate]= useReducer(x=>x+1,0);
   
  useFocusEffect(
    useCallback(()=>{
      forceUpdate();
    },[])
  )
  const handleDeleteItem =(id:string, size:string)=>{
    const existing = cartData.find(item=> item.id === id && item.size === size);

    if(existing && existing.quantity >1){
      existing.quantity -=1;
    } else {
      const index = cartData.findIndex(item=> item.id === id && item.size === size);
      if(index !== -1){
        cartData.splice(index,1);
      }
      
    }
    forceUpdate();
    Toast.show({type:'snackbar', text1:'Item deleted from the cart', text2:`${existing?.name} (${existing?.size})`, position:'bottom', visibilityTime:2000})
  }
  const renderItem=({item}:{item:CartDataProp})=>{

    return(
      
      <View className=' w-11/12 m-3 flex-row items-center justify-between'>
        <View className='flex-row items-center'>
        <Image
        source={item.image}
        resizeMode='cover'
        style={{height:64, width:64, borderRadius:20}}
        />
        <View className=' ml-2'>
        <Text className='text-xl font-semibold'>{item.name}</Text>
        
        <Text className='text-gray-500'>Size: {item.size}</Text>
        <Text className='text-gray-500'>Quantity: {item.quantity}</Text>
        </View>
        </View>
        <TouchableOpacity activeOpacity={0.9} onPress={()=>handleDeleteItem(item.id,item.size)}>
        <Ionicons name='trash-outline' size={25} color={'red'}/>
        </TouchableOpacity>
        
        
      </View>
    )
  }
    return (
  <View className='flex-1 items-center justify-center'>
    {cartData.length === 0 ? (
      <Text>Your cart is empty Add Item :D</Text>
    ) : (
      <FlatList
        data={cartData}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}-${item.size}`}
      />
    )}
  </View>
);
  
}

export default Cart