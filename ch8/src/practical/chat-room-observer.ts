export interface User {
  receive(message: string): void;
}

export class ChatRoom {
  private readonly users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string): void {
    this.users.forEach((user) => user.receive(message));
  }
}

export class ChatUser implements User {
  readonly inbox: string[] = [];

  constructor(public readonly name: string) {}

  receive(message: string): void {
    this.inbox.push(`${this.name} received: ${message}`);
  }
}

const room = new ChatRoom();
const alice = new ChatUser('Alice');
const bob = new ChatUser('Bob');

room.addUser(alice);
room.addUser(bob);
room.sendMessage('Welcome to the chat room.');

export const chatRoomObserverExample = {
  aliceInbox: alice.inbox,
  bobInbox: bob.inbox
};
