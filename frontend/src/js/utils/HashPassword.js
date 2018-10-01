import crypto from "crypto"

function genRandomString(length) {
    return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0,length);
  }

function sha512(password, salt){
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    return value;

  }
export default function hashPassword(data, saltLength) {
    let salt = genRandomString(saltLength);
    let newPassword = sha512(data.password, salt);
    data.salt = salt;
    data.password = newPassword;
}