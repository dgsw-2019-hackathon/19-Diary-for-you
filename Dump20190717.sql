-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: localhost    Database: 2019hackathon
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '고유아이디',
  `userId` varchar(45) NOT NULL COMMENT '유저아이디',
  `userName` varchar(45) NOT NULL COMMENT '유저이름',
  `content` varchar(1000) NOT NULL COMMENT '내용',
  `updateDay` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '서버에날짜',
  `report` tinyint(1) NOT NULL DEFAULT '0' COMMENT '신고 yes or no',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='댓글테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (2,'gwak','곽현준','안녕하세요','2019-07-16 07:06:53',0);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diary`
--

DROP TABLE IF EXISTS `diary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `diary` (
  `diaryId` int(11) NOT NULL AUTO_INCREMENT COMMENT '일기번호',
  `userId` varchar(45) NOT NULL COMMENT '유저이름',
  `title` varchar(100) NOT NULL COMMENT '제목',
  `content` varchar(1000) NOT NULL COMMENT '내용',
  `uploadDay` datetime NOT NULL COMMENT '내용에날짜',
  `updateDay` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '서버에날짜',
  `weather` varchar(45) NOT NULL COMMENT '날씨',
  `originalName` varchar(1000) DEFAULT NULL COMMENT '이미지',
  `path` varchar(1000) DEFAULT NULL,
  `open` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`diaryId`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='다이어리테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diary`
--

