import { Document } from 'mongoose';
import { User } from './users.model';

export const findLastUserId = async (): Promise<string | undefined> => {
  const lastUser: Document | null = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return lastUser?.id;
};

export const generatedUserId = async (): Promise<string> => {
  const currentUserId =
    (await findLastUserId()) || (0).toString().padStart(5, '0');
  return (parseInt(currentUserId) + 1).toString().padStart(5, '0');
};
