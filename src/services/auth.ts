interface IUser {
  name: string;
  email: string;
}

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'sdfsdfshr74365uiewht8493adgkhjksfhuigfyu',
        user: {
          name: 'Mateus Aalexandre',
          email: 'jmamadeu@gmail.com',
        },
      });
    }, 2000);
  });
}
