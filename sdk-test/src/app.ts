import Typicode from "my-sdk";

const client: Typicode = new Typicode({
    apiKey: "sdfd",
  });

// client.getPosts().then((p)=>{
//     console.log(p);
// })

// client.getPostById(1).then((p)=>{
//     console.log(p);
// })

client
  .createPost({
    id: 2000,
    title: "string",
    body: "string",
  })
  .then((p) => {
    console.log(`Created new post with id ${p}`);
  });