import React from 'react';
import marked from 'marked';
import {Row, Col, Container, Card} from 'react-bootstrap';

const MarkdownGenerator = props => {
    const {value, change} = props;

    function markDown() {
        var rawMarkup = marked(value);
        return {__html: rawMarkup};
        }

    return (
        
        <Container>
            <Row>
                <h2>Markdown Generator App</h2> 
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header as="h6">Editor</Card.Header>
                            <Card.Body>
                                <textarea id = 'editor' value = {value} onChange={change}/>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header as="h6">Preview</Card.Header>
                            <Card.Body>
                                <div id='preview' dangerouslySetInnerHTML={markDown()}/>
                            </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};


export default MarkdownGenerator;