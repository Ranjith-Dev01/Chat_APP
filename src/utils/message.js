const generateMessage = (username, text) => {
  return {
    username,
    text,
    CreatedAt: new Date().getTime(),
  };
};

const generateLocation = (username, url) => {
  return {
    username,
    url,
    CreatedAt: new Date().getTime(),
  };
};

module.exports = { generateMessage, generateLocation };
