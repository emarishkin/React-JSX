import {Layout,Card,Statistic,List,Typography,Spin,Tag } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { strUpper } from '../../utils';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';



const siderStyle = {
    padding:'1rem'

  };

  
const AppSider = () =>{

  const {loading,assets} = useContext(CryptoContext)

  if (loading) {
    return <Spin fullscreen />
}


    return(
    <Layout.Sider width="25%" style={siderStyle}>
        {assets.map(asset=>(
            <Card key={asset.id} style={{marginBottom:'1rem'}}>
     <Statistic
          title={strUpper(asset.id)}
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
        // {title: 'Differences',value:asset.growPercent}
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