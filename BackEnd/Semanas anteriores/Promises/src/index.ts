import axios from "axios";

// 1 {
//     A. Endpoint GET.
//     B. Any[]
// }
// 2 {
//     A.
// }
// 3 {
//     A.
//     B. 
// }
// 4 {
//     A.
// }


const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`;

type User = {
  id: string;
  name: string;
  email: string;
};

const getSubs = async (): Promise<User[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const createNews = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  await axios.put(`${baseUrl}/news`, {
    title,
    content,
    date,
  });
};

const sendNotification = async (
  users: User[],
  message: string
): Promise<void> => {
  for (const user of users) {
    await axios.post(`${baseUrl}/notifications/send`, {
      subscriberId: user.id,
      message,
    });
  }

  console.log("Todas as notificações foram enviadas!");
};

const main = async () => {
  try {
    const subs = await getSubs();
    console.log("Subs: ", subs);

    await createNews("Primeira notícia", "Notícia fresquinha ihu", 123);
    console.log("Notícia criada!");

    const promisesArray = [];
    for (const sub of subs) {
      promisesArray.push(sendNotification(sub, "Veja agora a nova notícia!"));
    }
  } catch (err) {
    console.log(err);
  }
};

main();
