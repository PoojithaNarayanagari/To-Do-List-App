let arr=[
    "Morning Workout",
    "Breakfast and Read",
    "Office work ",
    "Lunch break",
    "Go for 30min walk",
    "spend sometime with family",
    "Dinner"
]



function display(){
    let trs="";
    for(let ind in arr){
        trs+=
        `
       
            <tr>
                <td>${arr[ind]}</td>
                 <td>
                   <p>completed</p>
                </td>
                
                <td>
                    <button onclick="editTask(${ind});">edit</button>
                </td>
                <td>
                    <button onclick="deleteTask(${ind});">delete</button>
                </td>
            </tr>
            
        `
    }
    let refElem=document.getElementById("ref");
    refElem.innerHTML=`
        <table border="4px">
        <tr>
        <th colspan="4">Plans&Schedule</th>
        </tr>
        <tr>
        <th>Tasks</th>
        <th>completed/Ongoing</th>
        <th>Delete</th>
        <th>Update</th>
        </tr>
    
            ${trs}
        </table>
    `;
   
}


display();


function deleteTask(index){
    let rev=confirm("want to delete??");
    if(rev==false){
        return;
    }


    arr.splice(index,1);
    display();
    alert("deleted!!!");
}


function addTask(e){
    e.preventDefault();
    let allForms=document.forms;
    let myFormElem=allForms.myForm; 
    let textBoxElem=myFormElem.task;
    let task=textBoxElem.value;
    arr.push(task);
    display();
    textBoxElem.value="";
    alert("added!!!");
}




function editTask(ind){
   
    let enteredTask = prompt(arr[ind]);// take input from user
    arr[ind]=enteredTask;
    display();
}

