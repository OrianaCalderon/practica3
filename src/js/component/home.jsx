import React , {useState} from "react";


//create your first component
const Home = () => {

	const [tarea, setTarea] = useState({
		task:"",
		isDone: false
	})

	const [listaTarea, setListaTarea] = useState([])

	const handleChange = (event) =>{
		setTarea({...tarea, [event.target.name]: event.target.value})

	}

	const guardarTarea = (event) => {
		if (event.key === "Enter"){
			if (tarea.task.trim() !== ""){
				setListaTarea([...listaTarea,tarea])
				setTarea({task:"", isDone:false})
			}else{
				alert("Debes escribir una tarea")
			}
		}

	}

	const borrarTarea = (id) =>{
		let nuevaLista = listaTarea.filter((item, index)=>{
			return (id !== index)
		})
		setListaTarea(nuevaLista)
	}


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
					placeholder="que quieres hacer?"
					name="task"
					onKeyDown={guardarTarea}
					onChange={handleChange}
					value={tarea.task}/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<ul>
						{listaTarea.map((item,index)=>{
							return(
								<li key={index} onClick={()=>borrarTarea(index)}>{item.task}</li>
							)
						})

						}
					</ul>
				</div>
			</div>
			<p>{listaTarea.length} tareas llevas hechas</p>
			
		</div>
	);
};

export default Home;
