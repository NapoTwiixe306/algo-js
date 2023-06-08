const originalArray1 = [1, 3, 4, 5];
const duplicateArray1 = [];

for (let i = 0; i < originalArray1.length; i++) {
    duplicateArray1.push(originalArray1[i]);
}
console.log("Duplicate array (push()) => ", duplicateArray1);


const originalArray = [1, 2, 3, 4, 5];
const duplicateArray = originalArray.slice();
console.log("Duplicate array (slice()) =>", duplicateArray);