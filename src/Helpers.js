function kebabCase(inputString){
  let outputString = inputString.toLowerCase().replace(/ /g, '-').replace(/'/g, '')
  return outputString
}

export {kebabCase}