import React from 'react';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';

function FeedbackItem({item, handleDelete }: IFeedbackItemProps) {

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <span className="screen-reader-text">Delete feedback form</span>
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem