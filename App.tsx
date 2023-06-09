import React from 'react'
import { SafeAreaView } from 'react-native'
import { Routes } from './src/main/routes'
import { testVariables } from './src/main/config'
import { EnvironmentVariablesError } from './src/domain/errors'


const App = () => {
    const isValidVariables = testVariables()

    if (!isValidVariables) throw new EnvironmentVariablesError()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Routes/>
        </SafeAreaView>
    )
}

export default App
