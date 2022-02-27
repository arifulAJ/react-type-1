

import './App.css';
import Props from './Component/Props/Props';

function App() {

  const students=[
    {
      url:"https://nypost.com/wp-content/uploads/sites/2/2021/11/twitter-ban-photo-people-permission-09.jpg?quality=80&strip=all&w=1024",
      name:"ariful islam",
      id:1234,
      house:"emayeatpur",
      rool:1
    },
    {
      url:"https://cdn.pixabay.com/photo/2018/03/29/14/02/portrait-3272294_1280.jpg",
      name:"robule islam",
      id:12334,
      house:"singapur",
      rool:2
    },
    {
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_137gId01IVoOURcWhpUJHgfx0LRNcNGzuA&usqp=CAU",
      name:"monirul islam",
      id:12341,
      house:"choubari",
      rool:3
    },
    { 
      url:"https://image.shutterstock.com/image-photo/handsome-mid-adult-man-smiling-260nw-710258758.jpg",
      name:"akib jabed ",
      id:11234,
      house:"rupshi",
      rool:4
    },
    {
      url:"https://image.shutterstock.com/image-photo/young-man-outdoors-portrait-copy-260nw-89664316.jpg",
      name:"majharul islam",
      id:16234,
      house:"sidny",
      rool:5
    },
  ]
  return (
    <div className="App">
     <h1>type script the react app</h1>
     <Props names={students} />
    </div>
  );
}

export default App;
