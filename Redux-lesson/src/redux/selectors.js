export const getAllBooks = (store) => store.books;
export const getFavoriteBooks = (store) => {
  return store.books.filter((book) => book.favorite);
};
export const getFilter = ({ filter }) => filter;
export const getFilteredbooks = ({ books, filter }) => {
  if (!filter) {
    return books;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = books.filter(({ title, author }) => {
    return (
      title.toLowerCase().includes(normalizedFilter) ||
      author.toLowerCase().includes(normalizedFilter)
    );
  });

  return result;
};
