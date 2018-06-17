/*
 * @file: Regex.js
 * @description: Regex used for validation in application.
 * @date: 8.6.2018
 * @author: Monika Rani
 * */

var Regex = {   
    validateFreeSpace: function(val) {
        return /^$|^[^\s]+(\s+[^\s]+)*$/.test(val);
    },
}

module.exports = Regex
