import React, { useState } from "react";

//this is the custom Hooks we can write our own hooks
//hooks call on the top poste level of the function
function useFormInput(initialValue) {
  //useState hook returns the current state value and a function that lets you update it.
	const [value, setValue] = useState("");

	function handleChange(e) {
		setValue(e.target.value);
	}

	return {
		value: value,
		onChange: handleChange,
	};
}

//this is the functional components
function LoginForm() {
	// const [email,setEmail] = useState('');
	const email = useFormInput("");
	const password = useFormInput("");

	// function handleEmail(e) {
	// 	setEmail(e.target.value);
	// }

	// function handlePassword(e) {
	// 	setPassword(e.target.value);
	// }

	return (
		<form>
			<div>Email</div>
			<div>
				{/* <input type="text" value={email} onChange={handleEmail} /> */}
				{/* <input type="text" value={email.value} onChange={email.onChange} /> */}
				<input type="text" {...email} />
			</div>
			<br />
			<div>Password</div>
			<div>
				{/* <input type="password" value={password.value} onChange={password.onChange} /> */}
				<input type="password" {...password} />
			</div>
			<p>
				<strong>
					<em>Email:</em>
				</strong>
				{email.value} |
				<strong>
					<em>Password:</em>
				</strong>
				{""}
				{password.value} |
				{/* <strong>
					<em>Confirm Password:</em>
				</strong>
				{confirmPassword.value} */}
			</p>
		</form>
	);
}

function SignupForm() {
	// const [email,setEmail] = useState('');
	// const [password,setPassword] = useState('');
	// const [confirmPassword,setConfirmPassword] = useState('');

	// function handleEmailChange(e){
	//   setEmail(e.target.value);
	// }

	// function handlePasswordChange(e){
	//   setPassword(e.target.value);
	// }

	// function handleConfirmChange(e){
	//   setConfirmPassword(e.target.value);
	// }

	const email = useFormInput("");
	const password = useFormInput("");
	const confirmPassword = useFormInput("");

	return (
		<form>
			<div>Email</div>
			<div>
				{/* <input type="text" value={email} onChange={handleEmailChange} /> */}
				<input type="text" {...email} />
			</div>
			<br />
			<div>Password</div>
			<div>
				{/* <input type="text" value={password} onChange={handlePasswordChange} /> */}
				<input type="text" {...password} />
			</div>
			<br />
			<div>Confirm Password</div>
			<div>
				{/* <input type="text" value={confirmPassword} onChange={handleConfirmChange} /> */}
				<input type="text" {...confirmPassword} />
			</div>
			<p>
				<strong>
					<em> Email: </em>
				</strong>
				{email.value} |
				<strong>
					<em> Password: </em>
				</strong>
				{""}
				{password.value} |
				<strong>
					<em> Confirm Password: </em>
				</strong>
				{confirmPassword.value}
			</p>
		</form>
	);
}

// import "./App.css";

function App(props) {
	return (
		<div className="App" style={{ paddingLeft: 20 }}>
			<h2> Login </h2>
			<LoginForm />
			<hr />
			<h3>Signup</h3>
			<SignupForm />
		</div>
	);
}

export default App;
