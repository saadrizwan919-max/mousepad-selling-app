import '../../global.css';
import { View, Text, TouchableOpacity, ScrollView, SectionList, Image } from 'react-native'
import { useState } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import sections,{Title, dataProp } from '../../Data/data';
import {useRouter} from 'expo-router';

const index = () => {
  const router=useRouter();
  const [selectedTitle, setSelectedTitle]= useState<string>('All');

  
  const title=Title;
  const filteredSections = selectedTitle === 'All'
    ? sections
    : sections.filter((section) => section.title === selectedTitle);

  const handleSelectedItem = (item:string) =>{
    setSelectedTitle(item)
  
  }

  const handleProductOnPress = (item:dataProp)=>{
      router.push({
        pathname: '/ProductDetails',
        params: {id: item.id, theme: item.theme}
      })
  }

  const HandleRenderItem = ({item}:{item:dataProp})=>{
    return (
      <TouchableOpacity
       activeOpacity={0.8}
       key={item.id}
      >
      <View className='items-center'>
      <View className=' mt-3 bg-gray-300 px-3 pb-3 rounded-lg'>
  
        <Text className='text-2xl text-black'>{item.name}</Text>
        <Text className='pb-3'>{item.price}</Text>
        
        <TouchableOpacity onPress={() => handleProductOnPress(item)} activeOpacity={0.8}>
          <Image
          source={item.image}
          resizeMode='contain'
          style={{width:350, height:350, borderRadius:10}}
          />
        </TouchableOpacity>
     
      </View>
      </View>
      </TouchableOpacity>
      
    )

  }
  return (
    
    <SafeAreaView style={{flex:1}}>   
      

        <View className='flex-row items-center mb-3'>
          <Text className='text-4xl text-black font-bold'> Mouse{"\n"} Collection</Text>
          <View className=' ml-2 p-3  border-black  bg-white border-2 rounded-l-full flex-row justify-start pl-2 items-center flex-1'>
            <Ionicons name='search' size={24} color='black'/>
            <Text className='text-xl text-black font-semibold '>Search</Text></View>
        </View>
          
          
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 8}}
            className='mb-1'
          >
           <View className='flex-row gap-2'>
         {title.map((val,index)=>(
          <TouchableOpacity 
          className={`justify-center items-center rounded-xl px-4 py-3 min-w-16 min-h-12 ${selectedTitle === val ? 'bg-yellow-400': 'bg-gray-200'}`}
         
          key={index}
          
          onPress={()=> handleSelectedItem(val)}
          >
            
          <Text numberOfLines={1} className='text-xl text-black'>{val}</Text>
          
          </TouchableOpacity>
           ))}
           </View>
           </ScrollView>

           <SectionList
            sections={filteredSections  }
            keyExtractor={(item)=>item.id}
            renderItem={HandleRenderItem}
            renderSectionHeader={()=>null}
           />



           
 
          
     
    </SafeAreaView>
    

  )
}

export default index