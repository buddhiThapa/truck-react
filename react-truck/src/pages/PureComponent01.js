import { PureComponent } from "react"

class PureComponent01 extends PureComponent{
    constructor(props){
        super()

        this.state = {
            count : 1
        }
    }

    render(){
    // console.log(this.props.data);
        return (
            <>
                <div>
                    <h1>
                        pure Comoponent test { this.state.count }
                    </h1>
                </div>
                <button 
                        onClick={ 
                            ()=>{
                                 this.setState({
                                     count:1
                                })
                                this.props.data(this.state.count)
                            }
                         }
                >
                    Click
                </button>
            </>
        )
    }

    
} 
export default PureComponent01;
