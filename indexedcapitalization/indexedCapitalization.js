// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!


function capitalize(s, arr) {

    str = s.split("");
    for(let i = 0; i < arr.length; i++) {
        if(str[arr[i]]) {
            str[arr[i]] = str[arr[i]].toUpperCase();
        }
    }
    str = str.join('');
    return str;
}


// test case


console.log(capitalize("windows", [1,3,4])) //
console.log(capitalize("macos", [1,3,4])) // 
console.log(capitalize("android", [1,3,4])) // 
console.log(capitalize("other", [1,3,4])) // 