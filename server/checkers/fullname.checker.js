export const fullnameCheck = (full_name) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const allowed = `${lowercase} ${uppercase}`;
    const parts = full_name.split(" ");

    if (typeof full_name !== 'string') return { status: false, message: 'Full Name must be a string!' };
    if (parts.length !== 2) return { status: false, message: 'Full Name must be of the form "Dummy User"!' };
    if (uppercase.indexOf(parts[0][0]) === -1 || uppercase.indexOf(parts[1][0]) === -1) return { status: false, message: 'First and last name must starts in uppercase!' }; 
    if (parts[0].length <= 2 || parts[1].length <= 2) return { status: false, message: 'First and last name must be at least 3 characters long!' }; 
    if (parts[0].length >= 12 || parts[1].length >= 20) return { status: false, message: 'First or last name too long!' };
    for (let i = 0; i < full_name.length; i++) {
        if (allowed.indexOf(full_name[i]) === -1) return { status: false, message: 'Full Name can only contain letters and spaces!' };
    }
    
    return { status: true, message: 'Full Name is valid!' };
}
