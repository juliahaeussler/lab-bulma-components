import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';


class FormField extends Component {
    render() {
        return (
            <div className='field column is-half'>
                <label className='label'>{this.props.label}</label>
                <div className="control">
                    <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
                </div>
            </div>
        );
    }
}


// const FormField = (props) => {
//   return (
//     <div className="field column is-half">
//       <label className="label">{props.label}</label>
//       <div className="control">
//         <input
//           className="input"
//           type={props.type}
//           placeholder={props.placeholder}
//         />
//       </div>
//     </div>
//   );
// };




export default FormField;