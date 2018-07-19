var client = require('../../app/models/client');

describe("configuration", function() {

  xit("connects to redis", function(done){

    client.get('hey', function (err) {
      expect(err).toBe(null);
      done();
    });
  });
});