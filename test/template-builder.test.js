/**
 * Created by archethic on 2021/08/28
 * Copyright (c) archethic.
 * This code is licensed under the MIT Licensing Principles.
 */

const { TemplateBuilder, TemplateType } = require('../index')

var test = new TemplateBuilder().append('알아서').append('').build(TemplateType.DEFAULT)