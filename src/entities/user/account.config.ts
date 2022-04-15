import { UserDocument } from './account.schema';

export const userDataAlreadyExistTemplate = (newUser: Partial<UserDocument>, { email, username }: Partial<UserDocument>) => {
	return `${newUser.email === email && 'email'} ${newUser.username === username && 'username'} already exist.`;
};
