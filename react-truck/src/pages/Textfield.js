import { ErrorMessage,useField } from "formik";
import { t } from 'i18next';

function Textfield(){

    // const [field,meta] = useField(props);
// console.log(props);
    return (
        <>
           <div className="form-group">
                
                <input type="email" className="form-control"  placeholder={ t('email') }  id="email" name="email" />
                
            </div>
        </>
    )
}
export default Textfield