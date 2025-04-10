import express from 'express';
import { riskAssessment, followupQuery } from '../data/pythonapis.js';

const router = express.Router();


router.route("/riskAssessment").post(async (req, res) => {
    try {
        const user = req.body;
        const riskData = await riskAssessment(user);
        return res.status(200).json(riskData)
        ;
    } catch (e) {
        return res.status(500).json({ error: e });
    }
});

router.route("/followupQuery").post(async (req, res) => {   
    try {
        
        const user = req.body;
        console.log(user.message)
        const riskData = user.riskData;
        console.log(riskData)
        const followupData = await followupQuery(riskData, user.message);
        
        return res.status(200).json(followupData);
    } catch (e) {
        return res.status(500).json({ error: e });
    }
});

export { router as pythonApis };


