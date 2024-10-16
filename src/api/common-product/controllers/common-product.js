'use strict';

/**
 * common-product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::common-product.common-product', ({strapi}) => ({
    async findOne(ctx) {
        
      const {id} = ctx.params;


      const entry = await strapi.db.query('api::common-product.common-product').findOne({
        
        where: { id: id },
        populate: {image: "image"}
       
      });
        const sanitizedResults = await this.sanitizeOutput(entry, ctx);
    
        return this.transformResponse(sanitizedResults);
      }
}));
