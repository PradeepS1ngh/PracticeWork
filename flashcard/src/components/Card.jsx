import React,{useState} from 'react'

function Card({card}) {
    const [reveal, setReveal] = useState(false)
    const {prompt , answer} = card
    return (
      <div className='card' onClick={() => setReveal(true)}>
        <div className='card-prompt'>
          <h4>{prompt}</h4>
        </div>
        <div className='card-answer'>
          <h4 className={reveal ? "text-revealed" : "text-hidden"}>{answer}</h4>
        </div>
      </div>
    );
}

export default Card
