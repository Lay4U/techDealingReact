function increase(number, callback){
  setTimeout(() => {
    const result = number + 10;
    if(callback){
      callback(result);
    }
  }, 1000);
}

console.log('작업 시작');
increase(0, result =>{
  console.log(result);
  increase(result, result => {
    console.log(result);
    increase(result, result => {
      console.log(result);
      increase(result, result => {
        console.log(result);
        console.log('작업 완료');
      })
    })
  })
})

function increase(number){
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50){
        const e = new Error('NumberisTooBig');
        return reject(e);
      }
      resolve(result)
    }, 1000)
  });
  return promise
}

increase(0)
.then(number => {
  console.log(number);
  return increase(number);
})
.then(number => {
  console.log(number);
  return increase(number);
})
.then(number => {
  console.log(number);
  return increase(number);
})
.then(number => {
  console.log(number);
  return increase(number);
})
.then(number => {
  console.log(number);
  return increase(number);
})
.catch(e => {
  console.log(e);
})

function increase(number){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if (result > 50){
        const e = new Error('NumberTooBing');
        return reject(e);
      }
      resolve(result)
    }, 1000)
  });
}

async function runTasks() {
  try{
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}