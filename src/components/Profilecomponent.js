import {useState} from 'react';
import {useMoralis} from 'react-moralis';
import { Redirect } from 'react-router';
import '../Profile.css'

function Profilecomponent() {
    const [image, setImage] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg')
    const {logout,user}=useMoralis();
    const getUsername=user.get("username");
    const [username,setUsername]=useState(getUsername);
    const [email,setEmail]=useState(user.get("email"));
console.log(username);
console.log(email);
const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}

const loggingout = () =>{
    
    logout();
    return (<Redirect to="/" exact/>);
    
}
const onSave = ()=>{
    
     user.set("email",email);
     user.set("username",username);
};

    
    return (
        <div className="flex">
        <div className="flex flex-col absolute left-82 top-28">
            <input type="email" placeholder="Email" className="mb-7 rounded-md p-2 outline-none" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" placeholder="Username" className="mb-7 rounded-md p-2 outline-none" onChange={(e) => setUsername(e.target.value)}value={username}/>
            <label htmlFor="" className='text-my-black-color text-xl mb-3'>Avatar:</label>
            <input type="file" onChange={onImageChange} className="rounded-md mb-7 text-my-black-color"/>
            <div className="border-my-black-color border-dashed border-2 h-5/6 mt-4 mx-3 rounded-lg text-center">
                <div className="p-4 rounded-xl">
                <img
                src={image}
                alt="Avatar"
                className="h-220 w-220 rounded-full object-cover object-center"
                />
                </div>
            </div>
            <div className="flex mx-auto">
            <button className="mt-7 bg-my-black-color text-my-gold-color w-24 mx-3  rounded-3xl p-2" onClick= {onSave}>Save</button>
            <button className="mt-7 bg-my-black-color text-my-gold-color w-24 mx-3 rounded-3xl p-2" onClick= {loggingout}>Logout</button>
            </div>
        </div>
        <div className="hidden xl:inline-flex xl:ml-72 " >
        <img 
           src="/ethbanner6.svg"
           alt="background"
           className="h-800 w-300 object-contain"
        />
        </div>
        </div>
    )
}

export default Profilecomponent
