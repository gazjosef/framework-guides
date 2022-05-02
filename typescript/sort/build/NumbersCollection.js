"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumebersCollection = void 0;
class NumebersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumebersCollection = NumebersCollection;
const collection = new NumebersCollection([1, 2, 3]);
collection.length;
