## Ideate.

1: Add the .words() method to the lodash object.

2: Use the string .split() method to split the provided string on space characters into an array of words.

3: Return the array of words generated in the previous step.

Do not write or modify code below this line.

# Implement \_.pad()

## Specify

- pad takes 2 agruements. string, totalLength
- adds spaces evenly to bothsides to equal all strings have length
- if odd amount adds extra padding to the end.
- if not specified adds spaces

## Ideate

```
vars string, length
if length <= string.length
    return string

if length > string.length
let startPaddingLength
let paddedString = ' '
let fPadding
let bPadding
startPaddingLength = length - string.length
fPadding = Math.floor(startPaddingLength / 2);
bPadding = Math.round(startPaddingLength / 2)
string = paddedString.repeat(fPadding)
string += paddedString.repeat(bPadding)
retrun string

```

# Implement\_.has()

- 1: create object that takes key,value
- 2: Boolean if key has value and not undefined or null else return false
- 3: return false if !Object.keys()

# Implement \_.invert()

## Ideate

- 1: create invert that takes object
- 2: create an empty object for inverted object
- 3: loop through each key
- 4: Set the original object's value at that key and set the value to be the origing key.
