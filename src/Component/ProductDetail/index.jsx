import React from 'react';
import {Layout} from 'UI/Layout'

export const ProductDetail = ({item}) => {
   return (
      <Layout style={{ minHeight: '100vh' }}>
            {item.name}
      </Layout>
   )
}