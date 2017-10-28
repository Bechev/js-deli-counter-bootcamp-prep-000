var katzDeli=[];

function takeANumber(katzDeliLine, name){
var i = 1
  while (i < katzDeliLine.length){
    i++
  }
  katzDeliLine.push(name)
  return "Welcome, "+name+" . You are number " + i + " in line."
 }
