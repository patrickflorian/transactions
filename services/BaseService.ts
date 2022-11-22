import SecureLS from 'secure-ls';
// import useRouter from 'utils/useRouter';

// const ls = new SecureLS({ encodingType: 'aes' });

class BaseService {
  static getHeaders = (isFile?: boolean) => {
    let headers = new Headers();
    if (!isFile) {
      headers.append('Content-Type', 'application/json');
    }
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Origin', '*');
    headers.append('Credentials', 'same-origin');

    // let lang = ls.get('lang') || 'fr';
    // headers.append('lang', lang);
    return headers;
  };

  static getHeadersAuth = (isFile?: boolean) => {
    let headers = BaseService.getHeaders(isFile);
    // let token = ls.get('token') ? (ls.get('token') || '').toString() : '';
    // if (token === '') {
    //   window.location.reload();
    // }
    // headers.append('Authorization', `Bearer ${token}`);
    return headers;
  };

  static getToken = () => {
    return ''
  };

  static postRequest = async (
    url: string,
    body: object,
    required_auth: boolean
  ) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers: RequestInit = {
      method: 'POST',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(body)
    };

    let response = await fetch(url, headers)
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        return err;
      });
    return response;
  };

  static postFileRequest = async (
      url: string,
      body: FormData,
      required_auth: boolean
  ) => {
    let head = required_auth
      ? BaseService.getHeadersAuth(true)
      : BaseService.getHeaders(true);

    let headers: RequestInit = {
      method: 'POST',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: body
    };
    let response = await fetch(url, headers)
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        return err;
      });
    return response;
  };

  static putFileRequest = async (
      url: string,
      body: FormData,
      required_auth: boolean
  ) => {
    let head = required_auth
      ? BaseService.getHeadersAuth(true)
      : BaseService.getHeaders(true);

    let headers: RequestInit = {
      method: 'PUT',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: body
    };
    let response = await fetch(url, headers)
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        return err;
      });
    return response;
  };

  static putRequest = async (
    url: string,
    body: object,
    required_auth: boolean
  ) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers: RequestInit = {
      method: 'PUT',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(body)
    };
    let response = await fetch(url, headers)
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        return err;
      });
    return response;
  };

  static patchRequest = async (
    url: string,
    body: object,
    required_auth: boolean
  ) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers: RequestInit = {
      method: 'PATCH',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(body)
    };
    let response = await fetch(url, headers)
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        return err;
      });
    return response;
  };

  static deleteRequest = async (
    url: string,
    body: object,
    required_auth: boolean
  ) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers: RequestInit = {
      method: 'DELETE',
      headers: head,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(body)
    };
    let response = await fetch(url, headers)
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        return err;
      });
    return response;
  };

  static getRequest = async (url: string, required_auth: boolean) => {
    let head = required_auth
      ? BaseService.getHeadersAuth()
      : BaseService.getHeaders();

    let headers: RequestInit = {
      method: 'GET',
      headers: head,
      mode: 'cors',
      cache: 'default'
    };
    let response = await fetch(url, headers)
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        return err;
      });
    return response;
  };
}

export default BaseService;
