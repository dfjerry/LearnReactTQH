import React from "react";

export default class Demo extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            age: props.age,// băt đầu sinh ra state sẽ lấy theo props
        }
        this.changeAge = this.changeAge.bind(this);// nap this vao changeAge
    }
    componentDidMount() {//didmount -> xử lí sau khi render xong -> chạy didmount -> set state -> render lai
        //goi api lay du lieu roi setstate
        this.setState({age:22});
    }

    changeAge(){
        let v = this.state.age+1;
        this.setState({age:v});
    }
    render() {
        return <h2 onClick={this.changeAge}>{this.props.title + " - " + this.props.idol + " - " + this.props.age  + " - " + this.state.age}</h2>;

    }

}