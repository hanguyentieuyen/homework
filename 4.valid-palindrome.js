// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

const isPalindrome = (s) => {
    const nonAlphanumeric = /[^a-zA-Z0-9]/g
    const strippleString = s.replace(nonAlphanumeric, '').toLowerCase()
    return strippleString === strippleString.split('').reverse().join('')
};

//isPalindrome('A man, a plan, a canal: Panama')
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome(''))