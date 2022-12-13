import styles from './Frame.module.css'
import Bttns from './Bttns/Bttns';
import Screen from './Screen/Screen';

const Frame = (props) => {
	return(
		<div className={styles.Frame}>
			<Screen value={props.result} />
			<Bttns result = {props.result} setResult = {props.setResult}/>
		</div>
	);
};

export default Frame