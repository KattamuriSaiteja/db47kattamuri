var earphones = require('../models/earphones');
// List of all earphones
exports.earphones_list = async function (req, res) {
    try {
        theEarphones = await earphones.find();
        res.send(theEarphones);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.earphones_view_all_Page = async function (req, res) {
    try {
        theEarphones = await earphones.find();
        res.render('earphones', { title: 'earphones Search Results', results: theEarphones });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.earphones_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await earphones.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle earphones create on POST.
exports.earphones_create_post = async function (req, res) {
    console.log(req.body)
    let document = new earphones();
    document.brand = req.body.brand;
    document.earbudsModel = req.body.earbudsModel;
    document.jackMM = req.body.jackMM;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle earphones delete form on DELETE.
exports.earphones_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: earphones delete DELETE ' + req.params.id);
};
// Handle earphones update form on PUT.
exports.earphones_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await earphones.findById(req.params.id)
        // Do updates of properties
        if (req.body.brand) toUpdate.brand = req.body.brand;
        if (req.body.earbudsModel) toUpdate.earbudsModel = req.body.earbudsModel;
        if (req.body.jackMM) toUpdate.jackMM = req.body.jackMM;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
};