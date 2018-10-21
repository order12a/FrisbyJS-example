**FrisbyJS example**

Practical example for Eleks QA talk.

To run tests:

`npm i`

`npm test`

_Note:_

This example uses own fork of FrisbyJS with feature of enabling logs of request/response
with single option while configuring _frisby.globalSetup_: 

 	requestLogger: false,
 	responseLogger: false

Also please ensure that target host for testing is available. In case of problem setup own instance of SUT: 
https://github.com/microservices-demo/microservices-demo

