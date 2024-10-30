// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Write a function that when given a URL as a string, parses out just the
// domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// function domainName(url) {
//   url.includes('http://')
//     ? (url = url.replace('http://', ''))
//     : (url = url.replace('https://', ''));
//   url.includes('www.') ? (url = url.replace('www.', '')) : (url = url);
//   let endIndex = url.indexOf('.');
//   return url.slice(0, endIndex);
// }

// Best practice
function domainName(url) {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}

// // Best practice 2 ???
// function domainName(url) {
//   return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
// }

console.log(domainName('http://github.com/carbonfive/raygun')); // github
console.log(domainName('http://www.zombie-bites.com')); // zombie-bites
console.log(domainName('https://www.cnet.com')); // cnet
