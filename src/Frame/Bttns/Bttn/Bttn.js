import style from './Bttn.module.css'

const Bttn = (props) => {

	return(
		<button onClick={() => props.setResult(props.result + props.bttn.value)}>{props.bttn.value}</button>
	);
};

export default Bttn