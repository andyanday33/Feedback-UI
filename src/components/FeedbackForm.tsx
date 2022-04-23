import React, {useState} from 'react'
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage('');
        } else if(text !== '' && text.length <= 10) {
            setBtnDisabled(true);
            setMessage('Message should at least be 10 characters');
        } else {
            setMessage('');
            setBtnDisabled(false);
        }

        setText(e.target.value);
    }

  return (
    <Card>
        <form>
            <h2>How would you rate our service?</h2>
            {/* @todo - rating select component */}
            <div className="input-group">
                <input type="text" onChange={handleTextChange} placeholder="Write a review..." value={text}/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm