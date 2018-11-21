import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConfigureStore } from "../redux/ConfigureStore";
import { addOperationAction, calculateAction, renewAction } from '../redux/Actions';
import "./style.css";
import Case from './Touches'; 
import Resultats from './Resultats'; 

const store = ConfigureStore ();

class Calculette extends React.Component {
    constructor(props){
        super(props);  
    }
    render() {
        const { renew, resultat, addOperation,calculate } = this.props; 
        return ( <div className = "calculette" >
            <h1 className="titleCalc"> Ma calculette </h1>
                 <Resultats>{resultat}</Resultats>
                <div className="laTouche">
                {
                    [7, 8, 9, 4, 5, 6, 1, 2, 3,  0, '.'].map((c) => <Case key={c} onClick={() => addOperation(c)}> {c}</Case>)}
                <Case className="result" onClick={()=> calculate()}>= </Case>
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
    renew: ()=> dispatch(renewAction())
});

const mapStateToProps = state => {
    return{
    operations: state.appReducer.operations,
    resultat: state.appReducer.resultat, 
    }
};

const ReduxCalculator = connect(mapStateToProps, mapDispatchToProps)(Calculette);

ReactDom.render(  <Provider store={store}><ReduxCalculator /></Provider>,
  document.getElementById('app')
);