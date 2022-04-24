import React, {useState} from 'react'

function RatingSelect({select}: IRatingSelectProps) {
    const [selected, setSelected] = useState(10);

    const ratings = [];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value);
    }

    for(let i = 1; i < 11; i++) {
        ratings.push(
            <li>
                <input 
                    type="radio"
                    id={`num${i}`}
                    name="rating"
                    value={`${i}`}
                    key={`rating-${i}`}
                    onChange= {handleChange}
                    checked={selected === i} />
                <label htmlFor={`num${i}`}>{i}</label>
            </li>
        )
    }
  return (
    <ul className='rating'>
        {ratings}
    </ul>
  )
}

export default RatingSelect