import React, { useRef } from 'react'

function Intermediate() {
   
 
  return (
    <div>
      <form className="frm">

        <div className="fm">
        <label className="abc">FirstName</label>
        <input type="text" ref={firstNameInputRef} onFocus={()=>{firstNameInputRef.current.style.backgroundColor="blue";}}
        onChange={()=>{}} onBlur={()=>{firstNameInputRef.current.style.backgroundColor="aqua";}}></input>
       </div> 

       <div className="fm">
        <label className="abc">LastName</label>
        <input type="text" ref={lastNameInputRef} onFocus={()=>{lastNameInputRef.current.style.backgroundColor="blue";}}
        onChange={()=>{}} onBlur={()=>{lastNameInputRef.current.style.backgroundColor="aqua";}}></input>
        
       </div> 

       <div className="fm">
        <label className="abc">Sanskrit</label>
        <input type="Number" ref={sanInputRef} onFocus={()=>{sanInputRef.current.style.backgroundColor="blue";}}
        onChange={()=>{sanResultRef.current.innerHTML=sanInputRef.current.value>=35?"pass":"fail";
          sanResultRef.current.style.backgroundColor=sanInputRef.current.value>=35?"green":"red"
        }} onBlur={()=>{sanInputRef.current.style.backgroundColor="aqua";}}></input>
        <span className="para" ref={sanResultRef}></span>
       </div> 
        
       <div className="fm">
        <label className="abc">English</label>
        <input type="Number" ref={engInputRef} onFocus={()=>{engInputRef.current.style.backgroundColor="blue";}}
        onChange={()=>{engResultRef.current.innerHTML=engInputRef.current.value>=35?"pass":"fail";
          engResultRef.current.style.color=engInputRef.current.value>=35?"green":"red";
        }} onBlur={()=>{engInputRef.current.style.backgroundColor="aqua";}}></input>
        <span className="para" ref={engResultRef}></span>
       </div> 
        
       <div className="fm">
        <label className="abc">Physics</label>
        <input type="Number" ref={phyInputRef} onFocus={()=>{phyInputRef.current.style.backgroundColor="blue";}}
        onChange={()=>{phyResultRef.current.innerHTML=phyInputRef.current.value>=35?"pass":"fail";
          phyResultRef.current.style.backgroundColor=phyInputRef.current.value>=35?"green":"red";
        }} onBlur={()=>{phyInputRef.current.style.backgroundColor="aqua";}}></input>
        <span className="para" ref={phyResultRef}></span>
       </div> 
        
       <div className="fm" >
        <label className="abc">Maths-A</label>
        <input type="Number" ref={mathAInputRef} onFocus={()=>{mathAInputRef.current.style.backgroundColor="blue";}}
        onChange={()=>{mathAResultRef.current.innerHTML=mathAInputRef.current.value>=35?"pass":"fail";
          mathAResultRef.current.style.backgroundColor=mathAInputRef.current.value>=35?"green":"red";
        }} onBlur={()=>{mathAInputRef.current.style.backgroundColor="aqua";}}></input>
        <span className="para" ref={mathAResultRef}></span>
       </div> 

       <div className="fm">
        <label className="abc">Chemistry</label>
        <input type="Number" ref={cheInputRef} onFocus={()=>{cheInputRef.current.style.backgroundColor="blue";}}
        onChange={()=>{cheResultRef.current.innerHTML=cheInputRef.current.value>=35?"pass":"fail";
          cheResultRef.current.style.backgroundColor=cheInputRef.current.value>=35?"green":"red";
        }} onBlur={()=>{cheInputRef.current.style.backgroundColor="aqua";}}></input>
        <span className="para" ref={cheResultRef}></span>
       </div> 

       <div>
        <label className="abc">Maths-B</label>
        <input type="Number" ref={mathBInputRef} onFocus={()=>{mathBInputRef.current.style.backgroundColor="blue";}}
        onChange={()=>{mathBResultRef.current.innerHTML=mathBInputRef.current.value>=35?"pass":"fail";
          mathBResultRef.current.style.backgroundColor=mathBInputRef.current.value>=35?"green":"red";
        }} onBlur={()=>{mathBInputRef.current.style.backgroundColor="aqua";}}></input>
        <span className="para" ref={mathBResultRef}></span>
       </div> 
       
       <div>
       <button type="button" onClick={()=>{

        let firstName=firstNameInputRef.current.value;
        let lastName=lastNameInputRef.current.value;
        let engMarks=Number(engInputRef.current.value);
        let sanMarks=Number(sanInputRef.current.value);
        let phyMarks=Number(phyInputRef.current.value);
        let mathAMarks=Number(mathAInputRef.current.value);
        let cheMarks=Number(cheInputRef.current.value);
        let mathBMarks=Number(mathBInputRef.current.value);
        let totalMarks= engMarks+sanMarks+phyMarks+mathAMarks+cheMarks+mathBMarks;


        resultParaRef.current.innerHTML=`${firstName} ${lastName} got marks are ${totalMarks}`
        alert(`totalMarks are ${totalMarks}`);

       }}> Calculate Result </button>

       <div>
        <p ref={resultParaRef}>
          Please Enter Value and Click Continue
        </p>
       </div>
        
        </div>
      </form>
        </div>
  )
}

export default Intermediate