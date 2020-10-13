import React, {Component} from 'react';
import TechItem from './TechItem';
class TechList extends Component{
    state = {
        newTech: '',
        techs: ['Node.js', 'React.js', 'React']
    }
    onChangeValue = value => this.setState({newTech: value.target.value});
    onSubmitTech = event => {
        event.preventDefault();
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        })
    }
    deletComp = techSelected => this.setState({
        techs: this.state.techs.filter(item => item != techSelected)
    })
    render(){
        return(
            <form onSubmit={this.onSubmitTech} >
                <ul>
                    {this.state.techs.map(tech =>{
                        return <TechItem tech={tech} key={tech} eventDelet={this.deletComp} />
                    })}
                </ul>
                <input type="text" onChange={this.onChangeValue} value={this.state.newTech} placeholder="Digite uma tecnologia"/>
                <button type="submit">Gravar</button>
            </form>
        )
    }
}
export default TechList;