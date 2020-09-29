const express = require('express');

module.exports = (function () {

    /**
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    function bookCab(req, res) {
        res.sendStatus(200);
    }

    return { bookCab }
}());
