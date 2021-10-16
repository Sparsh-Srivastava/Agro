const Article = require("../models/article");

exports.pie = async (req, res, next) => {
  let body = [];
  const id = req.params.id;
  let english = 0;
  let hindi = 0;
  let french = 0;
  let tamil = 0;
  let spanish = 0;
  let malayalam = 0;
  let arabic = 0;
  let dutch = 0;
  const details = await Article.find({ userId: id });
  details.forEach((detail) => {
    const language = detail.language;
    if (language == "English") {
      english++;
    } else if (language == "Hindi") {
      hindi++;
    } else if (language == "French") {
      french++;
    } else if (language == "Tamil") {
      tamil++;
    } else if (language == "Malayalam") {
      malayalam++;
    } else if (language == "Spanish") {
      spanish++;
    } else if (language == "Arabic") {
      arabic++;
    } else if (language == "Dutch") {
      dutch++;
    }
  });

  body.push(
    {
      Language: "English",
      Articles: english,
    },
    {
      Language: "Hindi",
      Articles: hindi,
    },
    {
      Language: "French",
      Articles: french,
    },
    {
      Language: "Tamil",
      Articles: tamil,
    },
    {
      Language: "Malayalam",
      Articles: malayalam,
    },
    {
      Language: "Spanish",
      Articles: spanish,
    },
    {
      Language: "Arabic",
      Articles: arabic,
    },
    {
      Language: "Dutch",
      Articles: dutch,
    }
  );
  res.send(body);
};

exports.radar = async (req, res, next) => {
  let body = [];
  const id = req.params.id;
  let english = 0;
  let hindi = 0;
  let french = 0;
  let tamil = 0;
  let spanish = 0;
  let malayalam = 0;
  let arabic = 0;
  let dutch = 0;
  const details = await Article.find({ userId: id });
  details.forEach((detail) => {
    const language = detail.language;
    if (language == "English") {
      english++;
    } else if (language == "Hindi") {
      hindi++;
    } else if (language == "French") {
      french++;
    } else if (language == "Tamil") {
      tamil++;
    } else if (language == "Malayalam") {
      malayalam++;
    } else if (language == "Spanish") {
      spanish++;
    } else if (language == "Arabic") {
      arabic++;
    } else if (language == "Dutch") {
      dutch++;
    }
  });

  body.push(
    {
      Language: "English",
      Articles: english,
      max: 20,
    },
    {
      Language: "Hindi",
      Articles: hindi,
      max: 20,
    },
    {
      Language: "French",
      Articles: french,
      max: 20,
    },
    {
      Language: "Tamil",
      Articles: tamil,
      max: 20,
    },
    {
      Language: "Malayalam",
      Articles: malayalam,
      max: 20,
    },
    {
      Language: "Spanish",
      Articles: spanish,
      max: 20,
    },
    {
      Language: "Arabic",
      Articles: arabic,
      max: 20,
    },
    {
      Language: "Dutch",
      Articles: dutch,
      max: 20,
    }
  );
  res.send(body);
};
