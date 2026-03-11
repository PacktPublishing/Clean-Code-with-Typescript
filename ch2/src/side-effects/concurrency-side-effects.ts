export let currentUser = "Alice";

export type UserRecord = {
  id: string;
  name: string;
};

export async function fetchUserData(userId: string): Promise<void> {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = (await response.json()) as UserRecord;
  currentUser = data.name;
}

export function simulateConcurrentCalls(): Promise<void[]> {
  return Promise.all([fetchUserData("1"), fetchUserData("2")]);
}
