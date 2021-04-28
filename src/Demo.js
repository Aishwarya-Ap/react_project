import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';
// functional Component
const Demo = (props) => {
    return <div className="maindiv_style">
    <h1>Hello, {props.name}</h1>
    <p>this is my name</p>
    </div>
}

// Class Components
/*class Demo extends Component
    render(){
        return <div className="maindiv_style">
            <h1>Hello, {this.props.name}</h1>
            <p>tis is my name</p>
            </div>
    }
}*/
export default Demo;

//props get passed to the component
//are immutable(cant changed/ modify)
//functional components- props
//class components - this.props