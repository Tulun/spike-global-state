import { ajax } from "rxjs/ajax";

export const users$ = ajax
  .getJSON("https://jsonplaceholder.typicode.com/users")
  .pipe(map((response) => response.data));
