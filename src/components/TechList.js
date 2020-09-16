import React, {Component} from 'react';
class TechList extends Component{
    state = {
        newTech: '',
        techs: [
            'Node.js',
            'ReactJs',
            'React Native'
        ]
    }
    getValueInput = value => this.setState({newTech: value.target.value});
    onSubmitValue = event =>{
        event.preventDefault();
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        });
    }
    render(){
        return(
            <form onSubmit={this.onSubmitValue}>
                <ul>
                    {this.state.techs.map(tech => {return <li>{tech}</li>})}
                </ul>
                <input type="text" onChange={this.getValueInput} value={this.state.newTech} placeholder="Digite uma tecnologia" />
                <button type="submit">Adicionar</button>
            </form>
        );
    }
}
export default TechList;