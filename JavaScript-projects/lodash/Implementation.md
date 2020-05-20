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

- 1: create object that takes key,value.
- 2: Boolean if key has value and not undefined or null else return false.
- 3: return false if !Object.keys().

# Implement \_.invert()

## Ideate

- 1: create invert that takes object.
- 2: create an empty object for inverted object.
- 3: loop through each key.
- 4: Set the original object's value at that key and set the value to be the origing key.

# Implement \_.findKey()

## Ideate

- 1: add findKey object takes object and function.
- 2: add findKey loop through object's key, value.
- 3: return index of key.
- 4: return undefined if no values

# Implement\_.dropWhile()

## Ideate

- 1: Create dropWhile object with arguments: array, predicate function.
- 2: Create a method called pred that returns if negated predicate i.e. !predicate(element, index, array).
- 3: Create a variable dropNumber that uses findIndex and truthy value of pred i.e. predicate truthy value.
- 4: Create droppedArray variable and sets its value to return value of this.drop() with its arguments as array, dropNumber.
- 5: Finally return droppedArray.

# Implement \_.chunk()

## Ideate

- 1: Add chunk() method to the loadash object with arguments: array, size.
- 2: If size not specified return size as 1.
- 3: Create an empty array arrayChunks that will contain all of the generated array chunks and a variable called arrayChunk.
- 4: Create new variable called count and set value to size.
- 3: Loop through array using for loop. The iterator should count in size. Use array.slice to create equal length of arrays with specified numbers as size. This should retrun arrayChunk in same order as original array.
- 4: Use array.push to add arrayChunk to arrayChunks array.
- 5: Increment slice end counter by size before the end of the loop.
