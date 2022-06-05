// This function takes in an array of strings as an argument and returns a sorted array with the same strings ordered from shortest to longest.

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
}  