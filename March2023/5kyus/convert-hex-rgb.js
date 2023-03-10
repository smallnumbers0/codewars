// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

function hexStringToRGB(hexString) {
    //remove the #
    hexString = hexString.replace('#', '').toUpperCase()
    //rgb values can only go from 0 - 255 i think
    let r = 0
    let g = 0
    let b = 0
    //divide them into color pairs and convert them base 16
     r = parseInt(hexString.substring(0,2), 16)
     g = parseInt(hexString.substring(2,4), 16)
     b = parseInt(hexString.substring(4,6), 16)
  
    return {r: r, g: g, b: b} //
  }