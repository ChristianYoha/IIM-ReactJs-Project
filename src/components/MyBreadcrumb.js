import {Card, Breadcrumb} from 'react-bootstrap';

const MyBreadcrumb = ({title, previous, previousUrl})=> {
    return (
        <>
            <Card className="mt-5 text-center">
                <Card.Body>
                    <Card.Title><h1>{title}</h1></Card.Title>
                    <Card.Text >
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
                            {
                                previous && previousUrl && <Breadcrumb.Item href={previousUrl}>{previous}</Breadcrumb.Item>
                            }
                            <Breadcrumb.Item active>{title}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Card.Text>
                </Card.Body>
            </Card>
            <hr/>
        </>
    )
}
export default MyBreadcrumb;