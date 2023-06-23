import { Routes } from './src/routes'
import { setupApp } from './src/config'
import { Providers  } from './src/app/contexts'

import React from 'react'
import { SafeAreaView } from 'react-native'

const App = () => {
    setupApp()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Providers>
                <Routes/>
            </Providers>
        </SafeAreaView>
    )
}

export default App
