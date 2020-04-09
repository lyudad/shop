import React, { useState } from 'react';
import { Card as CardComponent } from 'antd';
import ReactCardFlip from 'react-card-flip';
import {Link} from 'react-router-dom'

const { Meta } = CardComponent;


export const Card = ({ item, onSelectItem }) => {
    const [isFlipped, onUpdateFlipped] = useState(false)

    const onClick = () => {
        onUpdateFlipped(!isFlipped)
    }

    const onClickTitle = () => {
        console.log('item', item)
        onSelectItem(item)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image} style={{ minHeight: '320px' }} />}
                onClick={onClick}
            >
                <Meta title={item.name} onClick={onClickTitle}/>
            </CardComponent>

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image} style={{ minHeight: '320px' }} />}
                onClick={onClick}
            >
                <Meta title="back" onClick={onClickTitle} />
            </CardComponent>
        </ReactCardFlip>
    )
}