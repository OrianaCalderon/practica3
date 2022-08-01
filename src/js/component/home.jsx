import React from "react";


//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					titulo
				</div>
			</div>
			<div className="row">
				<div className="col">
					<input 
					type="text"
					className="data"
					placeholder="que quieres hacer?" />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<ul>
						<li>contenido de tareas</li>
					</ul>
				</div>
			</div>
			<p>cuantas tareas llevas hechas</p>
			
		</div>
	);
};

export default Home;
