export default function(server) {

  let authors = server.createList('author', 3);
  authors.forEach((author) => {
    server.createList('article', 4, { author });
  });
}
