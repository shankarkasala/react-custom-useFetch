import React from 'react';
import './style.css';
import useFetch from './useFetch';
export default function App() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log(data);
  return (
    <div>
      {data &&
        data.map((title) => {
          return <div key={Math.random() * 10}>{title.title}</div>;
        })}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
