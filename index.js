function theBeatlesPlay (musiciansArray, instrumentsArray) {
  var newArray = []
  for (var i=0; i < 5; i++) {
    newArray[i] = musiciansArray[i] + " plays " + instrumentsArray[i]
  }
  return newArray
}
