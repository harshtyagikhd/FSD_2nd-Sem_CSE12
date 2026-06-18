function StudentCard(props){
    return(
        <div className="student-card">
            <h2>Name: {props.name}</h2>
            <p>Course: {props.course}</p>
            <p>Marks: {props.marks}</p>
        </div>
    )
}

export default StudentCard;