const UUid = require("uuid");
const path = require("path");
const { AppsSale, AppsInfo } = require("../DBmodels/DBmodels");
const apiError = require("../errors/apiError");

class AppsContrSale {

  async createForSale(req, res, next) {

    try {
      let { city, location, area, rooms, cost, equipments, descriptions } = req.body;
  
      const { img_1 } = req.files;
      let fileName1 = UUid.v4() + ".jpg";
      img_1.mv(path.resolve(__dirname, "..", "static", fileName1));

      const { img_2 } = req.files;
      let fileName2 = UUid.v4() + ".jpg";
      img_2.mv(path.resolve(__dirname, "..", "static", fileName2));

      const { img_3 } = req.files;
      let fileName3 = UUid.v4() + ".jpg";
      img_3.mv(path.resolve(__dirname, "..", "static", fileName3));

      const appsSale = await AppsSale.createForSale({
        city,
        location,
        area,
        rooms,
        cost,
        equipments,
        descriptions,
        img_1: fileName1,
        img_2: fileName2,
        img_3: fileName3,
      });

     
   

      return res.json(appsSale);
    } catch (e) {
      next(apiError.request(e.message));
    }
  }


  async get_allSale(req, res) {
    let {limit, page} = req.query
    page = page || 1
    limit = limit || 5
    let appsSale
    let offset = page * limit - limit

    appsSale = await AppsSale.findAll({limit, offset})
    return res.json(appsSale)
  }

  async get_tableSale(req, res) {
    const {id} = req.params
    const appsSale = await AppsSale.findOne(
      {
        where: {id},

      },  
    ) 
    return res.json(appsSale)
  }

}

module.exports = new AppsContrSale();
