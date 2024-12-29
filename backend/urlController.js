const URL = require("./urlModel");
const toBase62 = require("./utils/base62");
const catchasync = require("./utils/catchasync");

exports.shortURL = catchasync(async (req, res, next) => {
  const { longURL } = req.body;
  const count = await URL.countDocuments();
  const id = count + 1;
  const shortURL = toBase62(id);
  //   console.log(count);
  //   console.log(longURL);
  //   console.log(toBase62(count + 1));
  const url_data = {
    id,
    longURL,
    shortURL,
  };
  const data = await URL.create(url_data);
  const currentShortURL = data.shortURL;
  const clicks = data.clicks;
  res.status(200).json({
    status: "success",
    data: {
      shortURL: currentShortURL,
      clicks,
    },
  });
});
