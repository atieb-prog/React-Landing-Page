import{
    Container,
    Col,
    Row,
    Card,
} from "react-bootstrap";

function FaqPage() {
    return (
        <>
            {/* FAQ Hero Section */}
            <div className="hero-banner">
                <Container className="hero-content">
                    <h1 className="hero-title">Frequently Asked Questions</h1>
                    <p className="hero-subtitle">
                        Find answers to common questions about our services
                    </p>
                    <p className="hero-description">
                        If you have any other questions, feel free to contact us
                        directly
                    </p>
                </Container>
            </div>
            {/* FAQ Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">FAQs</h2>
                    <Row>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">What services do you offer?</h4>
                                    <Card.Text>
                                        We offer a range of digital services including web
                                        development, mobile app development, digital marketing,
                                        and more.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">How can I get a quote?</h4>
                                    <Card.Text>
                                        You can contact us through our contact page or email us
                                        directly to discuss your project and get a customized
                                        quote.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">What is your refund policy?</h4>
                                    <Card.Text>
                                        We offer a 30-day money-back guarantee on all our services.
                                        If you are not satisfied, you can request a full refund within
                                        this period.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">Do you offer customer support?</h4>
                                    <Card.Text>
                                        Yes, we provide 24/7 customer support through various channels
                                        including email, phone, and live chat.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">How long does a project typically take?</h4>
                                    <Card.Text>
                                        The duration of a project depends on its complexity and scope.
                                        We provide estimated timelines during the proposal stage.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">What industries do you specialize in?</h4>
                                    <Card.Text>
                                        We have experience working with a variety of industries including
                                        healthcare, finance, e-commerce, education, and more.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">Can you help with ongoing maintenance?</h4>
                                    <Card.Text>
                                        Yes, we offer ongoing maintenance and support packages to ensure
                                        your digital solutions remain up-to-date and secure.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">What technologies do you use?</h4>
                                    <Card.Text>
                                        We utilize a wide range of technologies including React, Node.js,
                                        Python, AWS, and more, depending on the project requirements.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">How do I get started?</h4>
                                    <Card.Text>
                                        To get started, simply reach out to us via our contact page or
                                        email us directly. We'll schedule a consultation to discuss your
                                        needs and how we can assist you.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">Do you offer custom solutions?</h4>
                                    <Card.Text>
                                        Yes, we specialize in creating custom digital solutions tailored
                                        to meet the unique needs of each client.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">What is your pricing structure?</h4>
                                    <Card.Text>
                                        Our pricing varies based on the scope and complexity of the
                                        project. We provide detailed quotes after understanding your
                                        requirements.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-4">
                            <Card className="h-100">
                                <Card.Body>
                                    <h4 className="mb-3">Can you work with my existing team?</h4>
                                    <Card.Text>
                                        Absolutely! We can collaborate with your existing team to ensure
                                        seamless integration and project success.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default FaqPage;