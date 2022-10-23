import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../stylesheets/User.scss";

const User = ({id, name, username, email, address, onSelect}) => {
    return (
        <div className="user" key={id} onClick={() => onSelect(id)}>
            <Card>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Username - {username}
                    </Card.Text>
                    <Card.Text>
                        Email - {email}
                    </Card.Text>
                    <Card.Text>
                        Address - {address.street} {address.suite}
                    </Card.Text>
                    <Card.Text>
                        {address.city} {address.zipcode}
                    </Card.Text>
                    <Link to={`/user/${id}`}>
                        <Button variant="primary">See more details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
  };

export default User;