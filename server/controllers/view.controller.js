const BaseController = require('./base/base.controller');

class ViewController extends BaseController {
    getView(req,res) {
        const json = {
            title: "your mum"
        }
        res.send(json)
    }
}

module.exports = ViewController