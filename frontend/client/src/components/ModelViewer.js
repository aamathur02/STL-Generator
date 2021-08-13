import React, { Component, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import Stats from "three/examples/jsm/libs/stats.module";
import {OBJViewer, STLViewer} from 'react-stl-obj-viewer';


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
                    {this.state.stlFile ?
                        <STLViewer
                            onSceneRendered={(element) => {
                                console.log(element)
                            }}
                            sceneClassName="test-scene"
                            file={this.state.stlFile}
                            className="obj"
                            modelColor="#FF0000"/> : null

                    }
                </div>
    );
  }
}
export default ModelViewer;
