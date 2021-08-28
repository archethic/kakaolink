/**
 * Created by archethic on 2021/08/28
 * Copyright (c) archethic.
 * This code is licensed under the MIT Licensing Principles.
 */

const { TemplateType } = require('./template-type')

module.exports = (function () {
    function TemplateBuilder() {

    }

    TemplateBuilder.prototype.append = function () {
        return this;
    }

    /**
     * Build Template
     * @param {TemplateType} type TemplateType
     */
    TemplateBuilder.prototype.build = function(type) {
        
    }

    return TemplateBuilder;
})()