const aws = require('./services/aws');

const run = async () => {
  console.log('I run');

  let rules = await aws.getRules();
  rules = rules.filter(r => r.isEnabled()).filter(r => r.isProdEnv());

  const schedules = rules.map(r => {
    return {
      name: r.getName(),
      time: r.parseCron()
    }
  });

  console.log(schedules);

  return 'I run';
};


module.exports.run = run;

