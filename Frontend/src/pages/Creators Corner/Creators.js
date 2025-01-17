import React from 'react';
import './Creators.css'

const Home = () => {
  const stories = [
    {
      title: 'Lara',
      image: 'https://images.pexels.com/photos/84903/pexels-photo-84903.jpeg?cs=srgb&dl=pexels-burak-the-weekender-84903.jpg&fm=jpg',
      description: 'Photographer',
    },
    {
      title: 'Barry',
      image: 'https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmxvZ2dlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      description: 'Vlogger',
    },
    {
      title: 'Shroff',
      image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=',
      description: 'Entrepreneurship',
    },
    {
      title: 'Harry',
      image: 'https://cdn.5280.com/2018/04/adventurist-backpack_courtesy.jpg',
      description: 'Adventurist',
    },
    {
      title: 'histle',
      image: 'https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3772623.jpg&fm=jpg',
      description: 'journalist',
    },
    {
      title: 'Steve',
      image: 'https://images.pexels.com/photos/1576939/pexels-photo-1576939.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1576939.jpg&fm=jpg',
      description: 'Hill Climber',
    },
    {
      title: 'Lara',
      image: 'https://images.pexels.com/photos/84903/pexels-photo-84903.jpeg?cs=srgb&dl=pexels-burak-the-weekender-84903.jpg&fm=jpg',
      description: 'Photographer',
    },
    {
      title: 'Barry',
      image: 'https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmxvZ2dlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      description: 'Vlogger',
    },
    {
      title: 'Shroff',
      image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=',
      description: 'Entrepreneurship',
    },
    {
      title: 'Harry',
      image: 'https://cdn.5280.com/2018/04/adventurist-backpack_courtesy.jpg',
      description: 'Adventurist',
    },
    {
      title: 'histle',
      image: 'https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3772623.jpg&fm=jpg',
      description: 'journalist',
    },
    {
      title: 'Steve',
      image: 'https://images.pexels.com/photos/1576939/pexels-photo-1576939.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1576939.jpg&fm=jpg',
      description: 'Hill Climber',
    },
  ];

  return (
    <div>
      <header>
        <h1>Creators Corner</h1>
        <p>Explore captivating stories</p>
      </header>
      <main>
        {stories.map((story, index) => (
          <section className="creatorstory" key={index}>
            <img src={story.image} alt={story.title} />
            <h2>{story.title}</h2>
            <p>{story.description}</p>
          </section>
        ))}
      </main>
      <footer>
        <p>&copy; 2023 Readout! Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;