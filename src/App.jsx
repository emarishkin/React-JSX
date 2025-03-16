import {  Layout } from 'antd';

import AppSider from './components/layout/AppSider';
import AppContent from './components/layout/AppContent';
import AppHeader from './components/layout/AppHeader';


function App() {
  
  return (
    <>
    <Layout>
        <AppHeader />
    <Layout>
        <AppSider />
        <AppContent />
    </Layout>
    </Layout>
    </>
  )
}

export default App
