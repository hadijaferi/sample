import React, { Component } from "react";
import UUID from "uuid/v1";
// component
import ListRow from "./ListRow";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempinput: "",
      list: []
    };
  }

  handleSubmit = event => {
    let newList = {
      key: UUID(),
      content: this.state.tempinput,
      checked: false
    };
    let templist = [];
    if (this.state.list) {
      templist = this.state.list;
    }
    templist.push(newList);
    this.setState({
      list: templist,
      tempinput: ""
    });
    event.preventDefault();
  };
  handleChanhe = event => {
    this.setState({ tempinput: event.target.value });
    console.log(this.state.list);
  };
  componentDidMount() {
    console.log(this.state.list);
  }

  //    ****** in ravesh ba estefade az prevState ee ravesh paeini chizi k khodm balad bodm az ghabl
  //   handleCheckBoxChange = key => {
  //     console.log(key);
  //     this.setState(prevstate => {
  //       let newlist = prevstate.list.map((ele, ind) => {
  //         if (ele.key === key) {
  //           ele.checked = !ele.checked;
  //         }
  //         return ele;
  //       });
  //       return {
  //         list: newlist
  //       };
  //     });
  //   };
  handleCheckBoxChange = key => {
    let duplist = this.state.list.slice();
    duplist.map((ele, ind) => {
      if (ele.key === key) {
        ele.checked = !ele.checked;
      }
      this.setState({ list: duplist });
      console.log(this.state.list, "newwwww Lissssst ******");
    });
  };
  render() {
    let list = this.state.list.map((ele, ind) => {
      return (
        <ListRow
          id={ele.key}
          key={ele.ind}
          checked={ele.checked}
          handleCheckBoxChange={this.handleCheckBoxChange}
          content={ele.content}
        />
      );
    });

    return (
      <React.Fragment>
        {list}
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              value={this.state.tempinput}
              onChange={e => this.handleChanhe(e)}
            />
            <button type="submit">Insert</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default TodoList;
