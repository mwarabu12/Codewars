function smallEnough(a, limit){
  for (const num of a) {
    if (num > limit) return false;
  }
  return true;
}