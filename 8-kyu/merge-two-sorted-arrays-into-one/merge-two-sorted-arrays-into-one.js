function mergeArrays(arr1, arr2) {
    if (arr1.length == 0 && arr2.length == 0) return []
    let joined = arr1.concat(arr2);
    joined.sort((a, b) => a - b)
    return [...new Set(joined)]
}