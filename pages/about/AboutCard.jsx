import { CardBody, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AboutCard({ pic, title, content, color }) {
    return (
        <Card style={{ width: '28rem', border:`2px solid ${color}`, padding:'5px', borderRadius:'20px', backgroundColor:`${color}`, color:'white' }}>
            <Image variant="top" src={pic} width={90} roundedCircle/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;