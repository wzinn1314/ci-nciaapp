import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: string;
};

const USERS_STORAGE_KEY = "wesk_users";

async function readUsers(): Promise<User[]> {
  const storedUsers = await AsyncStorage.getItem(USERS_STORAGE_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
}

async function writeUsers(users: User[]) {
  await AsyncStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

export async function initializeDatabase() {
  const users = await readUsers();
  if (!users.length) {
    await writeUsers([]);
  }
}

export async function createUser(user: { name: string; email: string; password: string }) {
  const normalizedEmail = user.email.trim().toLowerCase();
  const users = await readUsers();

  const existingUser = users.find((item) => item.email === normalizedEmail);
  if (existingUser) {
    throw new Error("USER_EXISTS");
  }

  const createdUser: User = {
    id: `${Date.now()}`,
    name: user.name.trim(),
    email: normalizedEmail,
    password: user.password,
    created_at: new Date().toISOString(),
  };

  const nextUsers = [createdUser, ...users];
  await writeUsers(nextUsers);
  return createdUser;
}

export async function getUserByEmail(email: string) {
  const users = await readUsers();
  return users.find((item) => item.email === email.trim().toLowerCase()) ?? null;
}

export async function listUsers() {
  return readUsers();
}
