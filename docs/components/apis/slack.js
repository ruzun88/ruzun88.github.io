import axios from 'axios';

function createInstance() {
  return axios.create();
}
const instance = createInstance();

function sendMessage(slackMsgForm) {
  const url1 = 'https://hooks.slack.com/services/'
  const url2 = 'T02FRP3JG03/B02GSM'
  const url3 = 'BM77X/tgZCbFtx19'
  const url4 = 'N70B67HWsrD9Nf'
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
  return instance.post(url1 + url2 + url3 + url4, tempMsg, {
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

function sendMessageOauth(msg) {
  console.log(msg)
  let testMsg = {
    channel : "C02GFC983CY",
    text: "hi there 222"
  }
  return instance.post('https://slack.com/api/chat.postMessage', JSON.stringify(testMsg), {
    withCredentials: false,
    transformRequest: [(data, headers) => {
      console.log(headers)
      headers.post["Authorization"] = "Bearer xoxb-2535785628003-2571312806420-YwJ5tYGs9dXdeA9uRaHX4Eqm"
      console.log(headers)
      headers.post["Content-Type"] = "application/x-www-form-urlencoded"
      // delete headers.post["Content-Type"]
      console.log(headers)
      return data
    }]
  }).then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
  })
  // return instance.post('https://slack.com/api/chat.postMessage', testMsg, {
  //   headers:{
  //     "Content-Type": "text/plain",
  //     "Authorization": "Bearer xoxb-2535785628003-2571312806420-YwJ5tYGs9dXdeA9uRaHX4Eqm"
  // }
  // }).then(res => {
  //   console.log(res)
  //   return res
  // }).catch(err => {
  //   console.log(err)
  // })
}

export { sendMessage, sendMessageOauth }
// const instance = createInstanceWithAuth();
// https://hooks.slack.com/services/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

// from vuepress

// oauth token / token
// xoxb-2535785628003-2571312806420-YwJ5tYGs9dXdeA9uRaHX4Eqm

// url
// https://slack.com/api/chat.postMessage

// channel id / channel
// C02GFC983CY