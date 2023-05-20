// import React from "react";
// // import logo from './logo.svg';
// import "./App.css";

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { email: "", name: "" };
// 	}
// 	handleEmailChange = (event) => {
// 		console.log(`Events are: ${event}`);
// 		this.setState({ email: event.target.value });
// 	};

// 	handleNameChange = (e) => {
// 		this.setState({ name: e.target.value });
// 	};
// 	render() {
// 		return (
// 			<div className="App" style={{ padding: 10 }}>
// 				<input value={this.state.email} onChange={this.handleEmailChange} />
// 				<p>Email: {this.state.email}</p>
// 				<input value={this.state.name} onChange={this.handleNameChange} />
// 				<p>Name: {this.state.name}</p>
// 			</div>
// 		);
// 	}
// }

// export default App;

//now we change this into function base components
//combination of 
//componentDidMount()+componentWillUnmount()+componentDidUpdate()in class = useEffect in function
import React, { useState, useEffect } from "react";
//this is the functional components
function App() {
	// const emailState = useState("write your email"); //it accepts only one arguments[hooks]
	// const email = emailState[0]; //get the current state
	// const setEmail = emailState[1]; //get the setEmail function
	const [email, setEmail] = useState("Email Enter");

	// const nameState = useState("Write you name"); //it accepts only one arguments[hooks]
	// const name = nameState[0]; //get the current state
	// const setName = nameState[1]; //get the setEmail function

	const [name, setName] = useState("Name Enter");

	const [userId, setUserId] = useState("1");
	const [data, setData] = useState([]);

	//useEffect
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log("Data", data);
				setData(data);
			});
	}, [userId]);

	//addEvent listener using useEffect
	//CALL every time after rendering
	useEffect(() => {
		document.addEventListener("mousemove", onMouse);

		//we did bcz we safe from memory licked when component
		//Will destroy then function need to destroy
		//this work as {componentWillUnmount}
		return () => {
			document.removeEventListener('mousemove',onMouse);
		};
	});

	function onMouse(event) {
		console.log(event.clientX);
	}

	function handleEmailChange(event) {
		setEmail(event.target.value);
	}

	function handleNameChange(e) {
		setName(e.target.value);
	}

	return (
		<div className="App" style={{ padding: 10, paddingLeft: 20 }}>
			<h1>Hello App</h1>
			<button onClick={() => setUserId("2")}>Change {userId} to 2</button>
			{data.map((user) => (
				<div>
					<p>{user.title}</p>
				</div>
			))}
			<input value={email} onChange={handleEmailChange} />
			<p>Email: {email}</p>
			<input value={name} onChange={handleNameChange} />
			<p>Name: {name}</p>
		</div>
	);
}

export default App;
