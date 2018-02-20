import React from 'react';
import { Grid, Row, Col } from 'components/Grid';
import styles from './index.css';

const HelloWorld = (props) => {
  return (
    <div className={styles.parent}>
      <h1 className={styles.child}>Hello World Component</h1>
      <Grid>
        <Row>
          <Col xs={12} md={6} lg={12}>
            <div className={styles.box}/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className={styles.box}/>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className={styles.box}/>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={styles.box}/>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={styles.box}/>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={styles.box}/>
          </Col>
          <Col xs={12} md={6} lg={10} lgOffset={1}>
            <div className={styles.box}/>
          </Col>
        </Row>
      </Grid>
    </div>
  )
};

export default HelloWorld;
