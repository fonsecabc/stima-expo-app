import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { NavBar, PageTitle,Colors } from './components'
import React from 'react'

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <NavBar />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.slate,
        height: '100%'
    }
})

export default App