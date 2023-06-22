import { useState } from 'react';
import './App.css';
import Post from './components/Post';
import Header from './components/Header';
import SelectedItem from './components/SelectedItem';
import Footer from './components/Footer';
import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

const ottersArray = [
  {image: Barry, name: "Barry", id: 1},
  {image: Robin, name: "Robin", id: 2},
  {image: Maurice, name: "Maurice", id: 3},
  {image: Lesley, name: "Lesley", id: 4},
  {image: Barbara, name: "Barbara", id: 5}
]

function App() {
  const [selectedPostName, setSelectedPostName] = useState('Barry');
  const selectedPost = ottersArray.find(otter => otter.name === selectedPostName);
  return (
    <div>
      <Header />
      <div className='app-content'>
        <ul className='post-list'>
        {ottersArray.map((post)=> (
          <Post 
          image={post.image}
          name={post.name}
          key={post.id}
          setSelectedPostName={setSelectedPostName}
          />
        ))}
        </ul>
        <SelectedItem
          image={selectedPost.image}
          name={selectedPost.name}
          />
      </div>
      <Footer />
  </div>);
}

export default App;
