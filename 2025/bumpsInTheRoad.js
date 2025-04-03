// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

// Your car is old, it breaks easily. The shock absorbers are gone and you
// think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing
// either flat road (_) or bumps (n). If you are able to reach home safely
// by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x) {
  const bumps = x.replaceAll('_', '');
  return bumps.length > 15 ? 'Car Dead' : 'Woohoo!';
}

console.log(bump('n'));
console.log(bump('__nn_nnnn__n_n___n____nn__nnn'));
console.log(bump('nnn_n__n_n___nnnnn___n__nnn__'));
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'));
console.log(bump('______n___n_'));
