import styles from '../css/StrikeZone.module.css';
import Table from 'react-bootstrap/esm/Table';

const StrikeZone = (props) => {
  const { balls } = props;

  return (
    <>
      <div className={`${styles['strike-zone']} d-flex justify-content-center align-items-center`} >
        <div className={`${styles.mainbox}`}>
          <Table bordered>
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default StrikeZone;