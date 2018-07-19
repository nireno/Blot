var transform = require("../../app/thumbnail/transform.js");
var fs = require("fs-extra");
var output_dir = __dirname + "/data";

describe("sharp", function() {
  beforeEach(function(done) {
    fs.emptyDirSync(output_dir);
    done();
  });

  it("transforms an image", function(done) {
    var test_image = __dirname + "/peach.jpg";

    transform(test_image, output_dir, function(err, res) {
      expect(err).toBe(null);
      expect(res).toEqual({
        medium: {
          path: output_dir + "/medium-peach.jpg",
          width: 486,
          height: 512
        },
        large: {
          path: output_dir + "/large-peach.jpg",
          width: 486,
          height: 512
        },
        small: {
          path: output_dir + "/small-peach.jpg",
          width: 152,
          height: 160
        },
        square: {
          path: output_dir + "/square-peach.jpg",
          width: 160,
          height: 160
        }
      });
      done();
    });
  });
});
