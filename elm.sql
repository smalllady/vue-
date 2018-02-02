-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:8889
-- Generation Time: Jan 27, 2018 at 09:06 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elm`
--

-- --------------------------------------------------------

--
-- Table structure for table `active`
--

CREATE TABLE IF NOT EXISTS `active` (
  `act_id` int(11) NOT NULL COMMENT '商家活动id',
  `act_type` int(11) NOT NULL COMMENT '活动类型',
  `act_con` text NOT NULL COMMENT '活动内容',
  `shop_id` int(11) NOT NULL COMMENT '绑定商家id',
  `act_typeText` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `active`
--

INSERT INTO `active` (`act_id`, `act_type`, `act_con`, `shop_id`, `act_typeText`) VALUES
(1, 0, '满50减15', 1, '减'),
(2, 1, '首单减10元', 1, '首'),
(3, 2, '特价20元', 1, '特'),
(4, 1, '首单减15元', 2, '首'),
(5, 2, '特价10元', 3, '特');

-- --------------------------------------------------------

--
-- Table structure for table `foods`
--

CREATE TABLE IF NOT EXISTS `foods` (
  `food_id` int(11) NOT NULL COMMENT '菜品id',
  `food_name` text NOT NULL COMMENT '菜品名称',
  `food_img` text NOT NULL COMMENT '菜品图片',
  `food_price` float NOT NULL COMMENT '菜品价格',
  `food_info` text NOT NULL COMMENT '菜品描述',
  `food_sellCount` int(11) NOT NULL COMMENT '菜品销量',
  `food_rating` char(100) NOT NULL COMMENT '菜品好评率  直接写死  字符串  “100%”',
  `shop_id` int(11) NOT NULL COMMENT '商家id',
  `type` int(11) NOT NULL COMMENT '菜品分类'
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `foods`
--

INSERT INTO `foods` (`food_id`, `food_name`, `food_img`, `food_price`, `food_info`, `food_sellCount`, `food_rating`, `shop_id`, `type`) VALUES
(1, '鱼豆腐土豆粉', 'https://fuss10.elemecdn.com/a/8a/569c472186d84a9c2246249ae35e4jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 18, '味道非常鲜美', 53, '100', 1, 0),
(3, '腊汁肉夹馍', 'https://fuss10.elemecdn.com/7/66/6d8f5a49b5e2b9a38947844d55541jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 9, '没有纯瘦肉的，要纯瘦肉的勿点', 19, '99', 1, 1),
(4, '咖喱牛肉饭套餐', 'https://fuss10.elemecdn.com/3/30/dd8b264e096cab4314dea9ea0cbe0jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 42, '咖喱牛肉饭+乌鸡汤一份', 12, '86', 1, 2),
(7, '新年狂欢餐', 'https://fuss10.elemecdn.com/c/b2/d14ca2b0dada0565d185844b37ac1png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 89, '皇堡+碳烤霸王鸡腿皇堡天椒+霸王鸡条（鲜辣）+薯霸王大+七喜中+百事可乐中', 182, '90%', 3, 1),
(8, '嫩香鸡块', 'https://fuss10.elemecdn.com/1/f1/ef33e89cc519bda6c1716d64df9bbjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 10, '真是美味呀', 666, '96%', 3, 2),
(9, '双人餐', 'https://fuss10.elemecdn.com/b/2f/9d11b085733ae89bc9c4665c76846jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 43.52, '通份', 37, '100%', 2, 0),
(10, '鱼香茄子椰汁套餐', 'https://fuss10.elemecdn.com/e/8d/a19b9e8d779df8a358ce2cdabcbc0jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 15, '酸酸甜甜', 50, '86%', 2, 1),
(11, '南瓜粥', 'https://fuss10.elemecdn.com/d/30/bbfa3d7b1779f516406cc9c09e837jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 10, '营养又美味', 3, '100%', 2, 2),
(12, '招牌宫保鸡丁饭', 'https://fuss10.elemecdn.com/0/ef/a991e52d59dd28fff6bf59e5c5583jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', 24, '好吃', 68, '98%', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `foodtype`
--

CREATE TABLE IF NOT EXISTS `foodtype` (
  `id` int(11) NOT NULL COMMENT '菜品类型id',
  `type` int(11) NOT NULL COMMENT '菜品类型',
  `typeName` varchar(100) NOT NULL COMMENT '类型名称',
  `shop_id` int(11) NOT NULL COMMENT '关联商家id'
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `foodtype`
--

INSERT INTO `foodtype` (`id`, `type`, `typeName`, `shop_id`) VALUES
(3, 0, '精品商家土豆粉', 1),
(5, 1, '肉夹馍', 1),
(6, 2, '先生制饭', 1),
(7, 0, '热销', 2),
(8, 1, '优惠', 2),
(9, 2, '和味靓粥', 2),
(10, 3, '精选单品', 2),
(11, 0, '热销', 3),
(12, 1, '优惠', 3),
(13, 2, '甜点小吃', 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL COMMENT '订单id',
  `order_img` text NOT NULL COMMENT '订单图片',
  `order_title` text NOT NULL COMMENT '订单标题',
  `order_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '订单时间',
  `order_num` int(11) NOT NULL COMMENT '订单商品数量',
  `order_price` float NOT NULL COMMENT '订单价格',
  `order_state` char(100) NOT NULL COMMENT '订单状态',
  `username` varchar(100) NOT NULL COMMENT '用户',
  `shop_id` int(11) NOT NULL COMMENT '商家id',
  `order_foodname` text NOT NULL COMMENT '订单已点菜品名称'
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_img`, `order_title`, `order_time`, `order_num`, `order_price`, `order_state`, `username`, `shop_id`, `order_foodname`) VALUES
(60, '//fuss10.elemecdn.com/6/83/b149aee471db91ed5d659b037d49djpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', '凉皮先生（广渠门店）', '2018-01-24 02:37:48', 2, 36, '订单已完成', '11111111', 1, '鱼豆腐土豆粉'),
(61, '//fuss10.elemecdn.com/6/83/b149aee471db91ed5d659b037d49djpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', '凉皮先生（广渠门店）', '2018-01-25 08:48:01', 2, 36, '订单已完成', '11111111', 1, '鱼豆腐土豆粉'),
(62, '//fuss10.elemecdn.com/8/5e/906c17cc854b3002eabad94c216c2jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', '和合谷(东城区王府井书店店)', '2018-01-26 06:11:43', 1, 43.52, '订单已完成', '11111111', 2, '双人餐'),
(63, '//fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', '汉堡王（北京新世界店17825）', '2018-01-26 06:12:07', 1, 89, '订单已完成', '11111111', 3, '新年狂欢餐');

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE IF NOT EXISTS `shops` (
  `shop_id` int(11) NOT NULL COMMENT '商家id',
  `shop_name` char(100) NOT NULL COMMENT '商家名称',
  `shop_img` text NOT NULL COMMENT '商家图片',
  `shop_score` float NOT NULL COMMENT '商家评分',
  `shop_monthly_sales` int(11) NOT NULL COMMENT '商家月销量',
  `shop_start_price` int(11) NOT NULL COMMENT '起送价',
  `shop_distribution_price` int(11) NOT NULL COMMENT '配送费',
  `shop_distance` float NOT NULL COMMENT '距离',
  `shop_time` char(100) NOT NULL COMMENT '时间',
  `shop_distance_way` char(100) NOT NULL COMMENT '配送快递如：蜂鸟配送',
  `shop_activities` text NOT NULL COMMENT '商家活动'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_img`, `shop_score`, `shop_monthly_sales`, `shop_start_price`, `shop_distribution_price`, `shop_distance`, `shop_time`, `shop_distance_way`, `shop_activities`) VALUES
