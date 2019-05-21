const Promise = require('bluebird');
const AWS = require('aws-sdk');
const config = require('config');
const Rule = require('./../models/rule');
const exampleResponse = require('./../../test/example-response');

AWS.config.update(config.get('services.aws'));
AWS.config.setPromisesDependency(Promise);
const cwevents = new AWS.CloudWatchEvents();

module.exports.getRules = async (params={}) => {
  try {
    const data = await cwevents.listRules(params).promise();
    return data.Rules.map(r => new Rule(r));
  } catch (error) {
    console.log(`getRules failed ${error.stack}`);
    return exampleResponse.Rules.map(r => new Rule(r));;
  }
};
