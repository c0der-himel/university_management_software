import config from '../../../config';
import { IUser } from './users.interface';
import { User } from './users.model';
import { generatedUserId } from './users.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generatedUserId();

  user.id = id;

  if (!user.password) user.password = config.user_password as string;

  const createUser = await User.create(user);

  if (!createUser) throw new Error('Failed to create user');

  return createUser;
};

export default {
  createUser,
};
