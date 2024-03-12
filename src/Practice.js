import { useState } from 'react';

export default function Practice(){
  const [count, setCount] = useState(0);

  function buttonClick(){
    setCount(count+1);
  }

  return(
    <div>
      <h1>let me introduce MyButton Component!</h1>
      <MyButton count={count} onClick={buttonClick}/>
      <MyButton count={count} onClick={buttonClick}/>
    </div>
  );  
}

function MyButton({count, onClick}){

  return(
    <button onClick = {onClick}>
      {count}
    </button>
  );
}