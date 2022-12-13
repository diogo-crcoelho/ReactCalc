import styles from './Bttns.module.css'
import btts from '../../teste.json'
import Bttn from './Bttn/Bttn'

const Bttns = (props) => {
	return (
		<div className={styles.Btncontainer}>
			{btts.map((bttn) => {return(<Bttn result={props.result} setResult={props.setResult} bttn={bttn} key={bttn.id}/>)})}
		</div>
	);
};

export default Bttns