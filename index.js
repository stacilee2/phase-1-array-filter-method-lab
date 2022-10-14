function findMatching(array, name) {
    return array.filter((possibleMatch) => possibleMatch.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array, name){
    return array.filter((possibleMatch) => possibleMatch[0] === name[0]);
}

// //* `matchName` - This function takes an array of `driver` objects and a `string`
// as arguments. Each `driver` object has two properties: `name` and `hometown`.
// The function should return each element whose `name` property matches the
// provided `string` argument.



function matchName(array, name) {
    return array.filter((possibleMatch) => possibleMatch.name === name);
}
