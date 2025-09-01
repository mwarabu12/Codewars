const initializeNames = name => {
  const parts = name.split(" ")  
  if (parts.length <= 2) return name;
  return parts.map((part, i) => {
    if (i === 0 || i === parts.length - 1) {
      return part
    } else {
      return part[0] + "."
    }
  }).join(" ")
}