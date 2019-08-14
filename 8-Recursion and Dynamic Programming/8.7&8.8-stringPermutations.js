const permute = (str) => {
  if (str.length < 2) return [str];
  const permutations = [];
  const cache = new Set();
  for (let i = 0; i < str.length; i++) {
    const ltr = str[i];
    if (cache.has(ltr)) continue;
    cache.add(ltr)
    const otherLtrs = str.slice(0, i) + str.slice(i);
    permute(otherLtrs).forEach(perm => {
      permutations.push(ltr + perm)
    });
  }
  return permutations;
}
