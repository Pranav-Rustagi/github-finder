import { Col, Container, Row } from "reactstrap";

const UserDetails = ({ user }) => {
    return (
        <Container>
            <Row className="mb-5">
                <Col sm={6} className="text-center p-2">
                    <img src={user.avatar_url} alt="" className="w-25 rounded-circle" />
                    <h3 className="mt-3 mb-0">{user.name}</h3>
                    <h6 className="text-muted">{user.login}</h6>
                    {
                        user.location &&
                        <p>{user.location}</p>
                    }
                    <br />
                    <div className="d-flex flex-wrap justify-content-center">
                        <p className="d-inline-block overflow-hidden text-small rounded border my-2 mx-1 border-success">
                            <span className="d-inline-block bg-success text-light py-1 px-2">Followers</span>
                            <span className="d-inline-block py-1 px-2 text-success">{user.followers}</span>
                        </p>
                        <p className="d-inline-block overflow-hidden text-small rounded border my-2 mx-1 border-danger">
                            <span className="d-inline-block bg-danger text-light py-1 px-2">Following</span>
                            <span className="d-inline-block py-1 px-2 text-danger">{user.following}</span>
                        </p>
                        <p className="d-inline-block overflow-hidden text-small rounded border my-2 mx-1 border-primary">
                            <span className="d-inline-block bg-primary text-light py-1 px-2">Public Repos</span>
                            <span className="d-inline-block py-1 px-2 text-primary">{user.public_repos}</span>
                        </p>
                        <p className="d-inline-block overflow-hidden text-small rounded border my-2 mx-1 border-warning">
                            <span className="d-inline-block bg-warning text-light py-1 px-2">Public Gists</span>
                            <span className="d-inline-block py-1 px-2 text-warning">{user.public_gists}</span>
                        </p>
                    </div>
                    <br />
                    <div>
                        <a href={user.html_url} className="btn btn-dark btn-lg">Github profile</a>
                    </div>
                </Col>
                <Col sm={6} className="p-2">
                    {
                        user.bio &&
                        <>
                            <h4>Bio</h4>
                            <p>{user.bio}</p>
                            <br />
                        </>
                    }




                    {
                        user.company &&
                        <p><span className="text-bold text-secondary">Works at:</span> {user.company}</p>
                    }
                    {
                        user.blog &&
                        <p><span className="text-bold text-secondary">Website:</span> <a href={user.blog}>{user.blog}</a></p>
                    }
                    {
                        user.hireable !== null &&
                        <p><span className="text-bold text-secondary">Hireable:</span> {user.hireable ? "Yes" : "No"}</p>
                    }
                    <br />
                    <h4>Recent Repos</h4>
                    {
                        user.user_repos && user.user_repos.length > 0 &&
                        user.user_repos.map(repo => {
                            return (
                                <a href={repo.url} className="btn btn-outline-danger me-2 my-2">{repo.name}</a>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default UserDetails;