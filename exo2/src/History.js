import React from 'react';
import { connect } from 'react-redux';
import { Fade, Stagger } from "react-animation-components";
import shortid from "shortid"; 
import "./style.css";
class History extends React.Component{
    render(){
    
    function listeNew(result) {
        return {
            completed: false,
            id: shortid.generate(),
            result
        }
    }
    const shortidNew = require('shortid');
        console.log(this.props.savedResult);
        console.log(shortid);  
        const resultsInfos = this.props.savedResult.map((result, index) =>{
                return(
            
                    <li key={index} className = "list-unstyled">
                    <p>{index+1}) {result}</p>
                    </li>
                )
            }); 

        return(
        <div className = "calculette histo">
        <h1>Results  History</h1>
        < div className = "histo">
          <ul>
            <Stagger in>
                    <Fade in>
            {resultsInfos}
         </Fade>
            </Stagger>
            </ul>
            </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    renew: () => dispatch(renewAction()),
});

const mapStateToProps = state => {
    return {
        operations: state.appReducer.operations,
        resultat: state.appReducer.resultat,
        savedResult: state.appReducer.savedResult
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(History);