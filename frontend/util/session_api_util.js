
export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};

export const demoLogin = () => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data:
      { user: {
        email: "buddies@gmail.com",
        password: "bobaboba",
        first_name: "Buddy",
        host: false
        }
      }
  });
};
