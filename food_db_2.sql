-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 06, 2021 lúc 05:43 AM
-- Phiên bản máy phục vụ: 10.4.21-MariaDB
-- Phiên bản PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `food`
--
CREATE DATABASE IF NOT EXISTS `food` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `food`;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `image_name`) VALUES
(1, 'Vegetables', 'image1'),
(2, 'Fruits', 'image2'),
(3, 'Fish and Seafood', 'image3'),
(12, 'Thịt 1', 'Category_1634312351178_nicolas-lafargue-jdpJqWO9Sx8-unsplash.jpg'),
(13, 'Thịt 2', ''),
(14, 'Cá', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `message` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone`, `message`) VALUES
(1, 'khoa', 'khoa@khoa.khoa', '0949484848', 'This is message'),
(2, 'Richard Annowit', 'richardannowit@gmail.com', '0937463739', 'Phàn nàn nè'),
(3, 'Trần Đăng Khoa', 'richardannowit@gmail.com', '0947685343', 'Quá chời dở rồi '),
(4, 'Khoa đẹp trai', 'fdsfsd@sadasd.xn--ss-qma', '0948474847', 'Ngon quá xá'),
(5, 'Richard Annowit', 'richardannowit@gmail.com', '0937463739', 'Quá kinh khunngr\n'),
(6, 'Trần Đăng Khoa', 'saddsadsa@sdadssda.sad', '0947685343', 'sadsadasd'),
(7, 'Cathleen Mann', 'jidozopi@mailinator.com', '0948484747', 'Fugit dicta repudia'),
(8, 'Dacey Cox', 'nanelanu@mailinator.com', '0948484747', 'Blanditiis vel dolor'),
(9, 'Kenneth Norris', 'wivoka@mailinator.com', '0948484747', 'Aliqua Aperiam comm'),
(10, 'Donna Duke', 'xyzuva@mailinator.com', '0948484747', 'Quae qui dolorem in '),
(11, 'Astra Maxwell', 'cawibab@mailinator.com', '0948484747', 'Amet aut illo ipsum'),
(12, 'Yolanda Sanchez', 'moro@mailinator.com', '0948484747', 'Sed voluptatem harum'),
(13, 'Myles Chang', 'pixogelago@mailinator.com', '0948484747', 'Omnis nostrud offici'),
(14, 'Irma Townsend', 'sagolim@mailinator.com', '0948484747', 'Quisquam doloremque '),
(15, 'Lars Tyson', 'codojo@mailinator.com', '0948484747', 'Excepteur voluptate '),
(16, 'Urielle Cross', 'devuda@mailinator.com', '0948484747', 'Nihil quas sequi aut'),
(17, 'Keiko Lane', 'gudehamako@mailinator.com', '0948484747', 'Et et aut nulla aut ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `food_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `foods`
--

INSERT INTO `foods` (`id`, `food_name`, `price`, `description`, `image_name`, `active`, `category_id`) VALUES
(4, 'Winn Falls Fleabane', 701842, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'image91', 1, 2),
(6, 'Tiger-pear', 611301, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'image09', 1, 2),
(7, 'False Goldenweed', 570155, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'image32', 1, 2),
(8, 'Fanleaf Dwarf Polypody', 267857, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'image93', 1, 1),
(9, 'Duchesne Rockcress', 816393, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'image45', 1, 1),
(10, 'Nestegis', 438765, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'image07', 1, 2),
(11, 'Gray\'s Licorice-root', 203705, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'image65', 1, 2),
(12, 'Descanso Milkvetch', 366723, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'image58', 1, 3),
(13, 'Purging Croton', 714936, 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'image58', 1, 2),
(14, 'Sharpscale Flatsedge', 359112, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'image50', 1, 2),
(15, 'Chilean Chess', 758245, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'image82', 1, 2),
(16, 'California Brome', 286194, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'image68', 1, 3),
(17, 'Nylon Hedgehog Cactus', 285346, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'image54', 1, 1),
(18, 'Leprevost\'s Helminthocarpon Lichen', 883535, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'image44', 1, 3),
(19, 'Limpograss', 471481, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'image78', 1, 2),
(20, 'Javanese Treebine', 889775, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'image71', 1, 3),
(21, 'Babington\'s Roccella Lichen', 163165, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'image50', 1, 3),
(22, 'Pringle\'s Tarwort', 643579, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'image13', 1, 3),
(23, 'Japanese Thistle', 154821, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'image97', 1, 3),
(24, 'Shrubland Dubautia', 278863, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'image80', 1, 2),
(25, 'Pylaisiella Moss', 851228, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'image28', 1, 3),
(26, 'African Bermudagrass', 30878, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'image57', 1, 3),
(27, 'Alpine Tetramolopium', 778987, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'image86', 1, 3),
(28, 'Zamia', 674995, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'image45', 1, 1),
(29, 'Mojave Lupine', 274511, 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'image90', 1, 2),
(30, 'Fiestaflower', 379782, 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'image19', 1, 1),
(31, 'Texas Yellowstar', 618763, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'image82', 1, 2),
(32, 'Northern Hollyfern', 799472, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'image83', 1, 3),
(33, 'Red Maple', 842337, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'image95', 1, 3),
(34, 'Cusick\'s Fumewort', 386329, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'image80', 1, 2),
(35, 'Miniature Barrel Cactus', 692531, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'image31', 1, 2),
(36, 'Orange Lichen', 833718, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'image15', 1, 2),
(37, 'Japanese Primrose', 101466, 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'image67', 1, 1),
(38, 'Bishopwood', 730661, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'image51', 1, 1),
(39, 'Ashland\'s Lupine', 807183, 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'image45', 1, 1),
(40, 'Dot Lichen', 131236, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'image69', 1, 3),
(41, 'Eastern Fournerved Daisy', 434295, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'image92', 1, 1),
(42, 'Sulcaria Lichen', 522527, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'image06', 1, 3),
(43, 'Ellisia', 578916, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'image45', 1, 2),
(44, 'Cutleaf Daisy', 343851, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'image98', 1, 3),
(45, 'Threeray Tarweed', 149916, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'image13', 1, 2),
(46, 'Palmer\'s Catchfly', 424659, 'In congue. Etiam justo. Etiam pretium iaculis justo.', 'image23', 1, 3),
(47, 'Tropical Twigrush', 660623, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'image41', 1, 1),
(48, 'European Hawkweed', 19345, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'image03', 1, 3),
(49, 'Seaside Primrose-willow', 171066, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'image48', 1, 2),
(50, 'Slimleaf Prairie Clover', 359068, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'image42', 1, 3),
(51, 'Woolly Desertdandelion', 163663, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'image00', 1, 3),
(52, 'Punktree', 225612, 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 'image19', 1, 1),
(53, 'Applecactus', 345460, 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'image04', 1, 1),
(60, 'Thịt ba chỉ', 100000, 'Thịt ba chỉ', '', 1, 12),
(61, 'Thịt ba chỉ', 100000, 'Thịt ba chỉ', '', 1, 12),
(62, 'Thịt ba chỉ', 100000, 'Thịt ba chỉ', '', 1, 12),
(63, 'Thịt ba chỉ', 100000, 'Thịt ba chỉ', '', 1, 12),
(64, 'Thịt ba chỉ', 100000, 'Thịt ba chỉ', '', 1, 12);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'waiting',
  `food_id` int(11) NOT NULL,
  `customer_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_phone_number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_address` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `quantity`, `order_date`, `status`, `food_id`, `customer_name`, `customer_phone_number`, `customer_email`, `customer_address`) VALUES
