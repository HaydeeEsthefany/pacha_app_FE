import React from 'react';
import {Popup} from 'react-leaflet';
import { Card } from "react-bootstrap";

const MarkerPopup = (props) => {
  const { name } = props.data;
  const { image } = props.data;
  const { description } = props.data;
  const { precio } = props.data;
  console.log(name);

  return  (<Popup>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description} 
          <Card.Text>
            </Card.Text>
           Precio:  {precio}
          </Card.Text>
        </Card.Body>
      </Card>
  </Popup>);
};

export default MarkerPopup;
