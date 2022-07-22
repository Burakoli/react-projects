import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState( [] );

  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count);
    if(count <= 0){
      amount = 1
    }
    if(count > 50){
      amount = 50
    }
    setText(data.slice(0,amount))
  }
  return (
    <section className='section-center'>
      <h3>GENERATE PARAGRAPH</h3>
      <h5>max = 50 | min = 1</h5>
      <form className='paragraph-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraph:
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button type="submit" className='btn'>generate</button>
      </form>
      <article className='paragraph-text'>
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
