import React, { Suspense } from 'react';
import { AdsProvider } from './src/context/AdsContext';
import AddAdForm from './src/components/AddAdForm';
import AdsList from './src/components/AdsList';

function App() {
    return (
        <AdsProvider>
            <div className="App">
                <header className="App-header">
                    <h1>Управление объявлениями</h1>
                </header>
                <Suspense fallback={<div>Loading...</div>}>
                    <AddAdForm />
                    <AdsList />
                </Suspense>
            </div>
        </AdsProvider>
    );
}

export default App;