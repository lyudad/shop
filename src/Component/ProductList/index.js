import React from 'react';
import { Row, Col } from 'antd';
import {Layout} from 'UI/Layout'
import {Card} from './Blocks'



export const ProductList = ({data, onSelectItem}) => {
   const renderCart = (item) => (
      <Col span={3}>
         <Card item={item} onSelectItem={onSelectItem}/>
      </Col>
   )

   return (
      <Layout style={{ minHeight: '100vh' }}>
            <Row justify="space-around">
               {
                  data.map(el => renderCart(el))
               }
            </Row>
      </Layout>
   )
}