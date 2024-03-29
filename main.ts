import "dotenv/config"
import { getKeypairFromEnvironment} from "@solana-developers/helpers"

const kp = getKeypairFromEnvironment("SECRET_KEY")

console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`
  );