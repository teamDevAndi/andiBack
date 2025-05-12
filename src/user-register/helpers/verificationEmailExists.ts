export async function emailExists(email: string, model: any): Promise<{ exists: boolean; existingUser?: any }> {
    const existingUser = await model.findOne({ email: email });
    if (existingUser) {
        return { exists: true, existingUser };
    }
    return { exists: false };
}