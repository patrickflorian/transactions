import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors';
import { getPagination, getPagingData } from '../../../utils/pagination';
import { Transaction } from '../../../server/db/models'
import { Op } from 'sequelize';
// initialise cors
const cors = Cors({
    methods: ['GET', 'HEAD', 'DELETE', 'PUT'],
});

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
 * /api/transaction/{id}:
 *   get:
 *     tags:
 *       - transaction
 *     description: Returns the specified transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Transaction unique identifier
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: transaction found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransactionObject'
 *       404:
 *         description: transaction not found
 *   put:
 *     tags:
 *       - transaction
 *     description: update a transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Transaction unique identifier
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransactionObject'
 *       404:
 *         description: transaction not found 
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TransactionRequestObject'
 *   delete:
 *     tags:
 *       - transaction
 *     description: delete a transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Transaction unique identifier
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: successfully deleted
 *       404:
 *         description: transaction not found
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
            const { id } = req.query;
            
            // @ts-ignore
            Transaction.findByPk(id)
                .then((response: any) => {
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
            res.setHeader("Allow", ['GET', 'HEAD', 'DELETE', 'PUT']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
