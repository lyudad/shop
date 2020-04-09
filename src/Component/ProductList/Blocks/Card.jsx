import React, { useState } from 'react';
import { Card as CardComponent } from 'antd';
import ReactCardFlip from 'react-card-flip';

const { Meta } = CardComponent;


export const Card = ({ item }) => {
    const [isFlipped, onUpdateFlipped] = useState(false)

    const onClick = () => {
        onUpdateFlipped(!isFlipped)
    }
    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image} style={{ minHeight: '320px' }} />}
                onClick={onClick}
            >
                <Meta title={item.name} />
            </CardComponent>

            <CardComponent
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.image} style={{ minHeight: '320px' }} />}
                onClick={onClick}
            >
                <Meta title="back" />
            </CardComponent>
        </ReactCardFlip>
    )
}