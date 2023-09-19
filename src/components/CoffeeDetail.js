import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onClickingEdit, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <Card style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>{coffee.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{coffee.roast}</Card.Subtitle>
          <Card.Text>
            <div>
              <ul>
                <li>Origin | {coffee.origin}</li>
                <li>Price | ${coffee.price}</li>
                <li>Quantity | {coffee.quantity}</li>
              </ul>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <button className="btn btn-success" onClick={() => onClickingDecrement(coffee.id)}>Buy Coffee</button>
      <button className="btn btn-success" onClick={()=> onClickingEdit(coffee.id) }>Edit Coffee</button>
      <button className="btn btn-danger" onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
};

export default CoffeeDetail;
