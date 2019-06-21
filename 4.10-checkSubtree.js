/*
CHECK SUBTREE:
T1 and T2 are two very large binary trees, with T1 being much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.
** T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2.
*/


//My Solution:
//Time complexity: ??

function checkSubtree(lT, sT) {
  const larger = lT.travers();
  for (const node of larger) {
    if (node.data === sT.data) {
      if (matching(node, sT)) {
        return true;
      }
    }
  }
  return false;
}

function matching(t1, t2) {
  if (!t1 && !t2) return true;
  else if (!t1 || !t2) return false;
  if (t1.data === t2.data) {
    return matching(t1.left, t2.left) && matching(t1.right, t2.right);
  }
  return false;
}
