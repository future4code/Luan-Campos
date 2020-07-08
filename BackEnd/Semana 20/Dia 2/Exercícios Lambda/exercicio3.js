exports.handler = async (event) => {
  const sum = event.key1 + event.key2;
  const response = {
    body: sum,
  };
  return response;
};
