import React from 'react';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';


interface IItemProps { 
    key: number,
    item: {
        id: number,
        rating: number,
        text: string,
    },
    handleDelete: (id: number) => void
    
};

function FeedbackItem({item, handleDelete }: IItemProps) {

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem