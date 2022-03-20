import { useNavigation } from '@react-navigation/native'
import {React, useEffect} from 'react'
import { Text } from 'react-native'
import { Container } from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                
                    

                    } else {
                    navigation.navigate('SignIn');
                }
           
        }
        checkToken();
    }, []);

    return (


        <Container>
        <Text>Ministra</Text>
    </Container>


    )

}