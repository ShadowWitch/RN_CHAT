import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackScreenProps } from "@react-navigation/stack";

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation, route }: Props) => {
    return (
        <View>
            <Text>LoginScreen</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('MainApp')}
            >
                <Text>Ir a...</Text>
            </TouchableOpacity>
        </View>
    )
}
