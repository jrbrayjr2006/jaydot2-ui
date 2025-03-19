import {useRef, useState} from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let usernameInput = useRef<HTMLInputElement>(null); 
    let usernameIsInvalid: boolean = false;

    function handleSubmit(event : React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if (usernameInput.current) {
        setUsername(usernameInput.current.value);
        setIsLoggedIn(true);
        }
    }
    return (
        <section id="login" className="container flex flex-col mx-auto p-6 lg:flex-row">
            {/* <h2 className="text-6xl font-bold text-center lg:text-left lg:w-1/2">Login</h2> */}
            <div className="flex flex-col row-start-2 px-auto items-center justify-center container mx-auto">
                <h1 className="text-3xl font-bold">User Login</h1>
                {isLoggedIn ? <p>Welcome {username}</p> : <p></p>}
                <form className="flex flex-col bg-slate-300 rounded-md p-8 md:flex-row md:space-x-8">
                    <p className="mt-3">
                        <label className={`${usernameIsInvalid ? 'invalid' : ''}`}>
                            <span className="text-black font-bold mr-4 w-1/2">Username:</span>
                            <input ref={usernameInput} className={`bg-white placeholder:text-gray-400  w-1/2 ${usernameIsInvalid ? 'invalid' : undefined}`} type="text" name="username" placeholder="enter username" />
                        </label>
                    </p>
                    <p className="mt-3">
                        <label>
                        <span className="text-black font-bold mr-4 w-1/2">Password:</span>
                        <input className="bg-white placeholder:text-gray-400 w-1/2" type="password" name="password" placeholder="enter password" />
                        </label>
                    </p>
                    <button className="mt-8 px-8 py-3 font-bold text-white bg-cyan-700 rounded-full hover:opacity-70" type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </section>

    );
}