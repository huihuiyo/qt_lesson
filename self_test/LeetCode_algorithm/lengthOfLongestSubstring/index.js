var lengthOfLongestSubstring = function(s) {
    var bCount = 0;
    var curStr = '';
    for (let i = 0; i < s.length; i++) {
        if(curStr[curStr.length - 1] != s[i]) {
            bCount++;
            curStr += s[i];
        }
    }
};