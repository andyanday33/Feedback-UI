import React from 'react'


function FeedbackStats({feedback} : IFeedbackStatsProps) {
    // Calculate ratings avg
    let average = calculateAvg(feedback);

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

// Calculates to average and returns it with exactly one decimal point (except for ".0")
function calculateAvg(feedback: IFeedback[]) {
    let avg = feedback.reduce((acc, curr) => {
        return acc + curr.rating;
    }, 0) / feedback.length;

    avg = +avg.toFixed(1).replace(/[.,]0$/, '');
    return avg;
}

export default FeedbackStats