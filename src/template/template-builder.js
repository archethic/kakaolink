/**
 * Created by archethic on 2021/08/28
 * Copyright (c) archethic.
 * This code is licensed under the MIT Licensing Principles.
 */

const { TemplateType } = require('./template-type')

module.exports = (function () {
    function TemplateBuilder() {
        /** @private */ this.content = { template_object: {} };
    }

    TemplateBuilder.prototype.append = function (key, value) {
        this.content[key] = value;
        return this;
    }
    
    TemplateBuilder.prototype.addList = function (title, description, imageUrl, link) {
        if(this.content["template_object"]["contents"]) {
            this.content["template_object"]["contents"] = [];
        }
    }

    /**
     * Build Template
     * @param {TemplateType} type TemplateType
     * @return {Record<string, unknown>}
     */
    TemplateBuilder.prototype.build = function(type) {
        this.content['object_type'] = type;
        return this.content;
    }

    return TemplateBuilder;
})();