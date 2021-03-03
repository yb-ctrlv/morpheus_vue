import { extend, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import ko from 'vee-validate/dist/locale/ko.json';

// 모든 룰을 사용
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

// 룰 확장
extend('verify_password', {
  validate: (value) => {
    const reg = /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(value);
  },
});

extend('rate_code', {
  validate: (value) => {
    const reg = /[A-Z]{2,2}/;
    return reg.test(value);
  },
});

extend('optional_required', {
  validate: (value, args) => {
    const keys = Object.keys(args).filter((key) => typeof args[key] === 'string');
    let result = value;
    keys.map((key) => result += args[key]);
    result = result.trim();
    return result.length > 0;
  },
  params: [{ name: 'arg1', isTarget: true }, { name: 'arg2', isTarget: true }, { name: 'arg3', isTarget: true }, { name: 'arg4', isTarget: true }, { name: 'arg5', isTarget: true }],
  computesRequired: true,
});

extend('ko_phone', {
  validate: (value) => {
    const reg = /(02|0[3-9]{1}[0-9]{1})([\-\.])?[1-9]{1}[0-9]{2,3}([\-\.])?[0-9]{4}$/;
    return reg.test(value);
  },
});

// 에러메세지 정의
const _ko = _.merge(ko, {
  messages: {
    verify_password: '{_field_}는 8자리 이상 영문,숫자,특수문자를 조합하여야 합니다.',
    rate_code: '{_field_}는 2자리 영어 대문자로만 입력이 가능합니다.',
    optional_required: '{_field_} 중 한가지 항목 이상은 필수 정보입니다.',
    ko_phone: '{_field_}는 올바르지 않은 전화번호 형식입니다.',
  },
});

// 한글 적용
localize({
  ko: {
    messages: _ko.messages,
  },
});

localize('ko');
