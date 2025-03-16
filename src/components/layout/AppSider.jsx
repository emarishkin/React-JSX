import {Layout,Card,Statistic,List,Typography,Spin,Tag } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { fakeFetchAssets, fakeFetchCrypto } from '../../api';
import { percentDifference } from '../../utils';




const siderStyle = {
    padding:'1rem'

  };

  
const AppSider = () =>{

const [loading,setLoading] = useState(false)
const [crypto,setCrypto] = useState([])
const [assets,setAssets] = useState([])

useEffect(()=>{
   async function preload(){
    setLoading(true)
  const {result} = await fakeFetchCrypto()
  const assets = await fakeFetchAssets()

  setAssets(assets.map(asset=>{
    const coin = result.find((c)=>c.id===asset.id)
    return{
        grow: asset.price < coin.price,
        growPercent: percentDifference(asset.price, coin.price),
        totalAmound:asset.amount * coin.price,
        totalProfit: asset.amount * coin.price - asset.amount * asset.price,
        ...asset
    }
  }))
  setCrypto(result)
  setLoading(false)
    }
    preload()
},[])

if (loading) {
    return <Spin fullscreen />
}

    return(
    <Layout.Sider width="25%" style={siderStyle}>
        {assets.map(asset=>(
            <Card key={asset.id} style={{marginBottom:'1rem'}}>
     <Statistic
          title={asset.is}
          value={asset.totalAmound}
          precision={2}
          valueStyle={{ color: asset.grow ? '#3f8600' : 'red'}}
          prefix={asset.grow ? <ArrowUpOutlined />:<ArrowDownOutlined />}
          suffix="$"
        />
        <List
        size='small'
      dataSource={[
        {title: 'Total profit',value:asset.totalProfit,withTag:true},
        {title: 'Asset Amound',value:asset.amount,isPlain:true},
        {title: 'Differences',value:asset.growPercent}
      ]}

      

      renderItem={(item) => (
        <List.Item>
          <span>{item.title}</span>
          <span>
            {item.withTag && <Tag color={asset.grow? 'green':'red' }>{asset.growPercent}%</Tag>}
          {item.isPlain && item.value}
          {!item.isPlain && (
            <Typography.Text type={asset.grow ? 'success': 'danger'}>{item.value}$</Typography.Text>)}
        </span>
        </List.Item>
      )}
    />
     </Card>
        ))}
     
     
    </Layout.Sider>
    )
}

export default AppSider