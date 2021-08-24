import React,{Component} from 'react';
import './AddItem.css'
class AddItem extends Component {
    state={
        name: "",
        age: ""
    }
     handleChange = (e)=>{
     this.setState({[e.target.id] : e.target.value})
        console.log(e.target.value)
    }
    handleClick=(e)=>{

        e.preventDefault();
        // this.props.addItem(this.state);
        
       
     if (this.state.name==='' || this.state.age==='' )
     {}
    
     else
     {this.props.addItem(this.state);
    }
        this.setState({name: "", age:""})
        
    }
    render(){
       return(
        <div className="container">
         <form onSubmit={this.handleClick}>
         <input className="text" type="text" id="name" placeholder="Enter Name" onChange={this.handleChange} value={this.state.name}/>
           <input className="number" type="number" id="age" placeholder="Enter Age" onChange={this.handleChange} value={this.state.age}/>
           <input className="action" type="submit" value="submit"/>
         </form>
         </div>
       )
    }
}
export default AddItem