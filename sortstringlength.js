// This function takes in an array of strings as an argument and returns a sorted array with the same strings ordered from shortest to longest.

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
}

sortByLength(["Beg", "Life", "I", "To"]) // -> ["I", "To", "Beg", "Life"]

sortByLength(["", "Moderately", "Brains", "Pizza"]) // -> ["", "Pizza", "Brains", "Moderately"]

sortByLength(["Longer", "Longest", "Short"]) // -> ["Short", "Longer", "Longest"]
