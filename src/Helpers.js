function kebabCase(inputString){
  let outputString = inputString.toLowerCase().replace(/ /g, '-').replace(/'/g, '')
  return outputString
}

function lineName(tubeLines, line){
  let index = tubeLines.findIndex(lineX => lineX.id === line);
  return tubeLines[index]
}

export { kebabCase, lineName }