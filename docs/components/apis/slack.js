import axios from 'axios';

function createInstance() {
  return axios.create();
}
const instance = createInstance();

function sendMessage(msg) {
  return instance.post('https://cors-anywhere.herokuapp.com/corsdemo/https://hooks.slack.com/services/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', msg);
}

export { sendMessage }
// const instance = createInstanceWithAuth();
// https://hooks.slack.com/services/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