import { NewHome } from "../components/NewHome";
import { connect } from "react-redux";
import {addToCart} from '../Services/Action/action'

const mapStateToProps = State =>({

})

const mapDispatchtoProps = dispatch =>({
    addToCartHandler:data => dispatch=(addToCart(data))
} )

export default connect(mapStateToProps,mapDispatchtoProps)(NewHome)

// export default NewHome;