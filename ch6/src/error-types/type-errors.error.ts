let num: number = 42;
num = 'Hello';

let user: string = 'John';
user.push('Doe');

interface User {
  firstName: string;
  lastName?: string;
}

function fetchUserFromAPI(): User | null {
  return Math.random() > 0.5 ? { firstName: 'Rukee', lastName: 'Doe' } : null;
}

const fetchedUser = fetchUserFromAPI();
console.log(fetchedUser.firstName);
