import React from 'react'

async function takeTime(){
    await new Promise((resolve) =>{
        setTimeout(resolve,4000)
    })
}

const user = async () => {
    await takeTime()
    // throw new Error("This is mannual error");
  return (
    <div className='text-5xl text-red-700 text-center'>
      NORMAL USER
    </div>
  )
}

export default user
