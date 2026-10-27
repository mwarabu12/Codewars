function towerBuilder(n) {
  const tower = [];
​
  for (let i = 0; i < n; i++) {
    const spaces = " ".repeat(n - 1 - i);
    const stars = "*".repeat(2 * i + 1);
​
    const row = spaces + stars + spaces;
​
    tower.push(row);
  }
​
  return tower;
}