const VALID_FILTERS = ['longTitles', 'shortTitles'];

const checkFilter = (filter) => {
  if (!filter) {
    return null;
  }
  if (!VALID_FILTERS.includes(filter)) {
    throw new Error('Just "longTitles" and "shortTitles" are valid filters');
  }
  return filter;
};

module.exports = {
  checkFilter,
};
