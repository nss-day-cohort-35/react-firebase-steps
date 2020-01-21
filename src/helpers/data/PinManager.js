import apiKeys from './config';

const baseUrl = apiKeys.databaseURL;

const getPinsByBoardId = (boardId) => {
  return fetch(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
  .then(response => response.json())
  .then((parsedResponse) => {
      console.log("parsed", parsedResponse);
      const allPinsObject = parsedResponse;
      const pins = [];
      if (allPinsObject != null) {
        Object.keys(allPinsObject).forEach((pinId) => {
          const newPin = allPinsObject[pinId];
          newPin.id = pinId;
          pins.push(newPin);
        });
      }
      return pins;
    })
}

const deletePin = (pinId) => {
  return fetch(`${baseUrl}/pins/${pinId}.json`, {
    method: 'DELETE',
  }).then((data) => data.json());
}

const savePin = (newPinObj) => {
  return fetch(`${baseUrl}/pins.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPinObj)
  }).then((data) => data.json());
};

const updatePin = (pinId, newPinObj) => {
  return fetch(`${baseUrl}/pins/${pinId}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPinObj)
  }).then((data) => data.json());
};

export default {getPinsByBoardId, deletePin, savePin, updatePin}