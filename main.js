var studentlist=[];
function submit() {
 for(var j=1; j<=4; j++) {
     var studentname=document.getElementById("name_of_the_student_"+j).value;

     studentlist.push(studentname);
 }   console.log(studentlist);
 document.getElementById("display_name_with_commas").innerHTML=studentlist;
 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort_button").style.display="inline-block";
 }
 function sorting(){
     studentlist.sort();
     document.getElementById("display_name_with_commas").innerHTML=studentlist;
 }