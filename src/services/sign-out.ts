// authService.js

const authService = {
  // Log out the user from the application
  logout: async () => {
    try {
      // Clear the token from localStorage or sessionStorage
      localStorage.removeItem("authToken");

      // You can also clear any user-specific data from other places like redux or context
      // store.dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  },
};

export default authService;
