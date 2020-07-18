import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function App() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
    .get('/api/songs')
    .then(response => {
        setSongs(response.data)
        console.log(response)
    })
    .catch(error => {
      console.log(error)
    });
  }, []);

  return (
    <div>
      {songs.map(item => (
        <li key={item.id}>
          {item.title} - {item.singer}
        </li>
      ))}
    </div>
  );
}