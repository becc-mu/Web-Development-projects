const _ = {
  clamp(number, lowerBound, upperBound) {
    const lowerClampedValue = Math.max(number, lowerBound);
    const clampedValue = Math.min(lowerClampedValue, upperBound);
    return clampedValue;
  },
  inRange(number, start, end) {
    let isInRange = false;
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    if (number >= start && number <= end) {
      isInRange = true;
    }
    if (end === number) {
      isInRange = false;
    }
    return isInRange;
  },
  words(string) {
    let words;
    return (words = string.split(" "));
  },
  pad(string, length) {
    let startPaddingLength;
    let fPadd;
    let bPadd;
    let paddedString = " ";
    if (length <= string.length) {
      return string;
    }
    if (length >= string.length) {
      startPaddingLength = length - string.length;
      fPadd = Math.floor(startPaddingLength / 2);
      bPadd = Math.round(startPaddingLength / 2);

      string = paddedString.repeat(fPadd) + string;
      return (string += paddedString.repeat(bPadd));
    }
  },
};

module.exports = _;
