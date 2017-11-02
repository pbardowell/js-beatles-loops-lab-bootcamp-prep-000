function theBeatlesPlay (musiciansArray, instrumentsArray) {
  var newArray = []
  for (var i=0; i < 4; i++) {
    newArray[i] = musiciansArray[i] + " plays " + instrumentsArray[i]
  }
  return newArray
}
function johnLennonFacts(arrayFacts) {
  counter = 0
  while (counter < arrayFacts.length) {
    arrayFacts[counter] = arrayFacts[counter] +"!!!"
  }
  return arrayFacts
}
