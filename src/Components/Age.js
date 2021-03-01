import React, { Component } from 'react';
import { Agastatus } from './Agastatus';

export class age extends Component {
    constructor(){
        super();
        this.state = {
            newDate:"",
            birthday:"1994-08-12",
            showstatus:false
        };
    }
    changebday = () => {
        this.setState({birthday:this.state.newDate,showstatus: true});
        console.log(this.state);
    }
    render() {

        return (
            <div className="container">
                
                <div className="py-4">
                    <h1>AGE CALCULATOR</h1>
                    <form>
                        <div class="form-group row">
                            <label for="example-date-input" class="col-2 col-form-label">Date Of Birth:</label>
                            <div class="col-10">
                                <input type="date" onChange={event => this.setState({ newDate: event.target.value })} id="example-date-input" class="form-control" />
                            </div>
                        </div>
                        <button onClick={()=>this.changebday()} class="btn btn-primary">Calculate</button>
                    </form>
                    <div className="fade age-stats">
                        <Agastatus date={this.state.birthday} />

                    </div>
                </div>
            </div>
        )
    }
}

export default age
