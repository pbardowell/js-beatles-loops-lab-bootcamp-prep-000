function theBeatlesPlay (musiciansArray, instrumentsArray) {
  var newArray = []
  for (var i=0; i < 4; i++) {
    newArray[i] = musiciansArray[i] + " plays " + instrumentsArray[i]
  }
  return newArray
}
function johnLennonFacts(arrayFacts) {
  arrayLength = arrayFacts.length
  counter = 0
  while (counter < arrayLength) {
    arrayFacts[counter] = arrayFacts[counter] +"!!!"
  }
  return arrayFacts
}