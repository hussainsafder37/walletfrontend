import React, { Component } from 'react'
import {Createwallet} from '../../../Actions/projectActions'
import {connect} from 'react-redux'


class createwallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Accountname: '',
            Accountnumber: '',
            description: '',
            priority: '',
            errors:'',

        }
    }
     componentWillReceiveProps(nextProps){
        if(nextProps.errors){

            this.setState({errors:nextProps.errors})

        }


     }
    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }
    submitHandler = (event) => {
        const newWallet = {
            Accountname: this.state.Accountname,
            Accountnumber: this.state.Accountnumber,
            description: this.state.description,
            priority: this.state.priority,
        }
       this.props.Createwallet(newWallet,this.props.history)
        event.preventDefault()

    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Wallet</h5>
                            <hr />
                            <form onSubmit={(event)=>this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "Accountname")} className="form-control form-control-lg " placeholder="Account Name" />
                                    <p className="text-danger">{this.state.errors.Accountname}</p>
                                    </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.changeHandler(event, "Accountnumber")} className="form-control form-control-lg" placeholder="Account No" />
                                    <p className="text-danger">{this.state.errors.Accountnumber}</p>
                                    </div>
                                <div className="form-group">
                                    <textarea onChange={(event) => this.changeHandler(event, "description")} className="form-control form-control-lg" placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                    </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.changeHandler(event, "priority")} className="form-control form-control-lg">
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                    <p className="text-danger">{this.state.errors.priority}</p>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Create" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state)=> ({

  errors: state.errors

})

export default connect(mapStateToProps,{Createwallet})(createwallet)
