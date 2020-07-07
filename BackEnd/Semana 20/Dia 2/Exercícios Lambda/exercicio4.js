exports.handler = async (event) => {
  let isEmail = true;

  if (!event.email) {
    isEmail = false;
    return {
      isEmail,
      reason: "Nenhum email inserido",
    };
  }
  if (event.email.indexOf("@") === -1) {
    isEmail = false;
    return {
      isEmail,
      reason: "Não possui @",
    };
  }

  if (event.email.indexOf(".") === -1) {
    isEmail = false;
    return {
      isEmail,
      reason: "Não possui @",
    };
  }

  return { isEmail };
};
