# The problem:

As head of operations I want to know at what time certain scheduled job run so that I know how to set expectations with my users.

Context: at Labrador we have a bunch of lambdas that run on a schedule, we want to expose this information to a non technical audience.

# Step 1

Write a function to gather all lambdas trigger for an AWS account.
Hint: The listRules function will do the job for you, documentation is [here](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchEvents.html#listRules-property)

You can mimic the Node.JS SDK on command line by running:

`aws events list-rules --region eu-west-1| jq .`

# Step 2

Filter out all the triggers that are not in production environment
Hint: assume that the convention is having `-prod-` in the triggers name

# Step 3

Filter out all the triggers which don't have a state equals to ENABLED

# Step 4

Print to console an array of objects with only the trigger name and a human-readable version of the cron expression
Hint: some cron expressions won't be parsable, just silently fail the parsing
Hint: [crontrue](https://www.npmjs.com/package/cronstrue) is a decent library to do the parsing job

# Non functional requirements:

- Use Node.JS 8.X syntax (const, deconstructuring, async, await, etc)
- Write tests only if you think it will make you faster in completing the code test
