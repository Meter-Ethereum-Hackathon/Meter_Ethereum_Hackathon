import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import './card.css';

const CardItem = () => {

  return (
    <div className="card ms-auto">
      <img
        className="card-img-top"
        src='./images/nft.logo.jpeg'
        alt="Star Recipe"

      />
      <div className="card-body">
        <h5 className="card-title">
          <span>title #12345</span>
          <Button variant="info" className="sell-button">sell</Button>
        </h5>
        <p className="card-text">
          $ 10M
        </p>
        <p className="card-text text-truncate">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </p>

      </div>
      <div className="card-footer">
          by Author
      </div>
    </div>
  );
}


export default CardItem;
