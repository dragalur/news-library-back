import { UserDocument } from './account.schema';

export const userDataAlreadyExistTemplate = (newUser: Partial<UserDocument>, { email, username }: Partial<UserDocument>) => {
	const isEmailExist = newUser.email === email ? 'email' : '';
	const isUserNameExist = newUser.username === username ? 'username' : '';
	const doesAndNeed = isEmailExist && isUserNameExist ? ' and ' : '';

	const error = `${isEmailExist}${doesAndNeed}${isUserNameExist} already exist.`;
	return error.charAt(0).toUpperCase() + error.slice(1);
};
