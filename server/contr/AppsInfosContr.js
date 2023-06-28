const { Apps, AppsInfo } = require("../DBmodels/DBmodels");
const apiError = require("../errors/apiError");
const { where } = require("sequelize");

class AppsInfosContr {

  async create_table(req, res, next) {
    
    try {
      const { equipment, description, info } = req.body;

      const appsInfo = await AppsInfo.create({
        equipment,
        description
      });

      if (info) {
        info = JSON.parse(info)
        info.forEach(i =>
            AppsInfo.create({
                equipment: i.equipment,
                description: i.description,
            })
        )
    }

      return res.json(apps);
    } catch (e) {
      next(apiError.request(e.message));
    }
  }

  async get_table(req, res) {
    const {id} = req.params
    const appsInfo = await AppsInfo.findOne(
      {
        where: {id},
        include: [{model: AppsInfo, as: 'info'}]
      },
    ) 
    return res.json(appsInfo)
  }

}

module.exports = new AppsInfosContr();
