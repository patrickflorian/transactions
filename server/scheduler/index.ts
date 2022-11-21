
import cron from 'node-cron';
const str = require('../../utils/string');
let models = require('../db');

const initScheduler = () => cron.schedule('* * * * *', async () => {
    console.log('running a task every minute');
    try {

        const transaction = await models.Transaction.create({
            value: 1000000 * Math.random(),
            timestamp: new Date().getTime(),
            receiver: str.rand(24),
            confirmed: false,
            sender: str.rand(24),
        });
        console.log(`transaction : `+ transaction.id + " of "+ transaction.value+  ' createeed')
    } catch (error) {
        console.log('unable to save', error)
    }
});

export default initScheduler;