LOCK TABLES `diary` WRITE;
/*!40000 ALTER TABLE `diary` DISABLE KEYS */;
INSERT INTO `diary` VALUES (1,'gwak','해커톤','오늘은 해커톤을 했다.','2019-07-15 22:06:53','2019-07-16 07:08:26','흐림',NULL,NULL,0),(2,'gwak','해커톤','오늘은 해커톤을 했다.','2019-07-15 22:06:53','2019-07-16 07:12:15','흐림',NULL,NULL,0),(3,'gwak','해커톤','오늘은 해커톤을 했다.','2019-07-15 22:06:53','2019-07-16 07:12:17','흐림',NULL,NULL,0),(4,'gwak','해커톤','오늘은 해커톤을 했다.','2019-07-15 22:06:53','2019-07-16 07:12:18','흐림',NULL,NULL,0),(5,'gwak1','해커톤','오늘은 해커톤을 했다.','2019-07-15 22:06:53','2019-07-16 07:13:01','흐림',NULL,NULL,0),(6,'gwak1','해커톤','오늘은 해커톤을 했다.','2019-07-15 22:06:53','2019-07-16 07:14:23','흐림',NULL,NULL,0),(7,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-16 22:34:52','흐림',NULL,NULL,0),(8,'gwak','ㅁㄴㅇㄹ','1231241344241324','2019-07-16 22:59:59','2019-07-16 23:15:37','오늘은맑음',NULL,NULL,0),(9,'gwak','안녕','ㅁㄴㅇㄻㄴㅇㄹ','2019-07-16 22:59:59','2019-07-16 23:34:12','오늘은맑음',NULL,NULL,0),(10,'gwak','시발','ㅁㅇㄴㄹㄴㅁㅇㄹㄴㅁㅇㄹ','2019-07-16 22:59:59','2019-07-16 23:36:50','오늘은흐림',NULL,NULL,0),(11,'gwak','hello','ㅁㅇㄴㄹㅇㄴㅁㄹ','2019-07-16 22:59:59','2019-07-16 23:45:16','흐림',NULL,NULL,0),(12,'gwak','asdfadsf','ㅁㄴㅇㄹㅇㄴㅁㄹ','2019-07-16 22:59:59','2019-07-16 23:47:18','흐림',NULL,NULL,0),(13,'gwak','asdfadsf','ㅁㄴㅇㄹㅇㄴㅁㄹ','2019-07-16 22:59:59','2019-07-16 23:47:18','흐림',NULL,NULL,0),(14,'gwak','adsfsadf','ㅁㄴㅇㄹㅇㄴㅁㄻㅇㄴㄹ','2019-07-16 22:59:59','2019-07-16 23:48:05','흐림',NULL,NULL,0),(15,'gwak','시발기모찌','ㅁㄴㅇㄻㅇㄴㄻㅇㄴㄹㄴㅁㅇㄻㄴㄹㅇ','2019-07-16 22:59:59','2019-07-16 23:54:08','오늘은흐림',NULL,NULL,0),(16,'gwak','환불을하려고합니다','시부레','2019-07-16 22:59:59','2019-07-16 23:56:13','흐림',NULL,NULL,0),(17,'znakwkd30','ㄷㅁㅇㄹㄴ호ㅓㄹㅇㄴ','ㅎㅇㄴㄹㄹㅇㅎㄹㄶ','2019-07-16 22:59:59','2019-07-16 23:56:43','ㅎㄴㄹㄻㅇ홓ㄴㄹ',NULL,NULL,0),(18,'ㄴㅁㄻㄻ','ㄴㅇㅇㅁㄻㄹ','아','2019-07-16 22:59:59','2019-07-16 23:57:07','ㅇㅁㄴㅀㄴㅁㅀㄹ',NULL,NULL,0),(19,'ㅂㅈㄷㄱㅂㄱㅈㄷ','ㅂㄷㅈㅂㅈㅈ','ㅂㅇㅈㅂㅈㅇㅂㅈㅂㅇㅂㅈ','2019-07-16 22:59:59','2019-07-16 23:57:41','ㅂㅈㅇㅈㅂㅇㅂㅈ',NULL,NULL,0),(20,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 00:36:23','흐림',NULL,NULL,0),(21,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 00:36:56','흐림',NULL,NULL,0),(22,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 01:07:53','흐림',NULL,NULL,0),(23,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 02:12:33','흐림',NULL,NULL,0),(24,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 02:14:45','흐림',NULL,NULL,0),(25,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 02:23:56','흐림',NULL,NULL,0),(26,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 02:24:46','흐림',NULL,NULL,0),(27,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 02:25:57','흐림',NULL,NULL,0),(28,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 02:26:37','흐림',NULL,NULL,0),(29,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 02:27:36','흐림',NULL,NULL,0),(30,'gwak1','해커톤','오늘은 해커톤 마무리다','2019-07-15 22:06:53','2019-07-17 02:28:02','흐림',NULL,NULL,0),(31,'gwak','해커톤','오늘은 해커톤을 했다.','2019-07-16 22:59:59','2019-07-17 02:52:41','흐림',NULL,NULL,0);
/*!40000 ALTER TABLE `diary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friend`
--

DROP TABLE IF EXISTS `friend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `friend` (
  `userId` varchar(45) NOT NULL COMMENT '유저아이디',
  `friendId` varchar(45) NOT NULL COMMENT '친구아이디',
  PRIMARY KEY (`userId`,`friendId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='친구테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friend`
--

LOCK TABLES `friend` WRITE;
/*!40000 ALTER TABLE `friend` DISABLE KEYS */;
INSERT INTO `friend` VALUES ('gwak','1234'),('gwak','gwak1');
/*!40000 ALTER TABLE `friend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `numberId` int(11) NOT NULL AUTO_INCREMENT COMMENT '고유아이디',
  `id` varchar(45) NOT NULL COMMENT '유저아이디',
  `password` varchar(45) NOT NULL COMMENT '비밀번호',
  `name` varchar(45) NOT NULL COMMENT '이름',
  `profileImg` varchar(1000) DEFAULT NULL COMMENT '프로필이미지',
  PRIMARY KEY (`numberId`,`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='유저테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'gwak','1234','곽현준',NULL),(2,'gwak1','1234','곽현준',NULL),(3,'123','123123','123123',NULL),(4,'1234','1234','1234',NULL),(5,'12345','1234','12345',NULL),(6,'123456','1234','123456',NULL),(7,'1234567','1234','1234567',NULL),(8,'1','1','1',NULL),(9,'12','12','12',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-17 12:15:38
