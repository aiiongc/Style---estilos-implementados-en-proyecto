const students=[];

const tableBody=document.querySelector("#studentsTable tbody");
const averageDiv=document.getElementById("average");

document.getElementById("studentForm").addEventListener("submit",function(e){
    e.preventDefault();

    const name=document.getElementById("name").value.trim();
    const lastName=document.getElementById("lastName").value.trim();
    const grade=parseFloat(document.getElementById("grade").value.trim());

    const student={name,lastName,grade};
    students.push(student);
     addStudentToTable(student)
     calcularPromedio()

    this.reset();
});

function addStudentToTable(student){
    const row=document.createElement("tr");
    row.innerHTML=
    `<td>${student.name}</td>
     <td>${student.lastName}</td>
    <td>${student.grade}</td>`;
   tableBody.appendChild(row);
}

if(students.length === 0){
   averageDiv.textContent=`Promedio General del Curso: No Disponible`;
}

function calcularPromedio(){
    const total=students.reduce((sum,s)=>sum+s.grade,0);
    console.log(total)
    const average=total/students.length;
    console.log(average)
    averageDiv.textContent=`Promedio General del Curso: ${average.toFixed(2)}`;
}