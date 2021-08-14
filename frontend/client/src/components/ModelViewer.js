import React, { Component } from "react";

class ModelViewer extends Component {
  constructor() {
    super();
    this.state = {
        stlFile: null,
        stlLink: null,
    };
    this._state = {
        stlLink: window.location.href + 'bottle.stl',
    }
}
  render() {
    return (
      <div className="container" id="div2">
                    <label htmlFor="obj-file">
                        Load STL by file
                        <br/>
                        <input type="file"
                               name="obj-file"
                               onChange={(e) => {
                                   console.log(e.target.files)
                                   this.setState({
                                       stlFile: e.target.files[0]
                                   })
                                   console.log('path' + this.state.stlFile)
                               }} placeholder="test"/>
                    </label>
                    
                </div>
    );
  }
}
export default ModelViewer;
