import React from 'react';
import { Provider, connect } from 'react-redux';
import { addOperationAction, calculateAction, renewAction, addResultAction } from '../redux/Actions';
import "./style.css";
import Case from './Touches'; 
import Resultats from './Resultats'; 


class Calculette extends React.Component {
    
    constructor(props){
        super(props);  
    }

    
    render() {

        console.log(this.props)

        const { renew, resultat, addOperation,calculate,saveResult } = this.props; 
        return ( <div className = "calculette" >
            <h1 className="titleCalc"> Ma calculette </h1>
                 <Resultats>{resultat}</Resultats>
                <div className="laTouche">
                {
                    [7, 8, 9, 4, 5, 6, 1, 2, 3,  0, '.'].map((c) => <Case key={c} onClick={() => addOperation(c)}> {c}</Case>)}
                <Case className="result" onClick={()=> {calculate();saveResult()}}>= </Case>
                </div>
                <div className="operateurs">
                {['/', '*', '-', '+'].map((c)=><Case key={c} onClick={()=> addOperation(c)}>{c}</Case>)}
                <div className="renew" onClick={()=> renew() }>CE</div></div>
            
            
            </div>
            
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addOperation: (c) => dispatch(addOperationAction(c)),
    calculate: () => {dispatch(calculateAction())}, 
    saveResult: () => dispatch(addResultAction()),
    renew: ()=> dispatch(renewAction()), 
});

const mapStateToProps = state => {
    return{
    operations: state.appReducer.operations,
    resultat: state.appReducer.resultat, 
    savedResult: state.appReducer.savedResult
    }
};

const ReduxCalculator = connect(mapStateToProps, mapDispatchToProps)(Calculette);
export default ReduxCalculator;