import { Container } from "reactstrap"

const Footer = () => {
    return (
        <Container className="text-center p-3 position-fixed mw-100 w-100 bg-dark text-light shadow" style={{ bottom: 0 }}>
            Developed with ❣️ by &nbsp;&nbsp;<a href="http://github.com/Pranav Rustagi" className="text-light">Pranav Rustagi</a>
        </Container>
    )
}

export default Footer;