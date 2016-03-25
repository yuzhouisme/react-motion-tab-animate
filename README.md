# react-motion-tab-animate
Base on react-motion by Chenglou, write a tab animate demo and try to explain how to think and dismantling animation elements.

[![NPM version](https://img.shields.io/npm/v/antd-init.svg?style=flat)](https://npmjs.org/package/antd-init)

[react-motion](https://github.com/chenglou/react-motion)

[Ant Design](https://github.com/ant-design/ant-design)

## Screenshot

![Screenshot](https://github.com/yuzhouisme/react-motion-tab-animate/blob/master/example/animate.gif)

## Running demo

1.Clone this repo.

2.Modify something in package.json like name to <your-project-name>.

3.Run npm install.

```bash
$ npm install
```

4.Run development server.

```bash
$ npm run dev
```

5.Open your browser to http://localhost:8001/

## Why make it?

Because the game named Clash Royale Recently I play, I think it's funny, thanks to [supercell](http://supercell.com/en/).

![Reference](https://github.com/yuzhouisme/react-motion-tab-animate/blob/master/example/clash-royale.gif)

## Explanation (I think it's important to know how to make the animation)

```
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
```

Don't forget clear those timer when component unmount.

## Conclusion

Careful observation, discover, you can make it.

I hope that can help you, thank you ;)

## Write in react and antd I used

My Blog [yuzhouisme.com](http://yuzhouisme.com/).

Tome, help students to remember words [tome.yuzhouisme.com](http://tome.yuzhouisme.com).
