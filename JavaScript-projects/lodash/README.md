## Ideate.

1: Add the .words() method to the lodash object.

2: Use the string .split() method to split the provided string on space characters into an array of words.

3: Return the array of words generated in the previous step.

Do not write or modify code below this line.

# Implement .pad()

## Specify

- pad takes 2 agruements. string, totalLength
- adds spaces evenly to bothsides to equal all strings have length
- if odd amount adds extra padding to the end.
- if not specified adds spaces

## Ideate

length = string.length
padding = totalLength - length
if padding <= length return string
else if padding >length && padding % 2 === 0
let fPadding - padding / 2;
string.unshift(fPadding)
string.push(fPadding)
else
fPadding = padding - 1 / 2
string.unshift(fPadding)
fPadding += 1;
string.push(fPadding)
retrun string
