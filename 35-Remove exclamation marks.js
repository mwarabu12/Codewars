/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string*/

function removeExclamationMarks (s) {
    let final = "";
    for (let i = 0; i < s.length; i++){
        if (s[i] !== "!"){
            final += s[i]
        }
    };
    return final;
}
console.log (removeExclamationMarks ("What a win!!"))