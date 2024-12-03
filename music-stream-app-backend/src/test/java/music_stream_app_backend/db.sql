-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.4.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for music_stream_app
CREATE DATABASE IF NOT EXISTS `music_stream_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `music_stream_app`;

-- Dumping structure for table music_stream_app.albums
CREATE TABLE IF NOT EXISTS `albums` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `artist_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK72gqyi6l1j674radjyitcm86f` (`artist_id`),
  CONSTRAINT `FK72gqyi6l1j674radjyitcm86f` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table music_stream_app.albums: ~0 rows (approximately)
DELETE FROM `albums`;

-- Dumping structure for table music_stream_app.artists
CREATE TABLE IF NOT EXISTS `artists` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table music_stream_app.artists: ~10 rows (approximately)
DELETE FROM `artists`;
INSERT INTO `artists` (`id`, `description`, `image`, `name`) VALUES
	(1, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/a/7/8/5a780e80f0cff170f4e1aacb3837eb01.jpg', 'DaLab'),
	(2, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://pixabay.com/vi/music/thumbnail/9f86b05e328e6bb32bd217600f1e9d16.svg', 'BeCorbal'),
	(3, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://pixabay.com/vi/music/thumbnail/3189ef9ccb30950250c112465f08fd11.svg', 'music_for_video'),
	(4, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://cdn.pixabay.com/audio/2022/05/13/23-13-29-354_200x200.jpeg', 'Good_B_Music'),
	(5, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://cdn.pixabay.com/audio/2022/09/01/08-10-48-631_200x200.jpg', 'LeonellCassio'),
	(6, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://cdn.pixabay.com/audio/2024/10/04/09-50-16-147_200x200.png', 'MFCC'),
	(7, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://cdn.pixabay.com/audio/2024/11/15/18-11-43-493_200x200.jpg', 'White_Records'),
	(8, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://cdn.pixabay.com/audio/2023/04/30/12-30-33-725_200x200.png', 'Top-Flow'),
	(9, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://cdn.pixabay.com/audio/2024/10/21/20-32-33-757_200x200.jpg', 'SigmaMusicArt'),
	(10, 'Da LAB là một ban nhạc Rap thành lập năm 2007 với 3 thành viên MPaKK (Trần Minh Phương), Rabbit Run (Nguyễn Trọng Đức) và JGKiD (Quách Văn Thơm), được biết tới nhiều trong cộng đồng Rap Việt thông qua những bài hát như: Đi đi về về, Đời là đi .v.v.. trong mixtape “Đi đi về về” ra mắt năm 2011 của nhóm. Năm 2018, nhóm có thêm Emcee L (Nguyễn Hoàng Long). Các thành viên nhóm Da LAB lấy chủ đề về Hà Nội trong những giờ cao điểm, các rapper của Da LAB đã khắc họa thủ đô ở một góc nhìn rất mới, gai góc hơn, đời thường hơn, mỗi phần của bài hát là một phần tâm tư riêng lẻ, nói tới sự vô cảm của con người trong xã hội hiện đại, những bon chen, những  giả tạo đã thành quen thuộc trong đời sống ngày một thực dụng bây giờ. Ca từ sâu sắc, phóng khoáng cùng cách thể hiện bài hát mang đậm chất riêng làm nên thành công cho chính bài hát “Hà Nội giờ tan tầm”.  Các thành viên của nhóm đều không hoạt động âm nhạc chuyên nghiệp mà đều kiếm sống bằng những công việc khác nhau nhưng khi có thời gian và cảm xúc thì lại tìm đến nhạc Rap để ghi lại những tâm tư suy nghĩ hoặc để giải toả những nỗi niềm riêng. Nhóm có 4 thành viên:  Trần Minh Phương, sinh năm 1987, hiện đang làm kỹ sư cầu đường cho công ty VSL Việt Nam.  Nguyễn Trọng Đức, sinh năm 1987, hiện đang là chuyên viên marketing của công ty TNHH LG Electronics Việt Nam.  Quách Văn Thơm, sinh năm 1989, hiện là sinh viên Học viện Báo chí và Tuyên truyền.  Nguyễn Hoàng Long, sinh nănm 1989, hiện tại không đi học.', 'https://cdn.pixabay.com/audio/2024/06/17/18-00-00-760_200x200.jpg', 'Rockot');

-- Dumping structure for table music_stream_app.charts
CREATE TABLE IF NOT EXISTS `charts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table music_stream_app.charts: ~3 rows (approximately)
DELETE FROM `charts`;
INSERT INTO `charts` (`id`, `image`, `title`) VALUES
	(1, 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_vn_default.jpg', 'Top 50 - Vietnam'),
	(2, 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_ca_default.jpg', 'Top 50 - Canada'),
	(3, 'https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg', 'Top 50 - Global');

-- Dumping structure for table music_stream_app.chart_track
CREATE TABLE IF NOT EXISTS `chart_track` (
  `rank` bigint(20) NOT NULL,
  `chart_id` bigint(20) NOT NULL,
  `track_id` bigint(20) NOT NULL,
  PRIMARY KEY (`chart_id`,`track_id`),
  KEY `FK8uxmscmt87d25neqvarl4trw7` (`track_id`),
  CONSTRAINT `FK8uxmscmt87d25neqvarl4trw7` FOREIGN KEY (`track_id`) REFERENCES `tracks` (`id`),
  CONSTRAINT `FKrslwbakhk6gs7rh50421pcitg` FOREIGN KEY (`chart_id`) REFERENCES `charts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table music_stream_app.chart_track: ~50 rows (approximately)
DELETE FROM `chart_track`;
INSERT INTO `chart_track` (`rank`, `chart_id`, `track_id`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(2, 1, 3),
	(5, 1, 4),
	(1, 2, 5),
	(2, 2, 6),
	(3, 2, 7),
	(4, 2, 8),
	(5, 2, 9),
	(6, 2, 10),
	(7, 2, 11),
	(8, 2, 12),
	(9, 2, 13),
	(10, 2, 14),
	(11, 2, 15),
	(12, 2, 16),
	(13, 2, 17),
	(14, 2, 18),
	(15, 2, 19),
	(16, 2, 20),
	(17, 2, 21),
	(18, 2, 22),
	(19, 2, 23),
	(20, 2, 24),
	(21, 2, 25),
	(22, 2, 26),
	(23, 2, 27),
	(24, 2, 28),
	(25, 2, 29),
	(26, 2, 30),
	(1, 3, 31),
	(2, 3, 32),
	(3, 3, 33),
	(4, 3, 34),
	(5, 3, 35),
	(6, 3, 36),
	(7, 3, 37),
	(8, 3, 38),
	(9, 3, 39),
	(10, 3, 40),
	(11, 3, 41),
	(12, 3, 42),
	(13, 3, 43),
	(14, 3, 44),
	(15, 3, 45),
	(16, 3, 46),
	(17, 3, 47),
	(18, 3, 48),
	(19, 3, 49),
	(20, 3, 50);

-- Dumping structure for table music_stream_app.tracks
CREATE TABLE IF NOT EXISTS `tracks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `duration` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `view` varchar(255) DEFAULT NULL,
  `album_id` bigint(20) DEFAULT NULL,
  `artist_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdcmijveo7n1lql01vav1u2jd2` (`album_id`),
  KEY `FKkiacd31n79ksp3mnq6owsbjiu` (`artist_id`),
  CONSTRAINT `FKdcmijveo7n1lql01vav1u2jd2` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`),
  CONSTRAINT `FKkiacd31n79ksp3mnq6owsbjiu` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table music_stream_app.tracks: ~50 rows (approximately)
DELETE FROM `tracks`;
INSERT INTO `tracks` (`id`, `duration`, `image`, `link`, `size`, `title`, `view`, `album_id`, `artist_id`) VALUES
	(1, '4:22', 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/a/7/8/5a780e80f0cff170f4e1aacb3837eb01.jpg', 'https://vnso-zn-15-tf-a128-z3.zmdcdn.me/d9a811c367763ecb7881b0c3abb32562?authen=exp=1733235079~acl=/d9a811c367763ecb7881b0c3abb32562*~hmac=ab6169da141a925dcfa56b52040df109', '4.2', 'Bầu Trời mới', '1.2M views', NULL, 1),
	(2, '4:22', 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/a/7/8/5a780e80f0cff170f4e1aacb3837eb01.jpg', 'https://vnso-zn-15-tf-a128-z3.zmdcdn.me/d9a811c367763ecb7881b0c3abb32562?authen=exp=1733235079~acl=/d9a811c367763ecb7881b0c3abb32562*~hmac=ab6169da141a925dcfa56b52040df109', '4.2', 'Bầu Trời mới', '1.2M views', NULL, 1),
	(3, '4:22', 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/a/7/8/5a780e80f0cff170f4e1aacb3837eb01.jpg', 'https://vnso-zn-15-tf-a128-z3.zmdcdn.me/d9a811c367763ecb7881b0c3abb32562?authen=exp=1733235079~acl=/d9a811c367763ecb7881b0c3abb32562*~hmac=ab6169da141a925dcfa56b52040df109', '4.2', 'Bầu Trời mới', '1.2M views', NULL, 1),
	(4, '4:22', 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/a/7/8/5a780e80f0cff170f4e1aacb3837eb01.jpg', 'https://vnso-zn-15-tf-a128-z3.zmdcdn.me/d9a811c367763ecb7881b0c3abb32562?authen=exp=1733235079~acl=/d9a811c367763ecb7881b0c3abb32562*~hmac=ab6169da141a925dcfa56b52040df109', '4.2', 'Bầu Trời mới', '1.2M views', NULL, 1),
	(5, '7:20', 'https://cdn.pixabay.com/audio/2024/02/14/22-35-32-207_200x200.png', 'https://cdn.pixabay.com/audio/2024/02/14/audio_b9bc3934cc.mp3', '4.2', 'Perfect Beauty', '1.2M views', NULL, 2),
	(6, '4:14', 'https://cdn.pixabay.com/audio/2024/06/17/18-00-00-760_200x200.jpg', 'https://cdn.pixabay.com/audio/2024/06/14/audio_0e2636099d.mp3', '4.2', 'AMALGAM', '1.2M views', NULL, 3),
	(7, '4:20', 'https://cdn.pixabay.com/audio/2024/08/12/10-56-16-926_200x200.jpg', 'https://cdn.pixabay.com/audio/2024/06/14/audio_0e2636099d.mp3', '4.2', 'Romantic Song Tera Roothna by ', '1.2M views', NULL, 4),
	(8, '4:00', 'https://cdn.pixabay.com/audio/2024/11/24/18-28-01-919_200x200.jpeg', 'https://cdn.pixabay.com/audio/2024/11/24/audio_6bae094b52.mp3', '4.2', 'Christmas Day-Christmas Music', '1.2M views', NULL, 5),
	(9, '5:37', 'https://cdn.pixabay.com/audio/2024/06/13/07-16-52-755_200x200.jpg', 'https://cdn.pixabay.com/audio/2024/06/13/audio_8822cea290.mp3', '4.2', 'No Place To Go', '1.2M views', NULL, 6),
	(10, '5:07', 'https://cdn.pixabay.com/audio/2023/10/01/14-13-06-872_200x200.png', 'https://cdn.pixabay.com/audio/2022/03/10/audio_b195486a22.mp3', '4.2', 'Price of Freedom', '1.2M views', NULL, 7),
	(11, '4:10', 'https://cdn.pixabay.com/audio/2024/10/14/10-46-17-459_200x200.jpg', 'https://cdn.pixabay.com/audio/2024/10/14/audio_cba72219ce.mp3', '4.2', 'O Holy Night', '1.2M views', NULL, 8),
	(12, '4:00', 'https://cdn.pixabay.com/audio/2024/11/25/11-12-24-960_200x200.jpeg', 'https://cdn.pixabay.com/audio/2024/11/25/audio_5e7afc8719.mp3', '4.2', 'Mystical Winter - Christmas', '1.2M views', NULL, 9),
	(13, '6:31', 'https://pixabay.com/vi/music/thumbnail/903d2fcd91d5c82a87a9f49afe682477.svg', 'https://cdn.pixabay.com/audio/2023/01/14/audio_40e0bb0280.mp3', '4.2', 'Nasheed Islamic Background', '1.2M views', NULL, 10),
	(14, '6:03', 'https://cdn.pixabay.com/audio/2024/10/14/04-27-21-828_200x200.jpg', 'https://cdn.pixabay.com/audio/2024/10/14/audio_0451c4992e.mp3', '4.2', 'Lofi PianoTonight', '1.2M views', NULL, 2),
	(15, '4:00', 'https://cdn.pixabay.com/audio/2024/11/06/10-27-34-70_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/07/14/audio_b2e1adaa25.mp3', '4.2', 'Leonell Cassio - Chapter Two ', '1.2M views', NULL, 3),
	(16, '4:23', 'https://cdn.pixabay.com/audio/2022/09/10/08-50-21-336_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/09/10/audio_44ed4d1b19.mp3', '4.2', 'Vocal Deep House - Moonlight', '1.2M views', NULL, 4),
	(17, '4:03', 'https://cdn.pixabay.com/audio/2024/10/08/00-31-50-534_200x200.png', 'https://cdn.pixabay.com/audio/2024/10/08/audio_70ba5a8b6d.mp3', '4.2', 'Nirvana', '1.2M views', NULL, 5),
	(18, '4:07', 'https://cdn.pixabay.com/audio/2022/05/07/20-40-51-710_200x200.png', 'https://cdn.pixabay.com/audio/2022/05/07/audio_8dbd3b24f4.mp3', '4.2', 'Lacore Diamond - For You', '1.2M views', NULL, 6),
	(19, '4:58', 'https://cdn.pixabay.com/audio/2022/04/29/11-36-11-731_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/04/29/audio_b41f9553b2.mp3', '4.2', 'Leonell Cassio - Stuck In A Dream', '1.2M views', NULL, 7),
	(20, '4:03', 'https://cdn.pixabay.com/audio/2023/07/02/13-04-57-566_200x200.png', 'https://cdn.pixabay.com/audio/2023/07/02/audio_cf43feedf5.mp3', '4.2', 'Wasting My Time', '1.2M views', NULL, 8),
	(21, '4:02', 'https://cdn.pixabay.com/audio/2022/04/17/21-33-44-169_200x200.png', 'https://cdn.pixabay.com/audio/2022/04/17/audio_7eccb4d3c3.mp3', '4.2', 'Lacore Diamond feat. Sergi Yaro', '1.2M views', NULL, 9),
	(22, '4:29', 'https://cdn.pixabay.com/audio/2023/03/03/18-28-39-795_200x200.jpeg', 'https://cdn.pixabay.com/audio/2023/03/03/audio_f0dc905d08.mp3', '4.2', 'We Come A Long Way - Vernon Mayt', '1.2M views', NULL, 10),
	(23, '6:05', 'https://cdn.pixabay.com/audio/2024/01/04/10-22-43-543_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/09/09/audio_838eddf5ca.mp3', '4.2', 'Rumi\'s Opera', '1.2M views', NULL, 2),
	(24, '4:01', 'https://cdn.pixabay.com/audio/2024/04/14/17-18-22-397_200x200.png', 'https://cdn.pixabay.com/audio/2024/04/14/audio_ae77eac48b.mp3', '4.2', 'Chris - Euphoria', '1.2M views', NULL, 3),
	(25, '4:03', 'https://pixabay.com/vi/music/thumbnail/163dce98a2d33b9b3eb31911d92ee854.svg', 'https://cdn.pixabay.com/audio/2021/11/01/audio_313de5ee2b.mp3', '4.2', 'WatR & Myhre - What We Came For', '1.2M views', NULL, 4),
	(26, '4:00', 'https://cdn.pixabay.com/audio/2024/07/12/02-33-06-643_200x200.jpg', 'https://cdn.pixabay.com/audio/2024/07/12/audio_d4d80c04fa.mp3', '4.2', 'Eternal Rise V1 | FSS | No Copyright', '1.2M views', NULL, 5),
	(27, '4:30', 'https://cdn.pixabay.com/audio/2024/06/26/05-13-51-958_200x200.jpg', 'https://cdn.pixabay.com/audio/2024/06/26/audio_537aabb19d.mp3', '4.2', 'Keep Walking', '1.2M views', NULL, 6),
	(28, '4:34', 'https://cdn.pixabay.com/audio/2022/05/19/00-15-58-548_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/05/19/audio_dfef7b6cea.mp3', '4.2', 'Waiting For Your Call', '1.2M views', NULL, 7),
	(29, '5:32', 'https://cdn.pixabay.com/audio/2024/04/02/20-02-26-499_200x200.jpeg', 'https://cdn.pixabay.com/audio/2024/04/02/audio_82840d15b1.mp3', '4.2', 'LOVE AND HATE', '1.2M views', NULL, 8),
	(30, '4:46', 'https://cdn.pixabay.com/audio/2023/09/17/15-54-55-492_200x200.png', 'https://cdn.pixabay.com/audio/2023/09/17/audio_b8c56b051a.mp3', '4.2', 'Balance 2023 - Vernon Maytone', '1.2M views', NULL, 9),
	(31, '4:09', 'https://cdn.pixabay.com/audio/2022/05/07/20-41-48-408_200x200.png', 'https://cdn.pixabay.com/audio/2022/05/07/audio_30d46836f5.mp3', '4.2', 'Lacore Diamond - Reach You', '1.2M views', NULL, 10),
	(32, '4:12', 'https://cdn.pixabay.com/audio/2022/05/29/10-33-04-920_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/05/29/audio_5418476b18.mp3', '4.2', '1. Our love, on a low key', '1.2M views', NULL, 2),
	(33, '6:04', 'https://cdn.pixabay.com/audio/2022/04/14/20-42-34-277_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/04/14/audio_d29e5dfdc9.mp3', '4.2', 'Crazy (Sonnensegel Remix) ', '1.2M views', NULL, 3),
	(34, '4:10', 'https://cdn.pixabay.com/audio/2023/09/21/08-47-51-613_200x200.jpg', 'https://cdn.pixabay.com/audio/2023/07/28/audio_cbe2e1a9b9.mp3', '4.2', 'I Hear Voices In My Head', '1.2M views', NULL, 4),
	(35, '5:10', 'https://pixabay.com/vi/music/thumbnail/a9ece2235854b11ecf564e4b26d56ac9.svg', 'https://cdn.pixabay.com/audio/2023/04/11/audio_01d096bd6e.mp3', '4.2', 'Sunshine', '1.2M views', NULL, 5),
	(36, '4:02', 'https://cdn.pixabay.com/audio/2022/08/31/18-36-56-854_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/08/31/audio_08a893174b.mp3', '4.2', 'Leonell Cassio - Lie 2 You', '1.2M views', NULL, 6),
	(37, '4:22', 'https://cdn.pixabay.com/audio/2022/05/29/10-38-00-306_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/05/29/audio_3b7a276f2e.mp3', '4.2', '2. Sweet loving', '1.2M views', NULL, 7),
	(38, '4:20', 'https://cdn.pixabay.com/audio/2022/10/21/10-59-30-701_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/10/21/audio_02a84a6dc5.mp3', '4.2', 'The Say', '1.2M views', NULL, 8),
	(39, '2:14', 'https://cdn.pixabay.com/audio/2022/04/06/09-54-34-389_200x200.png', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'You Can Do More!', '1.2M views', NULL, 9),
	(40, '3:09', 'https://cdn.pixabay.com/audio/2022/10/02/06-32-09-41_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'Candy Friends', '1.2M views', NULL, 10),
	(41, '2:02', 'https://cdn.pixabay.com/audio/2024/05/06/15-16-56-976_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'Summer Fashion - Upbeat Vocal De', '1.2M views', NULL, 2),
	(42, '3:14', 'https://cdn.pixabay.com/audio/2023/10/04/15-08-36-835_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'BLACK BOX - Dialogue Within', '1.2M views', NULL, 3),
	(43, '2:53', 'https://cdn.pixabay.com/audio/2024/10/08/00-32-03-1_200x200.png', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'Don\'t Let Go', '1.2M views', NULL, 4),
	(44, '2:53', 'https://cdn.pixabay.com/audio/2023/09/03/12-27-49-385_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'Gareth & Mastak - We Were Young', '1.2M views', NULL, 5),
	(45, '3:29', 'https://cdn.pixabay.com/audio/2022/10/02/06-28-18-424_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'Travel_ Dreams', '1.2M views', NULL, 6),
	(46, '2:59', 'https://cdn.pixabay.com/audio/2023/09/03/12-32-19-867_200x200.jpg', 'https://cdn.pixabay.com/audio/2023/09/03/audio_853c92b119.mp3', '4.2', 'Ozee - Not What I Need', '1.2M views', NULL, 7),
	(47, '3:44', 'https://cdn.pixabay.com/audio/2023/04/12/02-30-00-517_200x200.png', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'Mon Amour by Saavane', '1.2M views', NULL, 8),
	(48, '2:24', 'https://cdn.pixabay.com/audio/2024/03/29/17-19-36-133_200x200.png', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'Screaming Solitude', '1.2M views', NULL, 9),
	(49, '2:51', 'https://cdn.pixabay.com/audio/2022/12/13/19-41-14-666_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'Setze - Thinkin About You (Radio Edit)', '1.2M views', NULL, 2),
	(50, '3:41', 'https://cdn.pixabay.com/audio/2023/10/16/13-32-54-34_200x200.jpg', 'https://cdn.pixabay.com/audio/2022/03/30/audio_52a596f0b5.mp3', '4.2', 'West Collins - Take My Hand [ Royalty Free Music ]', '1.2M views', NULL, 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
