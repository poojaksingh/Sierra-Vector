export const tableAscendingSort = async (arr, column) => {
  const data = arr.sort((a, b) => parseInt(a[column]) - parseInt(b[column]));
  return data;
};

export const tableDescendingSort = async (arr, column) => {
  const data = arr.sort((a, b) => parseInt(b[column]) - parseInt(a[column]));
  return data;
};

export const tableFilter = async (arr, column, value) => {
  const data = arr.filter((row) => row[column] === value);
  return data;
};
