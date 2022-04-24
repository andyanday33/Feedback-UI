import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
    
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id: number | string) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    const addFeedback = (newFeedback: IFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback}/>
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
        
    );
}


export default App;