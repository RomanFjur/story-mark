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
        const regToDoId = /:[a-z]{1,}/gi;

        if (newUrl.match(regToDoId)) {

          const urlParams = newUrl.match(regToDoId);
          
          let mappedUrlParams = urlParams.map(str => str.replace(':', ''));

          if (typeof data != 'object') {
            newUrl = newUrl.replace(regToDoId, data);
            data = undefined;
          } else {
            for (let key in data) {
              for (let i = 0; i < mappedUrlParams.length; i++) {
                if (mappedUrlParams[i].indexOf(key) != -1) {
                  newUrl = newUrl.replace(urlParams[i], data[key]);
                }
              }
            };
            // 1. Пройтись по mappedUrlParams (1 проход)
            // 2. Достать по ключу значение из Data
            // 3. Заменить по ключу в строке newUrl на значение
          }
        }

        const response = await fetch(newUrl, {
          method,
          headers: {
			      'Content-Type': 'application/json'
		      },
          body: JSON.stringify(data)
        });
        if (response.ok) {
          const json = await response.json();
          return json;
        } else {
          throw new RequestError(response.status, `${response.status}`, response.bodyUsed);
        }

      } catch (error) {
        console.log(error.message);
      }
    };
  }
}