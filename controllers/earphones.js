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

/*
exports.earphones_list = function (req, res) {
    res.send('NOT IMPLEMENTED: earphones list');
};*/
// for a specific earphones.
exports.earphones_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: earphones detail: ' + req.params.id);
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
exports.earphones_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: earphones update PUT' + req.params.id);
};