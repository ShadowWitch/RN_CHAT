import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'


interface Props {
    title?: string;
}

export const LoadingScreen = ({ title = 'Cargando' }: Props) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        }}>
            <Text
                style={{
                    marginBottom: 10
                }}
            >{title}...</Text>
            <ActivityIndicator size={45} color={"#5856D6"} />
        </View>
    )
}
