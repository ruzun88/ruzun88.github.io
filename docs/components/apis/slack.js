import axios from 'axios';

function createInstance() {
  return axios.create();
}
const instance = createInstance();

function sendMessage(msg) {
  return instance.post('https://hooks.slack.com/services/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', msg, {
    headers:{
      "Content-Type": "text/plain"
  }
  }).then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
  })
}

export { sendMessage }
// const instance = createInstanceWithAuth();
// https://hooks.slack.com/services/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