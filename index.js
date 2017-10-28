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
   katzDeliLine.push(name)
  for(var i = 0; i < katzDeliLine.length; i++){
      return "Welcome, "+name+". You are number " + (katzDeliLine.length-i)+ " in line."
   }
}

function nowServing(katzDeliLine){
  do{
    return "Currently serving " + katzDeliLine[0] +"."
    katzDeliLine.shift()
  }while (katzDeliLine.length>0)
  return "There is nobody waiting to be served!"
}
