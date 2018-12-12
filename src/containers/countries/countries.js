import React from 'react';
import styles from './styles.scss';
import Confirm from '../confirm/confirm.js';
import Arrow from '../arrow/arrow.js';
import Card from '../card/card.js';
import {connect} from 'react-redux';

class Countries extends React.Component {
  render () {
    return (
      <div className={styles.countries}>
        <div className={styles.list}>
          <Arrow direction='left' type={'countries'}/>
          <Card />
          <Arrow direction='right' type={'countries'}/>
        </div>
        <div className={styles.buttons}>
          <Confirm type={'intro'} text={'BACK'}/>
          <Confirm type={'/countries'} text={'BEGIN TEST'}/>
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    pageStatus: store.pageStatus
  })
)(Countries);
