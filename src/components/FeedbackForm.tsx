import React, {useState} from 'react'
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
    const [text, setText] = useState('');

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        setText(e.target.value);
    }

  return (
    <Card>
        <form>
            <h2>How would you rate our service?</h2>
            {/* @todo - rating select component */}
            <div className="input-group">
                <input type="text" onChange={handleTextChange} placeholder="Write a review..." value={text}/>
                <Button type="submit">Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm