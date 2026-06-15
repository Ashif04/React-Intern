function Dashboard({ assignments }) {

const total = assignments.length;

const submitted =
assignments.filter(
(a)=>a.status==="Submitted"
).length;

const pending =
assignments.filter(
(a)=>a.status==="Pending"
).length;

const late =
assignments.filter(
(a)=>a.status==="Late"
).length;

return(

<div className="dashboard">

<div className="card">
<h3>{total}</h3>
<p>Total</p>
</div>

<div className="card">
<h3>{submitted}</h3>
<p>Submitted</p>
</div>

<div className="card">
<h3>{pending}</h3>
<p>Pending</p>
</div>

<div className="card">
<h3>{late}</h3>
<p>Late</p>
</div>

</div>

);

}

export default Dashboard;