import express from 'express';
import subscribe from '../models/Subscription';

const router = express.Router();

//GET ALL SUBSCRIBERS
router.get('/',async (req, res) => {
    try{
        const subscribes = await subscribe.find();
        res.json(subscribes);
        // return;
    } catch(err) {
        res.send('Error' + err);
        // return;
    }
});

//ADD SUBSCRIBER
router.post('/', async (req, res) => {
    // console.log(req.body)

    const newsubscribe = new subscribe({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    });
    try{
        const subs = await newsubscribe.save()
        res.json(subs);
        res.status(200);
        res.end()
        // return;
    }

    catch(err) {
    res.status(400).send("Error:" + err);
    res.end()
    // return;
}
});

//FIND SUBSCRIBER BY ID
router.get('/:subId', async (req, res) => {
    try{
        const subs = await subscribe.findById(req.params.subId);
        res.json(subs);
    }catch(err) {
        res.json({message: err})
    }
})

//REMOVE SUBSCRIBER BY ID
router.delete('/:subId', async (req, res) => {
    try {
        const removedSubscriber = await subscribe.remove({ _id: req.params.subId});
        res.json(removedSubscriber);
        // return;
    } catch(err) {
        res.json({
            message: err
        });
        // return;
    }
});
module.exports = router;