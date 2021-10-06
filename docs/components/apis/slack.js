import axios from 'axios';

function createInstance() {
  return axios.create();
}
const instance = createInstance();

function sendMessage(slackMsgForm) {
  const key = 'secret key ruzun'
  const ciphertext = 'U2FsdGVkX1/2mH1AQwd4mcazlMYPPhORtvDwWVtFvllFMvzXkgnSxCZdfyz2CwxF0P89mLupjeJROZUzQe3JJlU4b0ho3ZNbIOmpk2mewZUPQ2s8d+Ny0syJBiLRaKJ1oinT4G53zT0DnXPZ5G9PrQ=='
  var CryptoJS = require("crypto-js");

  // Decrypt
  var bytes  = CryptoJS.AES.decrypt(ciphertext, key);
  var url = bytes.toString(CryptoJS.enc.Utf8);

  const tempMsg = {
    "text": "Title",
    "blocks": [
    	{
    		"type": "section",
    		"text": {
    			"type": "mrkdwn",
    			"text": ":star: " + slackMsgForm.email + " 님이 문의를 보내었습니다."
    		}
    	},
    	{
    		"type": "section",
    		"block_id": "section567",
    		"text": {
    			"type": "mrkdwn",
    			"text": ">> " + slackMsgForm.msg
    		}
    	}
    ]
  }
  return instance.post(url, tempMsg, {
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