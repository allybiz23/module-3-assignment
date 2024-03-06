//Returns the number of matches of searchstr found in target.
function FindCount(target, searchstr) {
    const regex = new RegExp(searchstr, 'g');
    const matches = target.match(regex);
    return matches ? matches.length : 0;
}
//Replaces all occurrences of find in target with replacement.
function FindReplace(target, find, replacement) {
    const regex = new RegExp(find, 'g');
    return target.replace(regex, replacement);
}
//Replaces all double occurrences of a word in target with a single occurrence of the word.
function ReplaceDouble(target, replacement) {
    const regex = /\b(\w+)\b\s+\b\1\b/g;
    return target.replace(regex, replacement);
}
//Makes the first character of every sentence a capital letter.
function StartCap(target) {
    const regex = /(?<=\.)\w/g;
    return target.replace(regex, match => match.toUpperCase());
}
//Highlights a specific keyword in the target by wrapping it with HTML <span> tags.
function HighlightKeyword(target, keyword) {
    const regex = new RegExp(keyword, 'g');
    return target.replace(regex, match => `<span class="highlight">${match}</span>`);
}
