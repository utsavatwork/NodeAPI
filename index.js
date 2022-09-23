import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      sender: 'utsav642'
    }),
    headers: { 'Content-Type': 'application/json'}
}).then(res => res.json())
  .then(json => console.log(json));