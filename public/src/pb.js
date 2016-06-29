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

var App =  React.createClass({
  getInitialState: function() {

    return {baction: 'Progress1'};
  },
    handleChange: function(e){
      var value = e.target.value;
       console.log(value);
      this.setState({baction:value});
    },
    handleClick10:function(e){
      console.log('Your active: ', this.state.baction );
      this.refs[this.state.baction].addPrecent(10);
    },
    handleClick25:function(e){
      console.log('Your active: ', this.state.baction );
      this.refs[this.state.baction].addPrecent(25);
    },
    handleClick_10:function(e){
      console.log('Your active: ', this.state.baction );
      this.refs[this.state.baction].addPrecent(-10);
    },
    handleClick_25:function(e){
      console.log('Your active: ', this.state.baction );
      this.refs[this.state.baction].addPrecent(-25);
    },
    handleClick:function(v, e){
      this.refs[this.state.baction].addPrecent(v);
    },
    render: function() {
      return (
        <div class="mybody" >
        <Progressbar completed={25} id="Progress1" ref="Progress1"/>

        <h2 class="center"></h2>

        <Progressbar completed={50} id="Progress2" ref="Progress2"/>

          <h2 class="center"></h2>

        <Progressbar completed={75} id="Progress3" ref="Progress3"/>

        <h2 class="center"></h2>
        <span>
        <select  name='selectbar' id='selectbar' value={this.state.baction} onChange={this.handleChange}>
         <option value="Progress1">#Progress1</option>
         <option value="Progress2">#Progress2</option>
         <option value="Progress3">#Progress3</option>
        </select>



        <button onClick={this.handleClick_25}>-25</button>
        <button onClick={this.handleClick_10}>-10</button>
        <button onClick={this.handleClick10}>+10</button>
        <button onClick={this.handleClick25}>+25</button>
        </span>
        </div>
      )
    }

});

ReactDOM.render(
  <div>
   <h2 class="center">Progress Bars Demo</h2>

   <App />

</div>,
  document.getElementById('content')
);
