import express from 'express';
import formtype from '../models/FormTypes';

const router = express.Router();

//GET ALL SUBSCRIBERS
router.get('/',async (req, res) => {
    try{
        const formtypes = await formtype.find();
        res.json(formtypes);
        // return;
    } catch(err) {
        res.send('Error' + err);
        // return;
    }
});

//ADD FormType
router.post('/', async (req, res) => {
    // console.log(req.body)

    const newformtype = new formtype({
        name: req.body.name
    });
    try{
        const newtype = await newformtype.save()
        res.json(newtype);
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

//FIND FormType BY ID
router.get('/:subId', async (req, res) => {
    try{
        const newtype = await formtype.findById(req.params.subId);
        res.json(newtype);
    }catch(err) {
        res.json({message: err})
    }
})

//REMOVE formtypeR BY ID
router.delete('/:subId', async (req, res) => {
    try {
        const removedformtype = await formtype.remove({ _id: req.params.subId});
        res.json(removedformtype);
        // return;
    } catch(err) {
        res.json({
            message: err
        });
        // return;
    }
});

module.exports = router;