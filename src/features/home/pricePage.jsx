import{
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PricePage() {
    return (
        <>
            {/* Pricing Hero Section */}
            <div className="hero-banner">
                <Container className="hero-content">
                    <h1 className="hero-title">Our Pricing Plans</h1>
                    <p className="hero-subtitle">
                        Flexible pricing options to suit your business needs
                    </p>
                    <p className="hero-description">
                        Choose from our range of affordable plans designed to help
                        your business grow
                    </p>
                </Container>
            </div>
            {/* Pricing Plans Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">Pricing Plans</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">Basic Plan</h4>
                                    <h2 className="price mb-3">$19/mo</h2>
                                    <ul>
                                        <li>5 Projects</li>
                                        <li>10 GB Storage</li>
                                        <li>Email Support</li>
                                        <li>Basic Analytics</li>
                                    </ul>
                                    <Button as={Link} to='/contact' variant="primary">Contact Sales</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">Pro Plan</h4>
                                    <h2 className="price mb-3">$49/mo</h2>
                                    <ul>
                                        <li>20 Projects</li>
                                        <li>100 GB Storage</li>
                                        <li>Priority Email Support</li>
                                        <li>Advanced Analytics</li>
                                    </ul>
                                    <Button as={Link} to='/contact' variant="primary">Contact Sales</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">

                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">Enterprise Plan</h4>
                                    <h2 className="price mb-3">$99/mo</h2>
                                    <ul>
                                        <li>Unlimited Projects</li>
                                        <li>1 TB Storage</li>
                                        <li>24/7 Phone & Email Support</li>
                                        <li>Comprehensive Analytics</li>
                                    </ul>
                                    <Button as={Link} to='/contact' variant="primary">Contact Sales</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default PricePage;