(1, '凉皮先生（广渠门店）', '//fuss10.elemecdn.com/6/83/b149aee471db91ed5d659b037d49djpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', 3.7, 78, 20, 6, 2.62, '40', '蜂鸟专送', '{"a":"满50减15","b":"首单减10元","c":"特价20元"}'),
(2, '和合谷(东城区王府井书店店)', '//fuss10.elemecdn.com/8/5e/906c17cc854b3002eabad94c216c2jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', 4.4, 129, 20, 7, 1.15, '46', '蜂鸟专送', '{"a":"满50减15","b":"首单减10元"}'),
(3, '汉堡王（北京新世界店17825）', '//fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', 4.4, 2288, 20, 5, 1.68, '46', '', '{"a":"满30减10元","c":"特价20元"}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `username` char(100) NOT NULL COMMENT '用户名',
  `password` char(100) NOT NULL COMMENT '密码',
  `photo` text NOT NULL COMMENT '用户头像',
  `telephone` int(11) NOT NULL COMMENT '电话号码',
  `address` text NOT NULL COMMENT '地址'
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `photo`, `telephone`, `address`) VALUES
(14, '11111111', '111', '', 0, ''),
(22, '22222222', '222', '', 0, ''),
(23, '33333333', '333', '', 0, ''),
(24, '44444444', '111', '', 0, ''),
(25, '55555555', '555', '', 0, ''),
(26, '99999999', '999', '', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `active`
--
ALTER TABLE `active`
  ADD PRIMARY KEY (`act_id`);

--
-- Indexes for table `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`food_id`);

--
-- Indexes for table `foodtype`
--
ALTER TABLE `foodtype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`shop_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `active`
--
ALTER TABLE `active`
  MODIFY `act_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商家活动id',AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `foods`
--
ALTER TABLE `foods`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '菜品id',AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `foodtype`
--
ALTER TABLE `foodtype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '菜品类型id',AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单id',AUTO_INCREMENT=64;
--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商家id',AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',AUTO_INCREMENT=27;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
