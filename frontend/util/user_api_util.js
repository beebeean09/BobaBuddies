export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  });
};

export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  })
);
// 
// export const demoUser = (user) => {
//   $.ajax({
//     method: 'GET',
//     url: '/api/user',
//     data: {
//       user: {
//         email: "bobabuddies@gmail.com",
//         password: "bobaboba",
//         first_name: "Buddy",
//         host:
//
//     }
//   })
// }
