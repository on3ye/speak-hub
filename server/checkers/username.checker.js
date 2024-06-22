export const usernameCheck = (username) => {
    const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789._';

    if (username.length <= 2) return { status: false, message: 'Username must be at least 3 characters!' };
    if (username.length >= 18) return { status: false, message: 'Username too long!' };
    if (typeof username !== 'string') return { status: false, message: 'Username must be a string!' };
    for (let i = 0; i < username.length; i++) {
        if (allowed.indexOf(username[i]) === -1) return { status: false, message: 'Username can only contain lowercase letters, numbers, (.) and (_)!' };
    }
    return { status: true, message: 'Username passed all the checks!' };
}
