import { ApiService } from "./ApiService";

class AuthService extends ApiService {
  /**
   * Reset password by using the provided token and password.
   * @param {string} token - The token required to reset the password
   * @param {string} password - The new password to set
   * @returns {Promise<Object>} A Promise that resolves to the reset password object
   */
  resetPassword(token, password) {
    return this.instance.post(`/v1/auth/reset-password?token=${token}`, {
      password,
    });
  }
}

const authService = new AuthService();

export default authService;
