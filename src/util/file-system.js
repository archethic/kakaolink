/**
 * Created by naijun on 2021/09/26
 * Copyright (c) naijun.
 * This code is licensed under the MIT Licensing Principles.
 */

module.exports.FileSystem = (function () {
   function FileSystem() {

   }

    /**
     * exists File
     * @param {string} filepath
     * @return {boolean}
     */
   FileSystem.exists = function (filepath) {
       return FileStream.read(filepath) !== null;
   }

   FileSystem.write = FileStream.write;

   FileSystem.read = FileStream.read;

   return FileSystem;
})()