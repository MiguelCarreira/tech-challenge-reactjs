import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams  } from "react-router-dom";
import { useState, useEffect } from 'react';

import Map from './Map';

const UserInformation = () => {
    const params = useParams();
    const [user,setUser] = useState();

    useEffect(() => {
        const API_URL = `https://jsonplaceholder.typicode.com/users/${params.id}`;

        fetch(API_URL)
            .then((response) => response.json())
            .then((json) => setUser(json))
    }, [params]);
    
    
    return (
        <>
            {user && 
                <>
                    <div key={user.id} className="user">
                        <Card>
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    Username - {user.username}
                                </Card.Text>
                                <Card.Text>
                                    Email - {user.email}
                                </Card.Text>
                                
                                <Card.Text>
                                    Phone - {user.phone}
                                </Card.Text>
                                <Card.Text>
                                    Website - {user.website}
                                </Card.Text>
                                <Card.Text>
                                    Address - {user.address.street} {user.address.suite}
                                </Card.Text>
                                <Card.Text>
                                    {user.address.city} {user.address.zipcode}
                                </Card.Text>
                                <Card.Text>
                                    Company - {user.company.name}
                                </Card.Text>
                                <Card.Text>
                                    {user.company.catchPhrase}
                                </Card.Text>
                                <Card.Text>
                                    {user.company.bs}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Link to={"/"}>
                            <Button variant="primary">Go back</Button>
                        </Link> 
                    </div>
                    <Map {...user} />
                </>
            } 
        </>
    );
};

export default UserInformation;