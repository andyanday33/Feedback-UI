import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
    
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id: number) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback}/>
                <FeedbackForm />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
        
    );
}


export default App;