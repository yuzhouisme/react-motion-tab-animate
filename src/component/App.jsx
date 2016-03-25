"use strict";

import React from 'react';
import { Col, Row } from 'antd';
import { Motion, spring } from 'react-motion';
import range from 'lodash.range';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

let styles = {

};

var App = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 1,
      pressedTab: undefined,
      isPressed: false,
      swing: false
    }
  },
  render: function() {
    var windowWidth = window.innerWidth;
    return (
      <div>
        { this.state.selectedTab === 1 ? <Tab1 /> : <Tab2 /> }
        <Motion style={{
          s1: spring((this.state.isPressed && this.state.selectedTab === 1) ? 1.4 : (this.state.selectedTab === 1 ? 1.8 : 1.4)),
          s2: spring((this.state.isPressed && this.state.selectedTab === 2) ? 1.4 : (this.state.selectedTab === 2 ? 1.8 : 1.4)),
          a1: spring(this.state.selectedTab === 1 ? 1 : 0),
          a2: spring(this.state.selectedTab === 2 ? 1 : 0),
          w1: spring(this.state.selectedTab === 1 ? windowWidth * 2/3 : windowWidth * 1/3),
          w2: spring(this.state.selectedTab === 2 ? windowWidth * 2/3 : windowWidth * 1/3),
          l2: spring(this.state.selectedTab === 1 ? windowWidth * 2/3 : windowWidth * 1/3),
          left: spring(this.state.selectedTab === 1 ? 0 : windowWidth * 1/3, {stiffness: 206, damping: 12}),
          swing: spring(this.state.swing ? 30 : 40, {stiffness: 320, damping: 2})
        }}>
        {({ s1, s2, a1, a2, w1, w2, l2, left, swing }) =>
          <Row type="flex" justify="center" align="middle" style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            height: 69,
            textAlign: 'center',
            padding: 0,
            backgroundColor: '#FFF',
            borderTop: `2px solid #45566A` }}>
            <div style={{
              position: 'absolute',
              top: 1,
              width: windowWidth * 2/3,
              height: 69,
              left: left,
              backgroundColor: 'rgba(92,144,177,0.5)',
              opacity: 1 }}>
            </div>
            <div onMouseDown={this.handleMouseDown.bind(this, 1)} onTouchStart={this.handleTouchStart.bind(this, 1)}
              onMouseUp={this.handleMouseUp}
              onTouchEnd={this.handleMouseUp}
              style={{
                position: 'absolute',
                top: 1,
                width: w1,
                height: 69,
                left: 0,
                backgroundColor: 'transparent',
                borderRight: `2px solid #45566A` }}>
              <img src="./static/img/caret-r.png"
                style={{
                  position: 'absolute',
                  top: 20,
                  width: 15,
                  height: 20,
                  right: swing,
                  opacity: a1 }} />
                <img src="./static/img/power.png"
                style={{
                  width: 30,
                  height: 30,
                  marginTop: this.state.selectedTab !== 1 ? 16 : 0,
                  WebkitTransform: `scale(${s1})`,
                  transform: `scale(${s1})` }} />
              <p style={{
                  marginTop: 6,
                  fontSize: 16,
                  fontWeight: 900,
                  color: '#535353',
                  opacity: a1 }}> 标签页1 </p>
            </div>
            <div onMouseDown={this.handleMouseDown.bind(this, 2)} onTouchStart={this.handleTouchStart.bind(this, 2)}
              onMouseUp={this.handleMouseUp}
              onTouchEnd={this.handleMouseUp}
              style={{
                position: 'absolute',
                top: 1,
                width: w2,
                height: 69,
                left: l2,
                backgroundColor: 'transparent',
                borderLeft: `2px solid #9AB4C8` }}>
              <img src="./static/img/caret-l.png"
                style={{
                  position: 'absolute',
                  top: 20,
                  width: 15,
                  height: 20,
                  left: swing,
                  opacity: a2 }} />
                <img src="./static/img/info.png"
                style={{
                  width: 30,
                  height: 30,
                  marginTop: this.state.selectedTab !== 2 ? 16 : 0,
                  WebkitTransform: `scale(${s2})`,
                  transform: `scale(${s2})` }} />
              <p style={{
                  marginTop: 6,
                  fontSize: 16,
                  fontWeight: 900,
                  color: '#535353',
                  opacity: a2  }}> 标签页2 </p>
            </div>
          </Row>
        }
        </Motion>
      </div>
    );
  },
  handleMouseDown(index) {
    if (index === this.state.selectedTab) {
      this.setState({ pressedTab: index, isPressed: true })
    } else {
      this.setState({ pressedTab: index })
    }
  },
  handleTouchStart(index) {
    this.handleMouseDown(index);
  },
  handleMouseUp() {
    if (this.state.pressedTab !== this.state.selectedTab) {
      this.setState({ selectedTab: this.state.pressedTab, isPressed: false, swing: !this.state.swing })
    } else {
      this.setState({ pressedTab: undefined, isPressed: false })
    }
  }
});

module.exports = App;
