import { useState } from "react";

function AssignmentForm({ addAssignment }) {

const [title,setTitle]=useState("");
const [subject,setSubject]=useState("");
const [date,setDate]=useState("");

function handleSubmit(){

if(!title || !subject || !date){

alert("Fill all fields");

return;

}

addAssignment({

title,
subject,
date,
status:"Pending"

});

setTitle("");
setSubject("");
setDate("");

}

return(

<div className="form-box">

<h2>
Add Assignment
</h2>

<input
type="text"
placeholder="Assignment Title"
value={title}
onChange={(e)=>
setTitle(
e.target.value
)}
/>

<select
value={subject}
onChange={(e)=>
setSubject(
e.target.value
)}
>

<option value="">
Select Subject
</option>

<option>
AI
</option>

<option>
Maths
</option>

<option>
Python
</option>

</select>

<input
type="date"
value={date}
onChange={(e)=>
setDate(
e.target.value
)}
/>

<button
onClick={handleSubmit}
>

Add Assignment

</button>

</div>

);

}

export default AssignmentForm;