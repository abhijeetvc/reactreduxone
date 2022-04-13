import { connect } from "react-redux"

function Counter(props){

    return(
        <div>
            <h1>Counter</h1>
            <p>Count is: {props.count}</p>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        count: state.counterReducer
    }
}

export default connect(mapStateToProps)(Counter)