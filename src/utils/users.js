const users = [];
const addusers = ({ id, username, room }) => {
  //Clean Data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate data
  if (!username || !room) {
    return {
      error: 'Username and room are required!',
    };
  }

  //Check for Existing user

  const exixtingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (exixtingUser) {
    return {
      error: 'The Username is in Use !',
    };
  }

  //Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addusers,
  removeUser,
  getUser,
  getUsersInRoom,
};
