const customFecth = (time, promise) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(promise)
        }, time)
    })
}

export default customFecth;