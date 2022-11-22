
const prefixer = 'localhost:3000/api';

export const transactionUrls = {
    LIST: (range: any)=> `${prefixer}transaction?page=${range?.page ?? 1}&per_page=${
        range?.per_page ?? 18
      }&keyword=${range.keyword ?? ""}`,
    GET_UNIQUE: (id:number)=> `${prefixer}transaction/${id}`,
    UPDATE: (id:number)=> `${prefixer}transaction/${id}`,
    DELETE: (id:number)=> `${prefixer}transaction/${id}`,
    ADD: `${prefixer}transaction`,
}