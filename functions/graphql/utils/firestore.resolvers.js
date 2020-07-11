const itemsResolver = (docs) => {
  return docs.map((doc) => {
    const item = doc.data();
    return Object.keys(item).reduce(
      (result, key) => ({
        ...result,
        [key]: item[key],
      }),
      {
          id: doc.id
      }
    );
  });
};

module.exports = {
    itemsResolver
}