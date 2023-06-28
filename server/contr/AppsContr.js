const UUid = require("uuid");
const path = require("path");
const { Apps, AppsInfo } = require("../DBmodels/DBmodels");
const apiError = require("../errors/apiError");

class AppsContr {

  async create(req, res, next) {

    try {
      let { city, location, area, rooms, rent, guarantee, commision, arrival, departure, equipments, descriptions, info } = req.body;
  
      const { img_1 } = req.files;
      let file_Name1 = UUid.v4() + ".jpg";
      img_1.mv(path.resolve(__dirname, "..", "static", file_Name1));

      const { img_2 } = req.files;
      let file_Name2 = UUid.v4() + ".jpg";
      img_2.mv(path.resolve(__dirname, "..", "static", file_Name2));

      const { img_3 } = req.files;
      let file_Name3 = UUid.v4() + ".jpg";
      img_3.mv(path.resolve(__dirname, "..", "static", file_Name3));

      const apps = await Apps.create({
        city,
        location,
        area,
        rooms,
        rent,
        guarantee,
        commision,
        arrival,
        departure,
        equipments,
        descriptions,
        img_1: file_Name1,
        img_2: file_Name2,
        img_3: file_Name3,
      });

     
      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
            AppsInfo.create({
                equipment: i.equipment,
                description: i.description,
                appsId: apps.id
            })
        )
    }

      return res.json(apps);
    } catch (e) {
      next(apiError.request(e.message));
    }
  }


  async get_all(req, res) {
    let {limit, page} = req.query
    page = page || 1
    limit = limit || 5
    let apps
    let offset = page * limit - limit

    apps = await Apps.findAll({limit, offset})
    return res.json(apps)
  }

  async get_table(req, res) {
    const {id} = req.params
    const apps = await Apps.findOne(
      {
        where: {id},
        include: [{model: AppsInfo, as: 'info'}]
      },  
    ) 
    return res.json(apps)
  }

}

module.exports = new AppsContr();
