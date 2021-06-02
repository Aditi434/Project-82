var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line="2";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth = 3;
ctx.arc(200,200, 100,0, 2*Math.PI);
ctx.stroke();
radius=document.getElementById("radius").value;     


canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{

    
    current_position_of_x=e.clientX - canvas.offsetLeft;
    current_position_of_y=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown")
    {
      var mouseEvent="empty";
    
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line="2";


canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{

    
    current_position_of_x=e.clientX - canvas.offsetLeft;
    current_position_of_y=e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth = 3;
        ctx.arc(current_position_of_x,current_position_of_y, radius,0, 2*Math.PI);
        ctx.stroke();
        
    }
}
canvas.addEventListener("mouseup" ,myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseleave";
}
  
        
    }
}
canvas.addEventListener("mouseup" ,myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseleave";
}
