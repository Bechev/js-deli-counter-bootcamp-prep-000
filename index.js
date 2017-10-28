var katzDeli=[];

/*function takeANumber(katzDeliLine, name){
var i = 0
  while (i < katzDeliLine.length){
    i++
  }
  katzDeliLine.push(name)
  return "Welcome, "+name+" . You are number " + i+1 + " in line."
}*/

 function takeANumber(katzDeliLine, name){
  for(var i = 0; i<katzDeliLine.length; i++){
    katzDeliLine.push(name)
   }
  return "Welcome, "+name+" . You are number " + i+1 + " in line."
}