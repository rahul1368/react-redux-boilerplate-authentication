import React,{Component} from "react";
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

class Test extends Component{
    constructor(props){
        super(props);
        this.state={
            isAuthenticated:false,
            user:null,
            token:'',
            users:[],
            a:props.a
        }
    }
    componentDidMount(){
        fetch('/api/example/test')
        .then(response => response.json())
        .then(data => this.setState({ users:data.users },()=>{//alert(JSON.stringify(this.state.users));
        }));
       
    }
    componentWillReceiveProps(nextProps){alert(this.props.a);
        if(nextProps.a!=this.props.a){
            alert(nextProps);
        }
    }
    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };
    
    twitterResponse = (e) => {};

    facebookResponse = (e) => {};

    googleResponse = (e) => {
        alert(JSON.stringify(e));
    };
    onFailure = (error) => {
      alert(error);
    }
    handleClick(){
        let fun = this.props.a;
        fun();
    }

    render(){
        
        return(<div>
            <TwitterLogin loginUrl="http://localhost:3000/api/v1/auth/twitter"
        onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
        requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse"/>
            <FacebookLogin
                        app Id="XXXXXXXXXX"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={this.facebookResponse} />
                    <GoogleLogin
                        clientId="858978122546-bdr28ss85k3snu7tknoa3n0m160t9mb6.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.googleResponse}
                    />
            <h1>This is a test component,Horray  !</h1>
            <ul>
                
               {this.state.users.map((user)=><li key={user}>{user}</li>)}     
                
            </ul>
            <button onClick={()=>this.handleClick}>Test the props</button>
            </div>
            );
    }
}

export default Test;