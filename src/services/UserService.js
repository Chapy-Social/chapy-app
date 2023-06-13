import { ApiService } from "./ApiService";

class UserService extends ApiService {
  /**
   * Get a user by their ID
   * @param {ObjectId} id - The ID of the user to get
   * @returns {Promise<User>}
   */
  get(id) {
    return this.instance.get(`/v1/users/public/${id}`);
  }
}

const userService = new UserService();

export default userService;
