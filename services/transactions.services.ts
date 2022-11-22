import { UpdateTransaction } from "../store/types";
import BaseService from "./BaseService";
import { transactionUrls } from "./urls";

class TransactionService {
    static getAll = (range: any) => {
        return BaseService.getRequest(transactionUrls.LIST(range), false);
    }

    static getUnique = (id: number) => {
        return BaseService.getRequest(transactionUrls.GET_UNIQUE(id), false);
    }
    static add = (data: UpdateTransaction) => {
        return BaseService.postRequest(transactionUrls.ADD, data, false);
    }

    static update = (data: UpdateTransaction) => {
        return BaseService.putRequest(transactionUrls.ADD, data, false);
    }

    static delete = (id: number) => {
        return BaseService.getRequest(transactionUrls.DELETE(id), false);
    }
}

export default TransactionService;