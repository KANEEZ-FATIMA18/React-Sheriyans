import { Heart } from 'lucide-react';

const User_Card = () => {
  return (
 <div className='parent'>
    <div className="top">
       <Heart className='heart' />
        <img src="https://i.pinimg.com/736x/48/0b/6c/480b6c0c12fc5165fcc17b96e57dd189.jpg" alt="" />
    </div>
    <div className="center">
        <h1>Nike Running Shoe</h1>
        <div className="tags">
            <span className="tag1">EU38</span>
            <span className="tag2">BLACK/WHITE</span>
           
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, dolore?</p>

    </div>
    <div className="bottom">
            <h4>$120</h4>
              <button className="btn">Add to Cart</button>
      
    </div>
 </div>
  )
}

export default User_Card