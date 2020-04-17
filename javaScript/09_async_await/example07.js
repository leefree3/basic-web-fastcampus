//finally
//try ,catch로 실행 한 뒤 마지막으로 항상 실행할 구문

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      //reject(new Error("reason"));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000); //p가 reject되면서 throw함
  return "Mark: " + ms;
}

async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("end");
  }
}

main();
