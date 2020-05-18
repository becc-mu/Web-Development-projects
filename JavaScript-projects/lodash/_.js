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
};

// Do not write or modify code below this line.
module.exports = _;
