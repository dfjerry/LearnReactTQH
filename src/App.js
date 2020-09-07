import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from "./Demo";
import Lophoc from "./Lophoc";
import axios from 'axios';
import Adapter from "./Adapter";
const API = axios.create({
  baseURL: Adapter.BASE_URL
});
export default class App extends React.Component{
  constructor(props){
    super(props);
    //tao state de dung san
    this.state = {
      lophocs: [],

    }
  };
  async componentDidMount() {
    //cach 1
    // API.get(Adapter.api_list.url).then(res => {
    //   this.setState({lophocs: res.data})
    // }).catch(err => {
    // });
    //cach 2
    let data = [];
    try{
      const res = await API.get(Adapter.api_list.url);
      data = res.data
    }catch (e) {
    }finally { //finally moi lam viec con lai
      this.setState({
        lophocs: data
      })
    }
  }

  render() {
    var x =[1, 2, 3];
    const lophocs = this.state.lophocs;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
            <h1>Danh sách lớp học</h1>
            {
              lophocs.map((e, index) =>{
                return <Lophoc key={index} lophoc={e} title={"hihihi"} idol={"TQH"} age={12} />
              })
            }

          </header>
        </div>
    );
  }
}

