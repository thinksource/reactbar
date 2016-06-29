import React from "react";

var Progressbar = React.createClass({
  getInitialState: function() {
    return {completed:this.props.completed};
  },
  addPrecent: function(value){
    this.state.completed+=value;
    if (this.state.completed < 0){this.state.completed=0};
    this.setState({completed:this.state.completed});
  },

  render: function() {

    var completed = this.state.completed;
    if (completed < 0) {completed = 0};



    if (completed > 100) {completed = 100;};
    var style = {
      backgroundColor: this.props.color || '#0BD318',
      width: completed + '%',
      transition: "width 200ms",
      height: this.props.height || 20
    };
    if(this.state.completed > 100){style.backgroundColor=this.props.alarmcolor || 'red'};
    return (
      <div className="progressbar-container">
        <div className="progressbar-text">{this.state.completed}%</div>
        <div className="progressbar-progress" style={style}></div>
      </div>
    );
  }
});

module.exports = Progressbar;
