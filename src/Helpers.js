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

export function lineName(tubeLines, lineId){
  let index = tubeLines.findIndex(lineX => lineX.id === lineId);
  return tubeLines[index]
}

