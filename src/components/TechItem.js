import React from 'react';
import '../App.css';
function TechItem({tech, eventDelet}){
    return(
        <li key={tech}>
            {tech}
            <button type="button" class="deletComp" onClick={()=>eventDelet(tech)}>X</button>
        </li>
    )
}
export default TechItem;