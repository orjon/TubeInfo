

export function kebabCase(inputString){
  let outputString = inputString.toLowerCase().replace(/ /g, '-').replace(/'/g, '')
  return outputString
}

export function trimStationName(stationName){
  let trimmedStationName = stationName.replace('Underground Station', '')
  let cropIndex1 = trimmedStationName.indexOf('(') + 2
  if (cropIndex1 !== 0){
    trimmedStationName = trimmedStationName.slice(0, (cropIndex1-2))
  } 
  return trimmedStationName
}

export function findLineName(tubeLines, lineId){
  let index = tubeLines.findIndex(line => line.id === lineId);
  return tubeLines[index].name
}

export function findLine(tubeLines, lineId){
  let index = tubeLines.findIndex(line => line.id === lineId);
  return tubeLines[index]
}


export function listArrayNames(array) {
  let list = ''
  array.map(element => list = list + element.name + ', ')

  if (list === '') {console.log('NONE')
  } else {
    list = list.substring(0, list.length -2)
    console.log(list)
  }
}
