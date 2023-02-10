import React from 'react'
import "./loading.css";
import Spinner from 'react-bootstrap/Spinner';



export default class Loading extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            loading:false,

        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
       if( nextProps.show !== this.state.show ) {
        this.setState({show: nextProps.show});
       }
    }
    render() { 
        return ( 
           <>
           {this.state.show ? (
            <div id='loading-backdrop'>
                <Spinner animation="grow" />
            </div>
           ): null}
           </>
        );
    }
}
 
