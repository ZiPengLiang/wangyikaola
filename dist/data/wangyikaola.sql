/*
Navicat MySQL Data Transfer

Source Server         : 1811
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : wangyikaola

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-02-18 14:06:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `username` varchar(255) DEFAULT NULL,
  `gid` varchar(255) DEFAULT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `newprice` varchar(255) DEFAULT NULL,
  `oldprice` varchar(255) DEFAULT NULL,
  `shuifei` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `littleimg` varchar(255) DEFAULT NULL,
  `sum` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `gid` varchar(255) NOT NULL,
  `goodname` varchar(255) DEFAULT NULL,
  `newprice` varchar(255) DEFAULT NULL,
  `oldprice` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `bigimg` varchar(255) DEFAULT NULL,
  `littleimg` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `duixiang` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `areaimg` varchar(255) DEFAULT NULL,
  `shuifei` varchar(255) DEFAULT NULL,
  `kaola` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `chuxiao` varchar(255) DEFAULT NULL,
  `gongchangdian` varchar(255) DEFAULT NULL,
  `sales` varchar(255) DEFAULT NULL,
  `newgoods` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('2', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('3', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('4', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('5', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '1000', 'n');
INSERT INTO `goods` VALUES ('6', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('7', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('8', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('9', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '1000', 'n');
INSERT INTO `goods` VALUES ('10', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('11', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('12', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('13', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('14', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('15', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '8000', 'n');
INSERT INTO `goods` VALUES ('16', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('17', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('18', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('19', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '8000', 'n');
INSERT INTO `goods` VALUES ('20', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('21', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('22', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('23', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('24', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('25', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '1000', 'n');
INSERT INTO `goods` VALUES ('26', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('27', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('28', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('29', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '1000', 'n');
INSERT INTO `goods` VALUES ('30', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('31', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('32', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('33', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('34', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('35', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '8000', 'n');
INSERT INTO `goods` VALUES ('36', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('37', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('38', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('39', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '8000', 'n');
INSERT INTO `goods` VALUES ('40', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('41', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('42', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('43', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('44', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('45', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '1000', 'n');
INSERT INTO `goods` VALUES ('46', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('47', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('48', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('49', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '1000', 'n');
INSERT INTO `goods` VALUES ('50', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('51', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('52', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('53', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('54', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('55', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '8000', 'n');
INSERT INTO `goods` VALUES ('56', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('57', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('58', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('59', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '8000', 'n');
INSERT INTO `goods` VALUES ('60', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('61', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('62', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('63', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('64', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('65', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '1000', 'n');
INSERT INTO `goods` VALUES ('66', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('67', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('68', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('69', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '1000', 'n');
INSERT INTO `goods` VALUES ('70', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('71', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('72', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('73', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('74', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('75', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '8000', 'n');
INSERT INTO `goods` VALUES ('76', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('77', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '1000', 'n');
INSERT INTO `goods` VALUES ('78', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('79', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '8000', 'n');
INSERT INTO `goods` VALUES ('80', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('81', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '3700', 'n');
INSERT INTO `goods` VALUES ('82', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '3960', 'y');
INSERT INTO `goods` VALUES ('83', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '4220', 'n');
INSERT INTO `goods` VALUES ('84', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '4480', 'y');
INSERT INTO `goods` VALUES ('85', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '4740', 'n');
INSERT INTO `goods` VALUES ('86', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '5000', 'y');
INSERT INTO `goods` VALUES ('87', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '3000', 'y');
INSERT INTO `goods` VALUES ('88', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('89', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '200', 'y');
INSERT INTO `goods` VALUES ('90', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '3700', 'n');
INSERT INTO `goods` VALUES ('91', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '3960', 'y');
INSERT INTO `goods` VALUES ('92', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '4220', 'n');
INSERT INTO `goods` VALUES ('93', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '4480', 'y');
INSERT INTO `goods` VALUES ('94', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '4740', 'n');
INSERT INTO `goods` VALUES ('95', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '3000', 'y');
INSERT INTO `goods` VALUES ('96', 'nnisfree 悦诗风吟 [油性皮肤用]男士控油洗面奶 150毫升', '58', '90', '1209', 'img/yueshifengyingbig.jpg', 'img/yueshifengying.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.5', 'n', '1000', 'n', 'n', '8000', 'n');
INSERT INTO `goods` VALUES ('97', 'Sukin 苏芊 面部去角质死皮磨砂膏 125毫升', '65', '178', '1201', 'img/shuqianbig.jpg', 'img/shuqian.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '7.28', 'n', '200', 'y', 'n', '200', 'y');
INSERT INTO `goods` VALUES ('98', 'Sukin 苏芊 天然洁面乳 125毫升 畅销单品必入', '45', '120', '888', 'img/sukibig.jpg', 'img/suki.jpg', 'Sukin 苏芊', 'female', '澳大利亚', 'img/aodaliya.png', '5.04', 'y', '8000', 'y', 'n', '3700', 'n');
INSERT INTO `goods` VALUES ('99', '花印（HANAJIRUSHI）备长炭控油洁面乳120g', '55.9', '65', '162', 'img/huayingbig.jpg', 'img/huaying.jpg', 'HANAJIRUSHI 花印', 'all', '日本', 'img/riben.png', '0', 'n', '4000', 'n', 'y', '3960', 'y');
INSERT INTO `goods` VALUES ('100', 'innisfree 悦诗风吟 森林男士去角质洁面膏 150毫升', '59', '90', '1930', 'img/quzhimianmobig.jpg', 'img/quzhimianmo.jpg', 'innisfree 悦诗风吟', 'male', '韩国', 'img/hanguo.png', '6.61', 'y', '0', 'y', 'y', '4220', 'n');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(35) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '123456@163.com', '123456', null);
INSERT INTO `user` VALUES ('2', '1234667@163.com', '123456', null);
INSERT INTO `user` VALUES ('3', '1234567@163.com', '123456', null);
SET FOREIGN_KEY_CHECKS=1;
