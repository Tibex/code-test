const cronstrue = require('cronstrue');
const ruleState = require('./../constants/rule-state');
const ruleEnv = require('./../constants/rule-env');
const cronExp = /cron\(((.*\s){5}).*\)/g;

module.exports = class Rule {
  constructor(ruleData) {
    this.State = ruleData.State;
    this.Name = ruleData.Name;
    this.ScheduleExpression = ruleData.ScheduleExpression;
  }

  getName() {
    return this.Name;
  }

  isEnabled() {
    return this.State === ruleState.ENABLED;
  }

  isEnv(env){
    return this.Name.includes(env);
  }

  isProdEnv() {
    return this.isEnv(ruleEnv.PRODUCTION);
  }

  isDevEnv() {
    return this.isEnv(ruleEnv.DEVELOPMENT);
  }

  getScheduleExpression() {
    return this.ScheduleExpression;
  }

  parseCron() {
    try {
      const match = cronExp.exec(this.getScheduleExpression());
      return cronstrue.toString(match[1]);
    } catch (e) {
      return '';
    }
  }
};
