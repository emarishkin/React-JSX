import {  Layout } from 'antd';

import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';
import AppHeader from './components/layout/AppHeader';
import { CryptoContextProvider } from './context/crypto-context';


function App() {
  
  return (
    <>
    <CryptoContextProvider>
    <Layout>
        <AppHeader />
    <Layout>
        <AppSider />
        <AppContent />
    </Layout>
    </Layout>
    </CryptoContextProvider>
    </>
  )
}

export default App
