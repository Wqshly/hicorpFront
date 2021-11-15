export const validPhone = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请输入电话号码'))
  } else if (!/^1\d{10}$/.test(value)) {
    callback(new Error('请输入正确的11位手机号码'))
  } else {
    callback()
  }
}
