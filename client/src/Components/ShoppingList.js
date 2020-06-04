import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import { CSSTransition,TransitionGroup} from 'react-transition-group';
import {v1 as uuid} from 'uuid';
import{connect } from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions';
import propTypes from 'prop-types';

class ShoppingList extends Component{

    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick=(id)=>{
        this.props.deleteItem(id);
    }
    
    render()
    {
        const {items}=this.props.item;
        return(
            <Container>
               
           
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({_id,name})=>(
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroup>
                                {name}
                                <Button className="remove" color="danger"  
                                onClick={this.onDeleteClick.bind(this,_id)}>
                                    &times;
                                </Button>
                               
                            </ListGroup>
                        </CSSTransition>

                    ))}
                </TransitionGroup>
            </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes={
    getItems:propTypes.func.isRequired,
    item:propTypes.object.isRequired
}

const mapStateToProps=(state)=>({
    item:state.item
});

export default connect(mapStateToProps,
    { getItems,deleteItem})(ShoppingList);