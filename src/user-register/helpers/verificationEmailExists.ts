export async function emailExists(email: string, model: any): Promise<{ exists: boolean; userData?: any }> {
    const userData = await model.findOne({ email: email });
    if (userData) {
        return { exists: true, userData };
    }
    return { exists: false };
}