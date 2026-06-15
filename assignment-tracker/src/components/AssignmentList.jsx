function AssignmentList({
assignments,
updateStatus,
deleteAssignment
}) {

function statusColor(status){

if(status==="Submitted")
return "#16a34a";

if(status==="Late")
return "#dc2626";

return "#f59e0b";

}

return(

<div>

<h2>

Assignments
(
{assignments.length}
)

</h2>

{

assignments.length===0

?

<div
className="empty-box"
>

📚

<h3>
No Assignments Found
</h3>

<p>
Add a new assignment
to get started
</p>

</div>

:

assignments.map(
(item,index)=>(

<div
className="assignment-card"
key={index}
>

<h3>
{item.title}
</h3>

<p>
Subject:
{item.subject}
</p>

<p>
Due Date:
{item.date}
</p>

<p>

Status:

<span

style={{

background:
statusColor(
item.status
),

padding:
"8px 14px",

borderRadius:
"20px",

marginLeft:
"10px",

color:
"white"

}}

>

{item.status}

</span>

</p>

<br/>

<select

value={item.status}

onChange={(e)=>

updateStatus(
index,
e.target.value
)

}

>

<option>
Pending
</option>

<option>
Submitted
</option>

<option>
Late
</option>

</select>

<br/><br/>

<button
onClick={()=>
deleteAssignment(index)
}
>

Delete

</button>

</div>

)

)

}

</div>

);

}

export default AssignmentList;