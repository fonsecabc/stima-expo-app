import { Colors, Shadows } from '../styles'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import * as Icons from 'react-native-heroicons/outline'

export function NavBar() {
    const handlePress = {
        evaluations: () => {
            console.log('Clicked')
        },
        clients: () => {
            console.log('Clicked')
        },
        profile: () => {
            console.log('Clicked')
        }   
    }


    return (
        <View style={[styleSheet.container,styleSheet.shadow]}>
            <TouchableOpacity style={styleSheet.item} onPress={handlePress.evaluations}>
                <Icons.ClipboardDocumentListIcon size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={styleSheet.item} onPress={handlePress.clients}>
                <Icons.UserGroupIcon size={30}/>
            </TouchableOpacity>
            <TouchableOpacity style={styleSheet.item} onPress={handlePress.profile}>
                <Icons.UserCircleIcon size={30}/>
            </TouchableOpacity>
        </View>
    )
}

const styleSheet = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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