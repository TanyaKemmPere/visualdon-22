import * as d3 from 'd3';
import { json } from 'd3-fetch'

d3.select("body")
  .append("div")
  .attr("id","nombrePostsUtilisateurs");

d3.select("#nombrePostsUtilisateurs")
  .append("h1")
  .text("Nombre de posts par utilisateur : ");

let post_filtered;
let texteLePlusLong = 0;
let userDuTexteLePlusLong;


Promise.all ([
    json("https://jsonplaceholder.typicode.com/posts"),
    json("https://jsonplaceholder.typicode.com/users")
])
    .then(([posts, users]) => {
      
      console.log(posts);
      
      //afficher le nbr de posts par utilisateur
      users.forEach(user => {
        post_filtered = posts.filter(post=>post.userId === user.id)
        console.log(post_filtered)
        /*ce truc avec le post_filtered j'avoue que je na'i pas compris par
          moi même du coup j'ai regardé avec Jules comment il avait fait*/
        d3.select("#nombrePostsUtilisateurs")
          .append("p")
          .text(`${user.name}: ${post_filtered.length} posts`);
      });

      //afficher l'utilisateur avec le post le plus long
      posts.forEach(post => {
        if(post.body.length > texteLePlusLong)
        {
          texteLePlusLong = post.body.length;
          userDuTexteLePlusLong = post.userId;
        }

      })

      
      d3.select("body")
        .append("div")
        .attr("id","userDuPostLePlusLong");

      d3.select("#userDuPostLePlusLong")
        .append("h1")
        .text("La personne qui a le plus long post c'est:");

      d3.select("#userDuPostLePlusLong")
        .append("p")
        .text(`${users[userDuTexteLePlusLong].name}, avec une publication de ${texteLePlusLong} caractères.`)

    })


    .catch(function(error)
    {
        console.log(error);
    })


/*
[
  {
    nom_utilisateur: 'Machin',
    ville: 'Truc',
    nom_companie: 'Bidule',
    titres_posts: [
      'Titre 1',
      'Titre 2',
    ]
  },
  // ...
]
*/