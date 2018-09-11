var katzDeliLine = [] 

//this is the current line of customers (the function Current Line is basically just reading this array outloud); people coming into the deli (raw info); the function takeANumber is adding the people who walk into the deli to this line


function takeANumber(katzDeliLine, newperson) {
 katzDeliLine.push(newperson); 
 return ("Welcome, "+ newperson + ". "+ "You are number "+ katzDeliLine.length + " in line."); 
}
 
 
 // For the above function; I have a question. Why is it that I don't need to define "newperson"?? Is it because in the index-test that place within the parenthesis next to the "takeANumber" is already defined, in a way?.. We see "Ada", "grace", etc; If the parameters are like placeholders, and the function is adding "newperson" to the deli line, is the function already letting us know that katzDeliLine is composed of various "newperson"s??


function nowServing (katzDeliLine)
{
  if (katzDeliLine.length ===0)
return "There is nobody waiting to be served!";
  if (katzDeliLine.length > 0)
  return ("Currently serving " + katzDeliLine.shift() + ".");
  }


//Question: will the function continue to call on itself as long as there are people left on the deli line?? Would a while loop have been more effective: while there are people still on line, call on the katzDeliLine.shift method??


var lineDescription =[]; 

function currentLine(katzDeliLine)
   { var n=0 
   while (n < katzDeliLine.length)
   {lineDescription.push(" "+ [n+1] + "."+ " "+ katzDeliLine[n]); n++; } 
   
   if (lineDescription.length === 0)
  {return "The line is currently empty.";}
  
  if (lineDescription.length > 0); 
  {return("The line is currently:" +lineDescription)}}
  
 
 currentLine(katzDeliLine);
