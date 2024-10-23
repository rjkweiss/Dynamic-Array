class DynamicArray {

  constructor(defaultSize = 4) {

    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    // if index exists, returns the value at that index, otherwise, it will return undefined
    return this.data[index];
  }

  push(val) {
    // if capacity has been met or exceeded, resize the arreay
    if (this.length >= this.capacity) {
      this.resize();
    }

    // add value to the end of the current array
    this.data[this.length] = val;

    // update the length
    this.length++;
  }


  pop() {
    // only remove from an array that is not empty
    if (this.length === 0) {
      return undefined;
    }
    // item to be removed from array
    const val = this.data[this.length - 1];

    // update the last item so that it is undefined
    this.data[this.length - 1] = undefined;

    // update length
    this.length--;

    // return the removed val
    return val;
  }

  shift() {
    // Your code here
    if (this.length === 0) {
      return  undefined;
    }

    // value to be removed from start of array
    const val = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // update the reference so that the last item in array is undefined
    this.data[this.length - 1] = undefined;

    // update length
    this.length --;

    // return val that was removed
    return val;
  }

  unshift(val) {
    // check if we have the capacity to add new item to array
    if (this.length >= this.capacity) {
      this.resize();
    }

    // go through items and shift right by 1
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    // update the head of array to the value we are inserting
    this.data[0] = val;

    // update length
    this.length += 1;
  }

  indexOf(val) {
    // traverse array, if we find the val, we return the first index at which it occurs
    for (let i = 0; i < this.length; i++) {
      let currEl = this.data[i];

      if (val === currEl) {
        return i;
      }
    }
    // return -1 if we haven't found the value in the array
    return -1;
  }

  resize() {

    // create a new array that is double the current capacity
    let newData = new Array(this.capacity * 2);

    // copy all items from current array to the newly created bigger array
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }

    // update this data and capacity
    this.data = newData;
    this.capacity *= 2;
  }

}


module.exports = DynamicArray;
