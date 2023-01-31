import * as plantScript from "./plant.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.onload = function () {

  // This function has side effects because we are manipulating the DOM.
  // Manipulating the DOM will always be a side effect. 
  // Note that we only use one of our functions to alter soil. 
  // You can easily add more.
  document.getElementById('feed').onclick = function () {
    const newState = plantScript.stateControl(plantScript.feed);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById('bigfeed').onclick = () => {
    const newState = plantScript.stateControl(plantScript.blueFood);
    document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
  }

  document.getElementById('hydrate').onclick = () => {
    const newState = plantScript.stateControl(plantScript.hydrate);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  };

  document.getElementById('bigwater').onclick = () => {
    const newState = plantScript.stateControl(plantScript.superWater);
    document.getElementById('water-value').innerText = `Water: ${newState.water}`;
  }

  document.getElementById('light').onclick = () => {
    const newState = plantScript.stateControl(plantScript.light);
    document.getElementById('light-value').innerText = `Light: ${newState.light}`;
  }

  document.getElementById('biglight').onclick = () => {
    const newState = plantScript.stateControl(plantScript.superLight);
    document.getElementById('light-value').innerText = `Light: ${newState.light}`;
  }

  // This function doesn't actually do anything useful in this application 
  // — it just demonstrates how we can "look" at the current state 
  // (which the DOM is holding anyway). 
  // However, students often do need the ability to see the current state 
  // without changing it so it's included here for reference.
  document.getElementById('show-state').onclick = function () {
    // We just need to call stateControl() without arguments 
    // to see our current state.
    const currentState = plantScript.stateControl();
    document.getElementById('soil-value').innerText = `Soil: ${currentState.soil}`;
    document.getElementById('water-value').innerText = `Water: ${currentState.water}`;
    document.getElementById('light-value').innerText = `Light: ${currentState.light}`;
  };
};