(1, 1, '2021-02-15 07:44:04', 'waiting', 6, 'trung', '0123456789', 'trung@gmail.com', 'hau giang'),
(2, 4, '2021-10-07 13:30:40', 'waiting', 21, 'khang', '012345678911', 'khang@gmail.com', 'vinh long'),
(4, 2, '2020-11-20 11:58:21', 'waiting', 9, 'Holdlamis', '8253991481', 'gbernhardt1@e-r', 'Independencia'),
(5, 3, '2021-05-29 02:29:56', 'waiting', 6, 'Asoka', '7439018081', 'gvernon2@google', 'Karney Shomron'),
(7, 2, '2020-12-21 15:01:16', 'waiting', 9, 'Holdlamis', '8253991481', 'gbernhardt1@e-r', 'Independencia'),
(8, 3, '2020-10-17 10:02:24', 'waiting', 6, 'Asoka', '7439018081', 'gvernon2@google', 'Karney Shomron'),
(10, 3, '2021-09-27 08:14:11', 'waiting', 6, 'Asoka', '7439018081', 'gvernon2@google', 'Karney Shomron'),
(12, 1, '2021-03-09 16:56:09', 'waiting', 6, 'Redhold', '6429295155', 'rcamps0@histats', 'Maxixe'),
(15, 7, '2021-10-07 13:30:14', 'waiting', 26, 'Asoka', '8147354489', 'rmaccollom6@hao', 'China'),
(16, 8, '2021-10-07 13:30:27', 'waiting', 16, 'Latlux', '9684662305', 'rgoodricke7@squ', 'Aracatuba'),
(17, 10, '2021-02-21 01:58:05', 'waiting', 29, 'Redhold', '2839225923', 'xserck9@bandcam', 'Waso'),
(18, 11, '2021-02-17 07:36:12', 'waiting', 20, 'Veribet', '5822756234', 'hrappera@shinys', 'Libmanan'),
(19, 12, '2021-10-06 16:09:43', 'waiting', 22, 'Greenlam', '2816059094', 'stipensb@imgur.', 'Baizhu'),
(20, 13, '2020-11-07 14:39:43', 'waiting', 8, 'Andalax', '2612183677', 'sbartalotc@smh.', 'Sishui'),
(21, 14, '2021-01-06 14:34:45', 'waiting', 18, 'Temp', '6947127165', 'mpenderedd@prne', 'Chama'),
(22, 15, '2021-05-22 01:19:04', 'waiting', 23, 'Latlux', '9286232920', 'hrussele@bibleg', 'Fort Worth'),
(23, 17, '2021-07-20 07:16:29', 'waiting', 10, 'Span', '4104123020', 'mbertieg@tuttoc', 'Brudze Duy'),
(24, 18, '2021-06-02 10:24:05', 'waiting', 18, 'Konklux', '4906262174', 'gcolloph@google', 'Ranao'),
(25, 19, '2021-07-16 18:09:11', 'waiting', 15, 'Rank', '3251883264', 'lantoonsi@ow.ly', 'Imider'),
(26, 20, '2021-09-03 11:41:13', 'waiting', 28, 'Bitwolf', '7976897184', 'lsowlej@ovh.net', 'Randudongkal'),
(27, 21, '2021-05-23 05:06:14', 'waiting', 27, 'Zontrax', '1846370912', 'klearek@science', 'Viimsi'),
(28, 22, '2021-02-28 19:56:18', 'waiting', 28, 'Stim', '9198666344', 'cdonativol@de.v', 'Ulaan-Ereg'),
(29, 24, '2020-12-05 05:19:12', 'waiting', 25, 'Daltfresh', '4844538770', 'mhelversenn@ama', 'Kameoka'),
(30, 25, '2021-05-16 10:36:41', 'waiting', 24, 'Tin', '2624613105', 'cgriffino@behan', 'Nagcarlan'),
(31, 27, '2021-02-12 17:47:40', 'waiting', 12, 'Latlux', '1939909152', 'olydiardq@white', 'Blainville'),
(32, 28, '2021-07-09 17:00:00', 'waiting', 26, 'Bytecard', '6463509008', 'kcollissonr@tim', 'Babakandesa'),
(33, 29, '2021-07-23 17:00:00', 'waiting', 15, 'Bitwolf', '1211854305', 'abamseys@cdc.go', 'Krong Pi Nang'),
(34, 30, '2020-11-19 17:00:00', 'waiting', 12, 'Zaam-Dox', '2191219693', 'hbougheyt@googl', 'Nanlu'),
(35, 31, '2021-06-13 17:00:00', 'waiting', 23, 'Konklux', '6735239384', 'asmallcombeu@st', 'Calamba'),
(36, 32, '2021-07-22 17:00:00', 'waiting', 29, 'Cookley', '9238072167', 'psuffieldv@free', 'Xingou'),
(37, 33, '2021-03-15 17:00:00', 'waiting', 8, 'Konklux', '8578438624', 'kgabalaw@angelf', 'Riangbao'),
(38, 34, '2021-09-10 17:00:00', 'waiting', 10, 'Mat Lam Tam', '5555281529', 'gdefaux@java.co', 'Punta de Piedra'),
(39, 35, '2021-08-12 17:00:00', 'waiting', 27, 'Prodder', '5051813738', 'cmertony@bigcar', 'Barkol'),
(40, 36, '2021-04-06 17:00:00', 'waiting', 17, 'Aerified', '2464616239', 'hdonz@china.com', 'Paris 11'),
(41, 37, '2021-02-05 17:00:00', 'waiting', 11, 'Subin', '6482619737', 'jranklin10@cam.', 'Yanxi'),
(42, 38, '2021-01-06 17:00:00', 'waiting', 19, 'Asoka', '2011485397', 'kdownton11@umn.', 'Três Coroas'),
(43, 39, '2021-07-25 17:00:00', 'waiting', 10, 'Y-Solowarm', '1314350754', 'jtorrisi12@cybe', 'Yizhivtsi'),
(44, 40, '2021-06-08 17:00:00', 'waiting', 19, 'Hatity', '9018357312', 'gstallard13@ima', 'Nanhai'),
(45, 3, '2021-10-07 12:05:13', 'waiting', 6, 'Asoka', '7439018081', 'gvernon2@google', 'Karney Shomron'),
(46, 1, '2021-10-07 12:05:37', 'waiting', 6, 'Redhold', '6429295155', 'rcamps0@histats', 'Maxixe'),
(47, 27, '2021-10-07 12:05:42', 'waiting', 12, 'Latlux', '1939909152', 'olydiardq@white', 'Blainville'),
(48, 10, '2021-10-07 12:08:03', 'waiting', 29, 'Redhold', '2839225923', 'xserck9@bandcam', 'Waso'),
(49, 11, '2021-10-07 12:08:09', 'waiting', 20, 'Veribet', '5822756234', 'hrappera@shinys', 'Libmanan');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`, `email`, `phone`) VALUES
(3, 'annowit', '$2b$10$rnnM9vyGxcy7K/Em7o1epeIcjZymY7nTlopkapCX3CDCNdRWcesFK', 'Richard', 'Annowit', 'richardannowit@gmail.com', '0947685343'),
(4, 'namvt002', '$2b$10$/sK2u1.MdoAQjO9VUGkvI.Jbjckdji8psMspu4KYXq6lkGKVxsMOW', 'Tran Viet', 'Trung', 'viettrung@gmail.com', '0938474747'),
(6, 'B1805879', '$2b$10$jkiPsKi9dCMiAN.URjiHyOjs/YC1OLWhkj8qaDdyHuPCYt5imXLdy', 'Trần', 'Khoa', 'richardannowit@gmail.com', '0958575746');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `foods_FK` (`category_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_FK` (`food_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `foods`
--
ALTER TABLE `foods`
  ADD CONSTRAINT `foods_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_FK` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
