function intersection(arr1 = [], arr2 = []) {
  let arr = [];

  arr1.forEach((item1) => {
    arr2.forEach((item2) => {
      if (item1 === item2) {
        arr.push(item1);
      }
    });
  });

  return arr.length === 0 ? "ϕ" : arr;
}

module.export = intersection;
