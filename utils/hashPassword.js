import bcrypt from 'bcrypt';

export async function hashPasswordIfPresent(data) {
    if (data.password) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
    }
    return data;
}