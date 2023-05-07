import { Colors, Shadows } from '../styles'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import * as Icons from 'react-native-heroicons/outline'

export function PageTitle(title: string) {
    const handlePress = {
        notifications: () => {
            console.log(title)
        }
    }

    return (
        <View style={[styleSheet.container,styleSheet.shadow]}>
            <TouchableOpacity style={styleSheet.item} onPress={handlePress.notifications}>
                <Icons.ClipboardDocumentListIcon size={30}/>
            </TouchableOpacity>
        </View>
    )
}

const styleSheet = StyleSheet.create({
    item: {

    },
    container: {
        marginTop: 20,
        backgroundColor: Colors.white,
        height: 60,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadow: Shadows.default
})