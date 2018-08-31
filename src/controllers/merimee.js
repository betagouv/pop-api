const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const Merimee = require('../models/merimee');
const Memoire = require('../models/memoire');
const { uploadFile, formattedNow } = require('./utils')

function checkIfMemoireImageExist(notice) {
    return new Promise(async (resolve, reject) => {
        const NoticesMemoire = await Memoire.find({ LBASE: notice.REF });
        const arr = NoticesMemoire.map(e => { return { ref: e.REF, url: e.IMG } });
        resolve(arr);
    })
}

router.put('/:ref', upload.any(), async (req, res) => {
    try {
        const ref = req.params.ref;
        const notice = JSON.parse(req.body.notice);
        notice.DMAJ = formattedNow();
        const arr = await checkIfMemoireImageExist(notice);
        notice.MEMOIRE = arr;
        await Merimee.findOneAndUpdate({ REF: ref }, notice, { upsert: true, new: true });
        res.status(200).send({ success: true, msg: "OK" })
    } catch (e) {
        res.status(500).send({ success: false, msg: JSON.stringify(e) })
    }
});

router.post('/', upload.any(), async (req, res) => {
    try {
        const notice = JSON.parse(req.body.notice);
        notice.DMIS = notice.DMAJ = formattedNow();
        const arr = await checkIfMemoireImageExist(notice)
        notice.MEMOIRE = arr;
        const obj = new Merimee(notice);
        await obj.save();
        res.status(200).send({ success: true, msg: "OK" })
    } catch (e) {
        res.status(500).send({ success: false, msg: JSON.stringify(e) })
    }
})

router.get('/:ref', (req, res) => {
    const ref = req.params.ref;
    Merimee.findOne({ REF: ref }, (err, notice) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (notice) {
            res.status(200).send(notice);
        } else {
            res.sendStatus(404);
        }
    });
})


router.delete('/:ref', (req, res) => {
    const ref = req.params.ref;
    Merimee.findOneAndRemove({ REF: ref }, (error) => {
        if (error) return res.status(500).send({ error });
        return res.status(200).send({});
    });
})


module.exports = router


