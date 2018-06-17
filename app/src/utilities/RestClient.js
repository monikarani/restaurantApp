/*
 * @file: RestClient.js
 * @description: Connection file for the application
 * @date: 17 June 2018
 * @author: Monika Rani
 * */

"use strict";

import Connection  from "../constants/Connection";
import querystring from "querystring";
import axios from 'axios';
import $ from 'jquery';

var config = {
    headers: {'Content-Type': 'application/json' }
};

class RestClient {
   
    static post(url, params) {
        let context = this;
        
        return new Promise(function(fulfill, reject) {
          
         // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            axios.post('api/v2.1' + url, JSON.stringify(params), config)
             
            .then(function (response) {
               
                fulfill(response.data);
               
            })
            .catch(function (error) {
                
                 reject(error);
            });

               
               
        });
    }

    static put(url, params) {
        let context = this;

        return new Promise(function(fulfill, reject) {
            axios.put('/api/v2.1/' + url, JSON.stringify(params), config)
            .then(function (response) {
                fulfill(response.data);
            })
            .catch(function (error) {
                 reject(error);
            });
        });           
            
           
       
    }

    static delete(url, params) {
        let context = this;
        let query = querystring.stringify(params);
        return new Promise(function(fulfill, reject) {
            axios.delete('/api/v2.1/' + url + "?" + query, config)
            .then(function (response) {
               
                fulfill(response.data);
                
            })
            .catch(function (error) {
                
                 reject(error);
            });
        });
    }


    static get(url, params) {
        let context = this;
        let query = querystring.stringify(params);
         
        return new Promise(function(fulfill, reject) {
            
           
            axios.get('/api/v2.1/' + url + "?" + query, config)

            .then(function (response) {
              
                fulfill(response.data);
               
            })
            .catch(function (error) {
                
                 reject(error);
            });

        
              
               
        });
    }

}

export default RestClient;
