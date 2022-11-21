import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors';
import { getPagination, getPagingData } from '../../utils/pagination';
import { Transaction } from '../../server/db/models'
import { Op } from 'sequelize';
// initialise cors
const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
});

/**
 * @swagger
 * components:
 *   schemas:
 *     TransactionObject:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: the transaction ID.
 *           example: hWWNwskdGOnEdq0KIQ3S
 *         value:
 *           type: number
 *           description: The transaction amount.
 *           example: "100000"
 *         timestamp:
 *           type: number
 *           description: The transaction time.
 *           example: "100000"
 *         receiver:
 *           type: string
 *           description: receiver name.
 *           example: "John doe"
 *         sender:
 *           type: string
 *           description: sender name.
 *           example: "John doe"
 *         confirmed:
 *           type: boolean
 *           description: Transaction status.
 *           example: true  
 */
// Adding cors middleware
function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

/**
 * @swagger
 * /api/transaction:
 *   get:
 *     description: Returns all the transactions
 *     responses:
 *       200:
 *         description: hello world
 *   post:
 *     description: create a transactions
 *     responses:
 *       200:
 *         description: hello world
 */
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    // Run the middleware
    await runMiddleware(req, res, cors);
    const { method } = req;
    switch (method) {
        case "GET":
            const { page = 1, per_page = 20, receiver, sender } = req.query;
            var condition = receiver ? { receiver: { [Op.like]: `%${receiver}%` } } : null;
            const { limit, offset } = getPagination(Number(page), Number(per_page));
            // @ts-ignore
            Transaction.findAndCountAll({
                where: condition,
                limit,
                offset,
            })
                .then((data: any) => {
                    const response = getPagingData(data, Number(page), limit);
                    res.send(response);
                })
                .catch((err: any) => {
                    console.log(err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while retrieving transactions",
                    });
                });
            break;
        case "POST":
            const { data } = req.body;
            // @ts-ignore
            Transaction.create(data).then((response) => {
                return res.status(200).json(response);
            }).catch((err: any) => {
                console.log(err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating transactions",
                });
            });

            res.status(200);
            break;
        default:
            res.setHeader("Allow", ['POST', 'GET', 'HEAD']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}