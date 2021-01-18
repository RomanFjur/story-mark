class RequestError {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode; // Статус-код не равный 200 (404, 500 и тд)
    this.message = `Request Error: ${message}`; // Сообщение об ошибке (расшифровка статус-кода ошибки)
    this.data = data; // Данные, переданные вместе с ошибкой
  }
}

export default class HTTPClient {
  constructor(url) {
    this.baseUrl = url;
  }

  endpoint(method, path, options) {
    return async (data = undefined) => {
      let newUrl = this.baseUrl + path;
      try {
        const regUserId = /:[a-z]{1,}/gi;
        if (newUrl.match(regUserId)) {
          const urlParams = newUrl.match(regUserId);
          let mappedUrlParams = urlParams.map(str => str.replace(':', ''));
          if (typeof data != 'object') {
            newUrl = newUrl.replace(regUserId, data);
            data = undefined;
          } else {
            for (let key in data) {
              for (let i = 0; i < mappedUrlParams.length; i++) {
                if (mappedUrlParams[i].indexOf(key) !== -1) {
                  newUrl = newUrl.replace(urlParams[i], data[key]);
                }
              }
            };
          }
        }
        console.log(data);
        const response = await fetch(newUrl, {
          method,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
		      },
          body: JSON.stringify(data)
        });
        if (response.ok) {
          const json = response.json();
          console.log(await json);
          return await json;
        } else {
          throw new RequestError(response.status, `${response.status}`, response.bodyUsed);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  }
}