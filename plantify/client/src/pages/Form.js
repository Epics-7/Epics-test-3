// import React, { Component} from "react";

// export default class SignUp extends Component {
//   constructor(props){
//     super (props);
//     this.state={
//       name: "",
//       email:"",
//       password:"",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleSubmit(e){
//     e.preventDefault()
//     const {name,email,password} = this.state;
//     console.log(name,email,password)
//     fetch("http://localhost:5000/register",{
//       method:"POST",
//       crossDomain:true,
//       headers:{
//         "Content-type":"application/json",
//         Accept:"applocation/json",
//         "Acess-Control-Allow-Origin":"",
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         password,
//       }),
//     }).then((res)=>res.json())
//     .then((data)=>{
//       console.log(data,"userRegister")
//     });
//   }
//   render(){
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className='bg-white pt-11 lg:pt-16 lg:ml-36 px-10 py-20 rounded-3xl '>
//           <h1 className='text-4xl'>SignUp</h1>
//           <div className='mt-8'>
//               <label className='text-lg font-medium'>Name: </label>
//               <input className='border-gray-100 mt-1 bg-transparent w-full p-4 rounded-xl border-2' placeholder='Enter your name' onChange={(e) => this.setState({name:e.target.value})}></input>
//           </div>
//           <div>
//           <label className='text-lg font-medium'>Email: </label>
//               <input className='border-gray-100 bg-transparent w-full p-4 rounded-xl border-2' placeholder='Enter your email' type='text'onChange={(e) => this.setState({email:e.target.value})}></input>
//           </div>
//           <div>
//           <label className='text-lg font-medium'>Password: </label>
//               <input className='border-gray-100 bg-transparent w-full p-4 rounded-xl border-2' placeholder='Enter your password' type='password' onChange={(e) => this.setState({password:e.target.value})}></input>
//           </div>
//           <div>
              
//               <div className='mt-8 flex flex-col gap-y-4'>
//                   <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-green-800 text-white text-lg font-bold py-3 rounded-xl'>Sign in</button>
//               </div>
//           </div>
//       </div>
//       </form>
//   )
//   }

    
// }
/* eslint-disable */
import React, { Component} from "react";

export default class SignUp extends Component {
  constructor(props){
    super (props);
    this.state={
      name: "",
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    const {name,email,password} = this.state;
    console.log(name,email,password)
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-type":"application/json",
        Accept:"applocation/json",
        "Acess-Control-Allow-Origin":"",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister")
    });
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='bg-white pt-11 lg:pt-16 lg:ml-36 px-10 py-20 rounded-3xl '>
          <h1 className='text-4xl'>SignUp</h1>
          <div className='mt-8'>
              <label className='text-lg font-medium'>Name: </label>
              <input className='border-gray-100 mt-1 bg-transparent w-full p-4 rounded-xl border-2' placeholder='Enter your name' onChange={(e) => this.setState({name:e.target.value})}></input>
          </div>
          <div>
          <label className='text-lg font-medium'>Email: </label>
              <input className='border-gray-100 bg-transparent w-full p-4 rounded-xl border-2' placeholder='Enter your email' type='text'onChange={(e) => this.setState({email:e.target.value})}></input>
          </div>
          <div>
          <label className='text-lg font-medium'>Password: </label>
              <input className='border-gray-100 bg-transparent w-full p-4 rounded-xl border-2' placeholder='Enter your password' type='password' onChange={(e) => this.setState({password:e.target.value})}></input>
          </div>
          <div>
              
              <div className='mt-8 flex flex-col gap-y-4'>
                  <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-green-800 text-white text-lg font-bold py-3 rounded-xl'>Sign in</button>
              </div>
          </div>
      </div>
      </form>
  )
  }

    
}
/* eslint-enable */
