(()=>{
    $(document).ready(()=>{ 
        $("#submit").click(()=>{
            let list = $("#list");
            let rollNo = $("#rollno").val();
            let name = $("#name").val();
            let marks = $("#marks").val();
            if(rollNo && name && marks){
                let newStudent = $('<p />');
                let rollspan = "<span>"+ rollNo+"</span>";
                let namespan = "<span>"+ name+"</span>";
                let marksspan = "<span>"+marks+"</span>";
                console.log(rollspan+" "+ namespan+" "+marksspan);
                newStudent.append("Roll no - "+rollspan+", "+ namespan+" has scored "+marksspan+" marks");
                
                list.append(newStudent);
            }else{
                alert("Please fill all details")
            }
        })
    })

})();
    
