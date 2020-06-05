import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getWallet,update} from '../../../Actions/projectActions'

class Updatewallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            Accountname: '',
            Accountnumber: '',
            description: '',
            priority: '',
            errors: '',

        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {

            this.setState({ errors: nextProps.errors })

        }

        if (nextProps.wallet) {
            this.setState({
                id: nextProps.wallet.id,
                Accountname: nextProps.wallet.Accountname,
                Accountnumber: nextProps.wallet.Accountnumber,
                description: nextProps.wallet.description,
                priority: nextProps.wallet.priority,


            })

        }


    }
    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }
    submitHandler = (event) => {
        const updatedwallet = {
            id:this.state.id,
            Accountname: this.state.Accountname,
            Accountnumber: this.state.Accountnumber,
            description: this.state.description,
            priority: this.state.priority,
        }
        this.props.Updatewallet(this.state.id,updatedwallet,this.props.history)

        event.preventDefault()

    }
    componentDidMount() {
        this.props.getWallet(this.props.match.params.id)

    }

    render() {
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">UPDATE Wallet</h5>
                            <hr />
                            <form onSubmit={(event) => this.submitHandler(event)}>
                                <div className="form-group">
                                    <input type="text" value={this.state.Accountname} onChange={(event) => this.changeHandler(event, "Accountname")} className="form-control form-control-lg " placeholder="Account Name" />
                                    <p className="text-danger">{this.state.errors.Accountname}</p>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={this.state.Accountnumber}  onChange={(event) => this.changeHandler(event, "Accountnumber")} className="form-control form-control-lg" placeholder="Account No" />
                                    <p className="text-danger">{this.state.errors.Accountnumber}</p>
                                </div>
                                <div className="form-group">
                                    <textarea value={this.state.description}  onChange={(event) => this.changeHandler(event, "description")} className="form-control form-control-lg" placeholder="Description"></textarea>
                                    <p className="text-danger">{this.state.errors.description}</p>
                                </div>
                                <div className="form-group">
                                    <select value={this.state.priority}  onChange={(event) => this.changeHandler(event, "priority")} className="form-control form-control-lg">
                                        <option value={3}>Display Priority</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                    <p className="text-danger">{this.state.errors.priority}</p>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Update" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({

    errors: state.errors,
    wallet: state.wallet.wallet

})

export default connect(mapStateToProps, { getWallet,update})(Updatewallet)
