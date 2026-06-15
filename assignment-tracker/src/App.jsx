import "./App.css";
import { useState, useEffect } from "react";

import Dashboard from "./components/Dashboard";
import AssignmentForm from "./components/AssignmentForm";
import AssignmentList from "./components/AssignmentList";
import SubjectFilter from "./components/SubjectFilter";

function App(){

const [assignments,setAssignments]=useState(
JSON.parse(
localStorage.getItem("assignments")
)||[]
);

const [filter,setFilter]=useState("");
const [search,setSearch]=useState("");

useEffect(()=>{

localStorage.setItem(
"assignments",
JSON.stringify(assignments)
);

},[assignments]);

function addAssignment(data){

const today=
new Date()
.toISOString()
.split("T")[0];

if(data.date < today){
data.status="Late";
}

setAssignments([
...assignments,
data
]);

}

function updateStatus(index,value){

const updated=[...assignments];

updated[index].status=value;

setAssignments(updated);

}

function deleteAssignment(index){

setAssignments(
assignments.filter(
(_,i)=>i!==index
)
);

}

let filteredAssignments=assignments;

if(filter){

filteredAssignments=
filteredAssignments.filter(
(item)=>
item.subject===filter
);

}

if(search){

filteredAssignments=
filteredAssignments.filter(
(item)=>

item.title
.toLowerCase()
.includes(
search.toLowerCase()
)

);

}

return(

<div className="app">

<h1>
College Assignment Submission Tracker
</h1>

<p>
Track submitted,
pending and late assignments
</p>

<Dashboard assignments={assignments}/>

<AssignmentForm
addAssignment={addAssignment}
/>

<input
placeholder="Search Assignment..."
value={search}
onChange={(e)=>
setSearch(
e.target.value
)
}
style={{
padding:"12px",
width:"450px",
marginBottom:"20px",
borderRadius:"10px",
border:"none"
}}
/>

<SubjectFilter
filter={filter}
setFilter={setFilter}
/>

<AssignmentList
assignments={filteredAssignments}
updateStatus={updateStatus}
deleteAssignment={deleteAssignment}
/>

<footer>

College Assignment Tracker • Built with React

</footer>
</div>

);

}

export default App;