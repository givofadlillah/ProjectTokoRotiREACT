// Data user dummy
const users = [
  {
    id: 1,
    username: "emilys",
    password: "emilyspass",
    name: "Emily",
    role: "admin",
  },
  {
    id: 2,
    username: "admin",
    password: "admin123",
    name: "Administrator",
    role: "superadmin",
  },
];

// Function login mock
export const mockLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    // simulasi loading API
    setTimeout(() => {
      // cari user
      const user = users.find(
        (u) =>
          u.username === username &&
          u.password === password
      );

      // jika user ditemukan
      if (user) {
        resolve({
          success: true,
          message: "Login berhasil",
          accessToken: `mock-token-${Date.now()}`,
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            role: user.role,
          },
        });
      } else {
        reject(new Error("Username atau password salah"));
      }
    }, 1200);
  });
};

// Logout
export const mockLogout = () => {
  localStorage.removeItem("token");
};

// Cek login
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};