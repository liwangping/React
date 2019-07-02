import router from 'umi/router'
import styles from './list.css';

export default function() {
  return (
      <>
    <h1>/list</h1>
    <button onClick={()=>{
        router.push('/list')
    }}> test push to self</button>
    </>
  );
}
