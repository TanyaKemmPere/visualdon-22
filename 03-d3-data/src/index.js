import { json } from 'd3-fetch'

Promise.all ([
    json("https://jsonplaceholder.typicode.com/posts"),
    json("https://jsonplaceholder.typicode.com/users")
])
    .then(([posts, users]) => {
        const usernames = users.map((d, i) => {
            
            console.log(d.username);
            return d.username;
        })
    })
    .catch(function(error)
    {
        console.log(error);
    })