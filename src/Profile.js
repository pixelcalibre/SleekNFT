import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Profilecomponent from './components/Profilecomponent';

function profile() {
    return (
        <div>
      <section className="sticky bg-gradient-to-r from-primary to-secondary  h-screen flex flex-row flex-grow pb-10">
            <h1 className="text-my-black-color text-3xl font-bold px-76 py-10">Your Profile</h1>
           <Profilecomponent/>
        </section>
        </div>
    )
}

export default profile