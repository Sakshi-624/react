
import './App.css';
import { useState } from 'react';


const Display=(props)=>{
  if(props.value==0)
  {
    return(
      <div>
        <p>
          no feedback
        </p>
      </div>
    )
  }
  else{
    return(
      <div>
        <p>
          good:{props.good}
          <br></br>
          bad:{props.bad}
          <br></br>
          neutral:{props.neutral}
          <br></br>
          allreviews:{props.value}
          <br></br>
          average:{(props.good-props.bad)/props.value}
          <br></br>
          positive:{(props.good/props.value)*100}
        </p>
      </div>
    )
  }

}


const App=()=>{

  const [ review ,setreview]=useState({good:0, bad:0,neutral:0})
  
  const [allreviews ,setallreviews]=useState(0)

  const inrgood=()=>{
    const newclicks={...review,good:review.good+1}
    setreview(newclicks)
    setallreviews(allreviews+1)

  }
  const inrbad=()=>{
    const newclicks={...review,bad:review.bad+1}
    setreview(newclicks)
    setallreviews(allreviews+1)

  }
  const inrneutral=()=>{
    const newclicks={...review, neutral:review.neutral+1}
    setreview(newclicks)
    setallreviews(allreviews+1)
  }
  
  return(
    <div>
      <h1>give feedback</h1>
      
      <p>
        <button onClick={inrgood}>good</button>
       
        <button onClick={inrbad}>bad</button>
       
        <button onClick={inrneutral}>neutral</button>
       
        </p>
        <h2>statistics</h2>
         <Display value={allreviews} good={review.good} bad={review.bad} neutral={review.neutral}></Display>
        
     
    </div>
  )

}




export default App;
