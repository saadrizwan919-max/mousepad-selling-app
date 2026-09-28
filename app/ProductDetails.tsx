import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useReducer, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import sections,{cartData} from '@/Data/data'
import Toast from 'react-native-toast-message';

const ProductDetails = () => {
 
  const param =useLocalSearchParams<{id:string, theme:string}>();
  const product = sections.find(sec=>sec.title===param.theme)?.data.find(da=>da.id===param.id);
  const [selectedSize, setSelectedSize]= useState('S');
  const [sizePrice, setSizePrice]= useState(product?.price);
  const [, forceUpdate] = useReducer(x=> x+1,0);

  

  const handleAddToCart =()=>{
      if(!product) return;
      const existing = cartData.find(ctItem=> ctItem.id === product?.id && ctItem.theme === product?.theme && ctItem.size === selectedSize)
      if(existing){
         existing.quantity +=1;
      }
      else{
        
          cartData.push({id:product?.id, theme:product?.theme, image:product?.image, name:product?.name, price:sizePrice, size:selectedSize,  quantity:1});
      
     }
     console.log(cartData);
     forceUpdate();

     Toast.show({ type:'snackbar', text1:'Item added to cart', text2: `${product.name} (${selectedSize})`, position:'bottom', visibilityTime:2000})
    
  };
  
  const handleSizeOnPress = (value:string, price:number)=>{
      setSelectedSize(value)
      setSizePrice(price);
  }
  if(!product)
  return (
    <View>
      <Text>Product not found</Text>
    </View>
  )
  else{
    return(
      <View className='flex-1'>
      <View className=' items-center mb-16 '>
        <Text className='text-3xl font-bold mt-2'>{product.name}</Text>
        <Image style={{height:450, width:390,}}
        source={product.image} resizeMode='contain'/>
      </View>
        <View className=' items-center bg-gray-300 rounded-tl-xl rounded-tr-xl h-80'>
          <Text className='text-3xl font-semibold mt-7 mb-5'>$ {sizePrice}</Text>
          <View className='flex-row gap-6 mb-7'>
            {product.size.map((val,index)=>(
              <TouchableOpacity
               key={index}
               activeOpacity={0.7}
               onPress={()=>handleSizeOnPress(val.value, val.price)}
               className={`rounded-lg px-6 py-2  ${selectedSize === val.value ? 'bg-yellow-400': 'bg-gray-400'}`}
              >
                <Text>{val.value}</Text>
              </TouchableOpacity>
            ))}
            
          </View>
          <TouchableOpacity className='bg-yellow-400 w-96 items-center rounded-xl py-3'
            activeOpacity={0.7}
            onPress={handleAddToCart}
            >
              <Text className='text-2xl'>Add To Cart</Text>
            </TouchableOpacity>
        </View>
      </View>
      
    )
  }
}

export default ProductDetails