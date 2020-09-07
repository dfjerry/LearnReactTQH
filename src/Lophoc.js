import React from "react";
import axios from 'axios';
import Adapter from "./Adapter";
const API = axios.create({
    baseURL: Adapter.BASE_URL
});
export default class Lophoc extends React.Component{
    constructor (props){ //sao khi tao doi tuong
        super(props);
        this.state = {
            form: false,
            lophoc: props.lophoc,
        }
        this.openform = this.openform.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    openform(){
        const form = this.state.form;
        this.setState({
            form: !form,
        })
    }
    changeValue(event){
        const lophoc = this.state.lophoc;//lay state lophoc ra
        lophoc.tenlophoc = event.target.value;//thay doi bien state lop hoc
        this.setState({
            lophoc: lophoc,//nap lai lophoc vao state
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("abc")
    }

    submit(){
        API.post(Adapter.api_lophoc_update.url, {
            _token:"",
            lophoc:this.props.lophoc
        }).then(res=>{
            console.log(res.data)
        }).catch(err=>{

        })
    }

    render() {
        const lophoc = this.state.lophoc;
        const form = this.state.form;
        return (
            <div>
                <h2 onClick={this.openform}>Lớp {lophoc.tenlophoc}</h2>
                <div style={{display: form?"":"none"}}>
                    <input id="input-lophoc" onChange={this.changeValue} type="text" value={lophoc.tenlophoc}/>
                    <button onClick={this.submit}>SUBMIT</button>
                </div>
            </div>

        )
    }

}