
import cron from 'node-cron';
const str = require('../../utils/string');
import { Transaction } from '../db/models';

const initScheduler = () => cron.schedule('* * * * *', async () => {
    console.log('running a task every minute');
    try {
// @ts-ignore
        const transaction = Transaction.build({
            value: 1000000 * Math.random(),
            timestamp: new Date().getTime(),
            receiver: str.rand(24),
            confirmed: false,
            sender: str.rand(24),
        });
        await transaction.save();
        console.log(`transaction : `+ transaction.id + " of "+ transaction.value+  ' created')
    } catch (error) {
        console.log('unable to save', error)
    }
});

export default initScheduler;