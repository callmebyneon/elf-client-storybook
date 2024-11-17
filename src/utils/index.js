/**
 * 숫자로된 파일의 사이즈 값을 byte 단위를 붙인 문자 값으로 반환
 * @param {Number} bytes Integer 값 (0~)
 * @param {Number} decimals Integer 값 (0~)
 * @returns {String} /[1-9]?[0-9]?[0-9] (Byte|KB|MB|GB|TB|PB|EB|ZB|YB)/
 */
export const formatBytes = (bytes, decimals = 2) => {
  const _bytes = parseInt(bytes, 10);
  if (_bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  // Find index for what size unit is used
  const i = Math.floor(Math.log(_bytes) / Math.log(k));

  return String((_bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

/** 
 * 가짜 async를 위한 프로미스 반환
 * @param {Number} ms = millisecond. Integer 값 (0~)
 * @returns {Promise} with setTimeout
 */
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 두 개의 같은 길이를 가진 일차원 배열을 두 번째 배열의 값을 key로 하여 오브젝트로 변환
 * @param {Array<any>} data 
 * @param {Array<string|number>} keys 
 * @returns {Object} merged object
 */
export const createData = (data, keys) => {
  if (!Array.isArray(data) || !Array.isArray(keys)) {
    throw new Error('Both of `data` and `keys` props must be flatten array.');
  };
  if (data.length !== keys.length) {
    throw new Error('This `data` and `keys` props must have same length.');
  };
  return keys.reduce(
    (prev, key) => ({
      ...prev,
      [key]: data[keys.indexOf(key)]
    }),
    {}
  );
};

/**
 * 원하는 길이(default 8)의 랜덤한 문자 id 값을 반환
 * @param {Number} len Integer (0~)
 * @returns {String} randomId
 */
export const randomId = (len = 8) => {
  const CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const BASE = CHAR.length
  let ID = "";
  while (len) {
    const ranIdx = Math.floor(Math.random() * BASE);
    len = len - 1;
    ID = ID + CHAR[ranIdx];
  }
  return ID
}
