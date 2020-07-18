import React,{ Component } from "react";
import aixos from 'axios';
import {
   Row,Col,Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        aixos.get('https://5ec1b.sse.codesandbox.io/products').then(res=>{
            this.setState({
                products: res.data
            });
        });
    }
    render(){
        const {products} = this.state;
        return(
            <div>
                <Container>
                <h2>Products</h2>
                <Row>
                {products.map(product =>(
                    <Col sm="4">
                    <Card width="300px">
                        <CardImg top width="100%" src={product.image} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>{product.description}</CardText>
                        <Button>Add to cart</Button>
                        </CardBody>
                    </Card>
                    </Col>
                ))}
                </Row>
                </Container>
            </div>
        );
    }
}
export default Products;