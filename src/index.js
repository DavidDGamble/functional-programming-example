import * as plantScript from "./plant.js";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.onload = function () {

  document.getElementById('createPlant').addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    plantBuilder(name);
    // const newPlant = plantScript.storeState(name);
    // plantBuilder(newPlant());

    // document.getElementById('feed').onclick = function () {
    //   const newState = plantScript.stateControl(plantScript.feed);
    //   document.getElementById('soil-value').innerText = `Soil: ${newState.soil}`;
    // };

  });
};

const plantBuilder = (name) => {
  const newPlant = plantScript.storeState(name);

  let b1 = document.createElement('button');
  b1.setAttribute('id', `feed${newPlant().id}`);
  b1.innerText = "Add soil";
  let b2 = document.createElement('button');
  b2.setAttribute('id', `bigfeed${newPlant().id}`);
  b2.innerText = "Add a lot more soil";
  let b3 = document.createElement('button');
  b3.setAttribute('id', `hydrate${newPlant().id}`);
  b3.innerText = "Add water";
  let b4 = document.createElement('button');
  b4.setAttribute('id', `bigwater${newPlant().id}`);
  b4.innerText = "Add a lot more water";
  let b5 = document.createElement('button');
  b5.setAttribute('id', `light${newPlant().id}`);
  b5.innerText = "Add light";
  let b6 = document.createElement('button');
  b6.setAttribute('id', `biglight${newPlant().id}`);
  b6.innerText = "Add a lot more light";
  let b7 = document.createElement('button');
  b7.setAttribute('id', `show-state${newPlant().id}`);
  b7.innerText = "Current Stats";
  let h1 = document.createElement('h1');
  h1.innerHTML = `${newPlant().name}'s Stats`; 
  let h2 = document.createElement('h3');
  h2.setAttribute('id', `soil-value${newPlant().id}`);
  h2.innerText = "0";
  let h3 = document.createElement('h3')
  h3.setAttribute('id', `water-value${newPlant().id}`);
  h3.innerText = "0";
  let h4 = document.createElement('h3');
  h4.setAttribute('id', `light-value${newPlant().id}`);
  h4.innerText = "0";

  document.getElementById('plants').append(b1);
  document.getElementById('plants').append(b2);
  document.getElementById('plants').append(b3);
  document.getElementById('plants').append(b4);
  document.getElementById('plants').append(b5);
  document.getElementById('plants').append(b6);
  document.getElementById('plants').append(b7);
  document.getElementById('plants').append(h1);
  document.getElementById('plants').append(h2);
  document.getElementById('plants').append(h3);
  document.getElementById('plants').append(h4);

  document.getElementById(`feed${newPlant().id}`).onclick = function () {
    const newState = newPlant(plantScript.feed);
    document.getElementById(`soil-value${newPlant().id}`).innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById(`bigfeed${newPlant().id}`).onclick = () => {
    const newState = newPlant(plantScript.blueFood);
    document.getElementById(`soil-value${newPlant().id}`).innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById(`hydrate${newPlant().id}`).onclick = () => {
    const newState = newPlant(plantScript.hydrate);
    document.getElementById(`water-value${newPlant().id}`).innerText = `Water: ${newState.water}`;
  };

  document.getElementById(`bigwater${newPlant().id}`).onclick = () => {
    const newState = newPlant(plantScript.superWater);
    document.getElementById(`water-value${newPlant().id}`).innerText = `Water: ${newState.water}`;
  };

  document.getElementById(`light${newPlant().id}`).onclick = () => {
    const newState = newPlant(plantScript.light);
    document.getElementById(`light-value${newPlant().id}`).innerText = `Light: ${newState.light}`;
  };

  document.getElementById(`biglight${newPlant().id}`).onclick = () => {
    const newState = newPlant(plantScript.superLight);
    document.getElementById(`light-value${newPlant().id}`).innerText = `Light: ${newState.light}`;
  };

  document.getElementById(`show-state${newPlant().id}`).onclick = function () {
    const currentState = newPlant();
    document.getElementById(`soil-value${newPlant().id}`).innerText = `Soil: ${currentState.soil}`;
    document.getElementById(`water-value${newPlant().id}`).innerText = `Water: ${currentState.water}`;
    document.getElementById(`light-value${newPlant().id}`).innerText = `Light: ${currentState.light}`;
  };
};