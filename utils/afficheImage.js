import fs from "fs";
import readline from "readline";

export async function afficheImage(nom, classe) {
  const fileStream = fs.createReadStream(`data/${classe}/${nom}.txt`);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(line);
  }
}
