
import { Text, View } from 'react-native';
import {BaseToastProps} from 'react-native-toast-message';


const ToastConfig = {
    snackbar : ({text1,text2}:BaseToastProps)=>(
        <View 
            style={{
                backgroundColor:'#323232',
                borderRadius:8,
                paddingVertical:10,
                paddingHorizontal:16,
                marginHorizontal:16,
                width:'92%',
                minHeight:0,
            }}
        >
            <Text style={{color:'#fff', fontSize:14, fontWeight:'500'}}>{text1}</Text>
            {text2 ? (<Text style={{color:'#ccc', fontSize:12, marginTop:2}}>{text2}</Text>) : null}
            
        </View>
    )
};

export default ToastConfig;