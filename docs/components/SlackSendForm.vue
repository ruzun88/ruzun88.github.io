<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <table>
            <tr>
              <td>
                <label for="email">Email:</label>
              </td>
              <td>
                <input id="email" type="text" v-model="email" />
              </td>
            </tr>
            <tr>
              <td><label for="msg">문의내용:</label></td>
              <td><textarea id="msg" type="text" rows="10" v-model="msg" /></td>
            </tr>
              <div>
              <p class="validation-text">
                <span class="warning" v-if="!isEmailValid && email">
                  Please enter an email address
                </span>
              </p>
            </div>
            <div>
              
              
            </div>
            <button
              :disabled="!isEmailValid || !msg"
              type="submit"
              class="btn"
              :class="!isEmailValid || !msg ? 'disabled' : null"
            >
              전송
            </button>
        </table>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { sendMessage, sendMessageOauth } from '@api/slack';
// import { WebClient } from '@slack/web-api'

export default {
  name: 'SlackSendForm',
  data() {
    return {
      msg: '',
      email: '',
      logMessage: '',
      // slackMsg: ''
    }
  },
  computed: {
    isEmailValid() {
      return this.validateEmail(this.email);
    },
  },
  methods: {
    addCount() {
      this.count += 1
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    async submitForm() {
      try {
        // biz logic
        let slackMsg = {
          email: this.email,
          msg: this.msg
        };
        console.log(slackMsg)
        await sendMessage(slackMsg)
        // await sendMessageOauth(slackMsg)
      } catch (error) {
        // 에러 핸들링 코드
        // console.log(error);
        this.logMessage = ''//error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.email = '';
      this.msg = '';
    },
  }
}
</script>

<style>

</style>