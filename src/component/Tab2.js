"use strict";

import React from 'react';
import { Col, Row } from 'antd';

var Tab2 = React.createClass({
  render: function() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle" style={{
          width: window.innerWidth,
          height: window.innerHeight
        }}>
          <p>This is Tab2.</p>
        </Row>

      </div>
    )
  }
});

module.exports = Tab2;
