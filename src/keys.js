import bcrypt from 'bcryptjs';

export default {
  secretKey: bcrypt.genSaltSync(10),

}