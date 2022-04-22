import React from 'react'
import FeedbackItem from './FeedbackItem';

interface IListProps { 
  feedback : {
    id: number,
    rating: number,
    text: string
  }[],
  handleDelete: (id: number) => void,  
};

function FeedbackList({ feedback, handleDelete } : IListProps) {
  if(!feedback || feedback.length === 0) {
      return <p>Looks like there are no feedbacks yet!</p>
  }
  
    return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}

export default FeedbackList