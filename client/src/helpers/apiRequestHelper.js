class ApiRequestHelper {
  constructor(){

  }

  makeGetRequest(url, callback){
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.addEventListener('load', function () {
      if (request.status !== 200) return
      const jsonString = request.responseText
      const resultsObject = JSON.parse(jsonString)
      callback(resultsObject)
    })
    request.send()
  }

  makeDeleteRequest(url, callback){
    const request = new XMLHttpRequest()
    request.open('DELETE', url)
    request.addEventListener('load', function () {
      if (request.status !== 200) return
      const jsonString = request.responseText
      const resultsObject = JSON.parse(jsonString)
      callback(resultsObject)
    })
    request.send()
  }

  makePostRequest(url, callback, payload){
    const request = new XMLHttpRequest()
    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.addEventListener('load', function () {
      if (request.status !== 200) return
      const jsonString = request.responseText
      const resultsObject = JSON.parse(jsonString)
      callback(resultsObject)
    })
    request.send(payload)
  }

}

export default ApiRequestHelper