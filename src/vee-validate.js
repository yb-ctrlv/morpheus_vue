import { extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import _merge from 'lodash/merge';
import ko from 'vee-validate/dist/locale/ko.json';

// 모든 룰을 사용
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

extend('verify_password', {
  validate: (value) => {
    const pwReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return pwReg.test(value);
  },
  // message: '비밀번호는 8자리 이상 영문,숫자,특수문자를 조합하여야 합니다.',
});

extend('rate_code', {
  validate: (value) => {
    const reg = /[A-Z]{2,2}/;
    return reg.test(value);
  },
});

// 에러메세지 정의
const _ko = _merge(ko, {
  messages: {
    verify_password: '{_field_}는 8자리 이상 영문,숫자,특수문자를 조합하여야 합니다.',
    rate_code: '{_field_}는 2자리 영어 대문자로만 입력이 가능합니다.',
  },
});

// 한글 적용
localize({
  ko: {
    messages: _ko.messages,
  },
});

localize('ko');
