var katzDeli=[];

/*function takeANumber(katzDeliLine, name){
function nowServing(katzDeliLine){
  do{
    katzDeliLine.shift()
    return "Currently serving " + katzDeliLine[0] +"."
  }while (katzDeliLine.length > 0)
  return "There is nobody waiting to be served!"
}

}*/

 function takeANumber(katzDeliLine, name){
   katzDeliLine.push(name)
  for(var i = 0; i < katzDeliLine.length; i++){
      return "Welcome, "+name+". You are number " + (katzDeliLine.length-i)+ " in line."
   }
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
  }
}
