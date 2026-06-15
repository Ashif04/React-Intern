function SubjectFilter({
filter,
setFilter
}){

return(

<div>

<select

value={filter}

onChange={(e)=>

setFilter(
e.target.value
)

}

>

<option value="">
All Subjects
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

</div>

);

}

export default SubjectFilter;