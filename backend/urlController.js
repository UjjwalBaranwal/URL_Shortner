const URL = require("./urlModel");
const { toBase62, fromBase62 } = require("./utils/base62");
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
exports.longURL = catchasync(async (req, res, next) => {
  const shortURL = req.params.id;
  const id = fromBase62(shortURL);
  //   console.log(`fromt the long url`);
  //   console.log({ shortURL });
  //   console.log({ id });

  const data = await URL.findOne({ id });
  if (!data) {
    return res.status(404).json({
      status: "error",
      message: "URL not found",
    });
  }
  const currentLongURL = data.longURL;
  data.clicks++;
  await data.save();

  res.status(302).redirect(currentLongURL);
});
