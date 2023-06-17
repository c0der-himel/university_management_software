import config from '../../../config';
import ApiErrors from '../../../errors/ApiErrors';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generatedUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generatedUserId();
  user.id = id;
  if (!user.password) user.password = config.user_password as string;
  const createUser = await User.create(user);
  if (!createUser) throw new ApiErrors(400, 'Failed to create user');
  return createUser;
};

export const UserService = {
  createUser,
};
