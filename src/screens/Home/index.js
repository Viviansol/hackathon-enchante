import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { Container, SingInput, CustomButton, InputArea, CustomButtonText, SignMessageButton, SignMessageButtonText } from './styles'



export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(){
        navigation.navigate('Home');
    }

   


    return (



        <Container>
            <Text>É bom te ver novamente</Text>
            <Text> Insira seu email e senha</Text>
            <InputArea>
                <SingInput />
                <SignInput />
                <CustomButton>
                    <CustomButtonText onPress={() => navigation.navigate('Home')} >Login</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta? Registrar</SignMessageButtonText>

            </SignMessageButton>
        </Container>
    )

}