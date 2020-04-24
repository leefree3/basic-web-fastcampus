<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">ID:</label>
        <input
          id="username"
          type="text"
          v-model="username"
          class="username-input"
          v-bind:class="{'error': isError }"
        />
      </div>
      <div>
        <label for="password">PW:</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button v-bind:disabled="!isUsernameValid" type="submit">로그인</button>
    </form>
    <p v-if="isError">올바르지 않은 ID 입니다.</p>
    <p v-if="isUsernameValid">이메일 형식이 맞습니다.</p>
  </div>
</template>

<script>
//이메일 형식 체크 함수
function validateEmail(email) {
  // eslint 때문에 정규식에 에러가 발생해서 참죄: https://github.com/eslint/eslint/issues/6148
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default {
  data() {
    return {
      // key: value
      username: "",
      password: "",
      isError: false
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    }
  },
  methods: {
    submitForm() {
      //새로고침 방지(매개변수에 event받아서)
      // event.preventDefault();
      // 위와같이 써도 되고,
      // 아님 form 태그 내부에 .prevent를 사용할 수도 있다.
      console.log("로그인");
      // axios
      //   .post()
      //   .then()
      //   .catch(error => {
      //     this.isError = true;
      //   });
      this.isError = true;
      // this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
/* scope: 컴포넌트에만 css를 입히는 모드 */
.username-input {
  outline: none;
}
.username-input.error {
  border: 1px solid red;
}
</style>