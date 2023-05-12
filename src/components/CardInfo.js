import { useState } from "react";
import Card from "react-bootstrap/Card";

function CardInfo(promps) {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Card
                style={{ width: "18rem" }}
                className="cardCat cardPosPerfil"
                onClick={() => setShow(false)}
            >
                <Card.Body>
                    <Card.Title>{promps.header}</Card.Title>
                    <Card.Text>{promps.body}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default CardInfo;
