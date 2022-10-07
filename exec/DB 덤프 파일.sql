-- MySQL dump 10.19  Distrib 10.3.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: the_ground
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ai_settings`
--

DROP TABLE IF EXISTS `ai_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ai_settings` (
  `ai_team_seq` bigint(20) NOT NULL,
  `ai_setting_hitter` int(11) DEFAULT NULL,
  `ai_setting_pitcher` int(11) DEFAULT NULL,
  `ai_setting_1st` bigint(20) DEFAULT NULL,
  `ai_setting_2nd` bigint(20) DEFAULT NULL,
  `ai_setting_3rd` bigint(20) DEFAULT NULL,
  `ai_setting_4th` bigint(20) DEFAULT NULL,
  `ai_setting_5th` bigint(20) DEFAULT NULL,
  `ai_setting_6th` bigint(20) DEFAULT NULL,
  `ai_setting_7th` bigint(20) DEFAULT NULL,
  `ai_setting_8th` bigint(20) DEFAULT NULL,
  `ai_setting_9th` bigint(20) DEFAULT NULL,
  `ai_setting_sp1` bigint(20) DEFAULT NULL,
  `ai_setting_sp2` bigint(20) DEFAULT NULL,
  `ai_setting_sp3` bigint(20) DEFAULT NULL,
  `ai_setting_sp4` bigint(20) DEFAULT NULL,
  `ai_setting_sp5` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ai_team_seq`),
  KEY `FKhui42y9s6r655x0f394qgvdec` (`ai_setting_1st`),
  KEY `FK5r4k99jepqgrrhfoylop5a5j8` (`ai_setting_2nd`),
  KEY `FK8hhq3h4swi1mv6yiclmj6irt9` (`ai_setting_3rd`),
  KEY `FKpghvsrboex68mupj3sknnbode` (`ai_setting_4th`),
  KEY `FKflmm687061u7on6qufipkw0sl` (`ai_setting_5th`),
  KEY `FKmt5pkv4kgjppq6v1uyb0yubsu` (`ai_setting_6th`),
  KEY `FKbx7kdsl60yc4u8o9re8uhlaq3` (`ai_setting_7th`),
  KEY `FKkvnygwvpwu55m44ehq95xond8` (`ai_setting_8th`),
  KEY `FK5bsurvl3x5r6m6p4816yy7u2u` (`ai_setting_9th`),
  KEY `FKpe0vq16yywh7d3ug6nj8wpeca` (`ai_setting_sp1`),
  KEY `FK2mk9rajtu5jknrjcgo3qdkasj` (`ai_setting_sp2`),
  KEY `FKba6c2trkxqerdmy9nyemse59u` (`ai_setting_sp3`),
  KEY `FKejvlt1dxykq3yn9rdjv7u2h40` (`ai_setting_sp4`),
  KEY `FKjj9um1s1y06vccc8wjb2b7sr` (`ai_setting_sp5`),
  CONSTRAINT `FK2gqosbr07a45kp4xvedql4uaa` FOREIGN KEY (`ai_team_seq`) REFERENCES `ai_teams` (`ai_team_seq`),
  CONSTRAINT `FK2mk9rajtu5jknrjcgo3qdkasj` FOREIGN KEY (`ai_setting_sp2`) REFERENCES `pitchers` (`pitcher_seq`),
  CONSTRAINT `FK5bsurvl3x5r6m6p4816yy7u2u` FOREIGN KEY (`ai_setting_9th`) REFERENCES `hitters` (`hitter_seq`),
  CONSTRAINT `FK5r4k99jepqgrrhfoylop5a5j8` FOREIGN KEY (`ai_setting_2nd`) REFERENCES `hitters` (`hitter_seq`),
  CONSTRAINT `FK8hhq3h4swi1mv6yiclmj6irt9` FOREIGN KEY (`ai_setting_3rd`) REFERENCES `hitters` (`hitter_seq`),
  CONSTRAINT `FKba6c2trkxqerdmy9nyemse59u` FOREIGN KEY (`ai_setting_sp3`) REFERENCES `pitchers` (`pitcher_seq`),
  CONSTRAINT `FKbx7kdsl60yc4u8o9re8uhlaq3` FOREIGN KEY (`ai_setting_7th`) REFERENCES `hitters` (`hitter_seq`),
  CONSTRAINT `FKejvlt1dxykq3yn9rdjv7u2h40` FOREIGN KEY (`ai_setting_sp4`) REFERENCES `pitchers` (`pitcher_seq`),
  CONSTRAINT `FKflmm687061u7on6qufipkw0sl` FOREIGN KEY (`ai_setting_5th`) REFERENCES `hitters` (`hitter_seq`),
  CONSTRAINT `FKhui42y9s6r655x0f394qgvdec` FOREIGN KEY (`ai_setting_1st`) REFERENCES `hitters` (`hitter_seq`),
  CONSTRAINT `FKjj9um1s1y06vccc8wjb2b7sr` FOREIGN KEY (`ai_setting_sp5`) REFERENCES `pitchers` (`pitcher_seq`),
  CONSTRAINT `FKkvnygwvpwu55m44ehq95xond8` FOREIGN KEY (`ai_setting_8th`) REFERENCES `hitters` (`hitter_seq`),
  CONSTRAINT `FKmt5pkv4kgjppq6v1uyb0yubsu` FOREIGN KEY (`ai_setting_6th`) REFERENCES `hitters` (`hitter_seq`),
  CONSTRAINT `FKpe0vq16yywh7d3ug6nj8wpeca` FOREIGN KEY (`ai_setting_sp1`) REFERENCES `pitchers` (`pitcher_seq`),
  CONSTRAINT `FKpghvsrboex68mupj3sknnbode` FOREIGN KEY (`ai_setting_4th`) REFERENCES `hitters` (`hitter_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ai_settings`
--

LOCK TABLES `ai_settings` WRITE;
/*!40000 ALTER TABLE `ai_settings` DISABLE KEYS */;
INSERT INTO `ai_settings` VALUES (1,1,1,1,2,3,4,5,6,7,8,9,10,10,10,10,10),(2,1,1,1,2,3,4,5,6,7,8,9,10,10,10,10,10),(3,1,1,1,2,3,4,5,6,7,8,9,10,10,10,10,10),(4,1,1,1,2,3,4,5,6,7,8,9,10,10,10,10,10);
/*!40000 ALTER TABLE `ai_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ai_teams`
--

DROP TABLE IF EXISTS `ai_teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ai_teams` (
  `ai_team_seq` bigint(20) NOT NULL,
  `ai_team_name` varchar(255) DEFAULT NULL,
  `logo_seq` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ai_team_seq`),
  KEY `FKd2skm4eadupb9acisivdhedu9` (`logo_seq`),
  CONSTRAINT `FKd2skm4eadupb9acisivdhedu9` FOREIGN KEY (`logo_seq`) REFERENCES `logos` (`logo_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ai_teams`
--

LOCK TABLES `ai_teams` WRITE;
/*!40000 ALTER TABLE `ai_teams` DISABLE KEYS */;
INSERT INTO `ai_teams` VALUES (1,'마이 구미 Jellies',1),(2,'일광 주의 Rays',2),(3,'세계 대전 Warriors',3),(4,'부울 대수 Booleans',4);
/*!40000 ALTER TABLE `ai_teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descriptions`
--

DROP TABLE IF EXISTS `descriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `descriptions` (
  `match_seq` bigint(20) NOT NULL,
  `description_1st_top` text DEFAULT '',
  `description_1st_bottom` text DEFAULT '',
  `description_2nd_top` text DEFAULT '',
  `description_2nd_bottom` text DEFAULT '',
  `description_3rd_top` text DEFAULT '',
  `description_3rd_bottom` text DEFAULT '',
  `description_4th_top` text DEFAULT '',
  `description_4th_bottom` text DEFAULT '',
  `description_5th_top` text DEFAULT '',
  `description_5th_bottom` text DEFAULT '',
  `description_6th_top` text DEFAULT '',
  `description_6th_bottom` text DEFAULT '',
  `description_7th_top` text DEFAULT '',
  `description_7th_bottom` text DEFAULT '',
  `description_8th_top` text DEFAULT '',
  `description_8th_bottom` text DEFAULT '',
  `description_9th_top` text DEFAULT '',
  `description_9th_bottom` text DEFAULT '',
  PRIMARY KEY (`match_seq`),
  CONSTRAINT `descriptions_ibfk_1` FOREIGN KEY (`match_seq`) REFERENCES `matches` (`match_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descriptions`
--

LOCK TABLES `descriptions` WRITE;
/*!40000 ALTER TABLE `descriptions` DISABLE KEYS */;
INSERT INTO `descriptions` VALUES (4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(34,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `descriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hitters`
--

DROP TABLE IF EXISTS `hitters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hitters` (
  `hitter_seq` bigint(20) NOT NULL,
  `hitter_name` varchar(255) DEFAULT NULL,
  `hitter_avg` double DEFAULT NULL,
  `hitter_game` int(11) DEFAULT NULL,
  `hitter_bat_arm` varchar(255) DEFAULT NULL,
  `hitter_at_bat` int(11) DEFAULT NULL,
  `hitter_hit` int(11) DEFAULT NULL,
  `hitter_doubles` int(11) DEFAULT NULL,
  `hitter_triple` int(11) DEFAULT NULL,
  `hitter_homerun` int(11) DEFAULT NULL,
  `hitter_rbi` int(11) DEFAULT NULL,
  `hitter_run` int(11) NOT NULL DEFAULT 0,
  `hitter_steal` int(11) NOT NULL DEFAULT 0,
  `hitter_hit_by_pitch` int(11) NOT NULL DEFAULT 0,
  `hitter_obp` double DEFAULT NULL,
  `hitter_slg` double DEFAULT NULL,
  `hitter_ops` double DEFAULT NULL,
  `hitter_isop` double DEFAULT NULL,
  `hitter_babip` double DEFAULT NULL,
  `hitter_walks` int(11) DEFAULT NULL,
  `hitter_strikeout` int(11) DEFAULT NULL,
  `hitter_woba` double DEFAULT NULL,
  `hitter_wrc` double DEFAULT NULL,
  `hitter_wpa` double NOT NULL DEFAULT 0,
  `hitter_war` double NOT NULL DEFAULT 0,
  `hitter_zone` double DEFAULT NULL,
  `hitter_zone2` double DEFAULT NULL,
  `hitter_zone3` double DEFAULT NULL,
  `hitter_zone4` double DEFAULT NULL,
  `hitter_zone5` double DEFAULT NULL,
  `hitter_zone6` double DEFAULT NULL,
  `hitter_zone7` double DEFAULT NULL,
  `hitter_zone8` double DEFAULT NULL,
  `hitter_zone9` double DEFAULT NULL,
  `hitter_zone11` double DEFAULT NULL,
  `hitter_zone12` double DEFAULT NULL,
  `hitter_zone13` double DEFAULT NULL,
  `hitter_zone14` double DEFAULT NULL,
  `hitter_salary` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`hitter_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hitters`
--

LOCK TABLES `hitters` WRITE;
/*!40000 ALTER TABLE `hitters` DISABLE KEYS */;
INSERT INTO `hitters` VALUES (1,'Darin Ruf',0.271,117,'R',262,71,13,2,16,43,41,2,3,0.385,0.519,0.904,0.248,0.344,46,87,0.384,56,1.75,2.8,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,3000000),(2,'Ha-Seong Kim',0.202,117,'R',267,54,12,2,8,34,27,6,4,0.27,0.352,0.622,0.15,0.241,22,71,0.27,25,-1.36,0.5,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,7000000),(3,'Shohei Ohtani',0.257,158,'L',537,138,26,8,46,100,103,26,4,0.372,0.592,0.965,0.335,0.303,96,189,0.393,119,5.18,5,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,5500000),(4,'Aaron Judge',0.287,148,'R',550,158,24,0,39,98,89,6,3,0.373,0.544,0.916,0.256,0.332,75,158,0.387,115,4.65,5.5,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,19000000),(5,'Albert Pujols',0.236,109,'R',275,65,3,0,17,50,29,2,5,0.284,0.433,0.717,0.196,0.223,14,45,0.302,33,-0.68,-0.2,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,2500000),(6,'Mike Trout',0.333,36,'R',117,39,8,1,8,18,23,2,2,0.466,0.624,1.09,0.291,0.456,27,41,0.451,34,0.77,2.2,0.333,0.333,0.333,0.333,0.333,0.333,0.333,0.333,0.333,0.333,0.333,0.333,0.333,37116666),(7,'Manny Machado',0.278,153,'R',564,157,31,2,28,106,92,12,2,0.347,0.489,0.836,0.211,0.29,63,102,0.35,96,1.89,4.3,0.278,0.278,0.278,0.278,0.278,0.278,0.278,0.278,0.278,0.278,0.278,0.278,0.278,30000000),(8,'Freddie Freeman',0.3,159,'L',600,180,25,2,31,83,120,8,8,0.393,0.503,0.896,0.203,0.321,85,107,0.379,121,3.67,4.8,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,20000000),(9,'Jeff McNeil',0.251,120,'L',386,97,19,1,7,35,48,3,10,0.319,0.36,0.679,0.109,0.28,29,58,0.301,47,-2.24,1.3,0.251,0.251,0.251,0.251,0.251,0.251,0.251,0.251,0.251,0.251,0.251,0.251,0.251,3000000),(10,'Nolan Arenado',0.255,157,'R',593,151,34,3,34,105,81,2,3,0.312,0.494,0.807,0.239,0.249,50,96,0.336,91,1.79,4.1,0.255,0.255,0.255,0.255,0.255,0.255,0.255,0.255,0.255,0.255,0.255,0.255,0.255,35000000),(11,'Paul Goldschmidt',0.294,158,'R',603,177,36,2,31,99,102,12,4,0.365,0.514,0.879,0.221,0.331,67,136,0.373,115,2.97,5,0.294,0.294,0.294,0.294,0.294,0.294,0.294,0.294,0.294,0.294,0.294,0.294,0.294,26000000),(12,'Simon Kang',0.5,158,'L',537,138,26,8,46,100,103,26,4,0.372,0.592,0.965,0.335,0.303,96,189,0.393,119,5.18,5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,2000000),(13,'Andre Torino',0.271,117,'R',262,71,13,2,16,43,41,2,3,0.385,0.519,0.904,0.248,0.344,46,87,0.384,56,1.75,2.8,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,0.271,3000000),(14,'Hose Mativ',0.202,117,'R',267,54,12,2,8,34,27,6,4,0.27,0.352,0.622,0.15,0.241,22,71,0.27,25,-1.36,0.5,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,0.202,7000000),(15,'Mane Hoka',0.257,158,'L',537,138,26,8,46,100,103,26,4,0.372,0.592,0.965,0.335,0.303,96,189,0.393,119,5.18,5,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,0.257,5500000),(16,'Argo King',0.287,148,'R',550,158,24,0,39,98,89,6,3,0.373,0.544,0.916,0.256,0.332,75,158,0.387,115,4.65,5.5,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,0.287,19000000),(17,'Bryan Ado',0.236,109,'R',275,65,3,0,17,50,29,2,5,0.284,0.433,0.717,0.196,0.223,14,45,0.302,33,-0.68,-0.2,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,0.236,2500000);
/*!40000 ALTER TABLE `hitters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logos`
--

DROP TABLE IF EXISTS `logos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logos` (
  `logo_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `logo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`logo_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logos`
--

LOCK TABLES `logos` WRITE;
/*!40000 ALTER TABLE `logos` DISABLE KEYS */;
INSERT INTO `logos` VALUES (1,'https://j7d109.p.ssafy.io/download/logo01.png'),(2,'https://j7d109.p.ssafy.io/download/logo02.png'),(3,'https://j7d109.p.ssafy.io/download/logo03.png'),(4,'https://j7d109.p.ssafy.io/download/logo04.png'),(5,'https://j7d109.p.ssafy.io/download/logo05.png'),(6,'https://j7d109.p.ssafy.io/download/logo06.png'),(7,'https://j7d109.p.ssafy.io/download/logo07.png'),(8,'https://j7d109.p.ssafy.io/download/logo08.png'),(9,'https://j7d109.p.ssafy.io/download/logo09.png'),(10,'https://j7d109.p.ssafy.io/download/logo10.png'),(11,'https://j7d109.p.ssafy.io/download/logo11.png'),(12,'https://j7d109.p.ssafy.io/download/logo12.png'),(13,'https://j7d109.p.ssafy.io/download/logo13.png'),(14,'https://j7d109.p.ssafy.io/download/logo14.png'),(15,'https://j7d109.p.ssafy.io/download/logo15.png'),(16,'https://j7d109.p.ssafy.io/download/logo16.png'),(17,'https://j7d109.p.ssafy.io/download/logo17.png'),(18,'https://j7d109.p.ssafy.io/download/logo18.png'),(19,'https://j7d109.p.ssafy.io/download/logo19.png'),(20,'https://j7d109.p.ssafy.io/download/logo20.png'),(21,'https://j7d109.p.ssafy.io/download/logo21.png'),(22,'https://j7d109.p.ssafy.io/download/logo22.png'),(23,'https://j7d109.p.ssafy.io/download/logo23.png'),(24,'https://j7d109.p.ssafy.io/download/logo24.png'),(25,'https://j7d109.p.ssafy.io/download/logo25.png'),(26,'https://j7d109.p.ssafy.io/download/logo26.png'),(27,'https://j7d109.p.ssafy.io/download/logo27.png'),(28,'https://j7d109.p.ssafy.io/download/logo28.png'),(29,'https://j7d109.p.ssafy.io/download/logo29.png'),(30,'https://j7d109.p.ssafy.io/download/logo30.png');
/*!40000 ALTER TABLE `logos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logs` (
  `match_seq` bigint(20) NOT NULL,
  `log_inning` tinyint(3) unsigned DEFAULT 1,
  `log_half` varchar(10) DEFAULT 'top',
  `log_out` tinyint(4) DEFAULT 0,
  `log_pitcher` bigint(20) DEFAULT NULL,
  `log_hitter` bigint(20) DEFAULT NULL,
  `log_1st_base` bigint(20) DEFAULT NULL,
  `log_2nd_base` bigint(20) DEFAULT NULL,
  `log_3rd_base` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`match_seq`),
  CONSTRAINT `logs_ibfk_1` FOREIGN KEY (`match_seq`) REFERENCES `matches` (`match_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` VALUES (34,1,'TOP',0,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `match_settings`
--

DROP TABLE IF EXISTS `match_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `match_settings` (
  `match_seq` bigint(20) NOT NULL,
  `match_setting_1st` bigint(20) DEFAULT NULL,
  `match_setting_2nd` bigint(20) DEFAULT NULL,
  `match_setting_3rd` bigint(20) DEFAULT NULL,
  `match_setting_4th` bigint(20) DEFAULT NULL,
  `match_setting_5th` bigint(20) DEFAULT NULL,
  `match_setting_6th` bigint(20) DEFAULT NULL,
  `match_setting_7th` bigint(20) DEFAULT NULL,
  `match_setting_8th` bigint(20) DEFAULT NULL,
  `match_setting_9th` bigint(20) DEFAULT NULL,
  `match_setting_pitcher` bigint(20) DEFAULT NULL,
  `match_setting_next_bat` int(11) DEFAULT NULL,
  PRIMARY KEY (`match_seq`),
  KEY `FK3ucnt0m7j299co6nrs79wxbft` (`match_setting_1st`),
  KEY `FK2tumvcfb2mf558xihsdmnua2b` (`match_setting_2nd`),
  KEY `FKodxkhafpo5vxxeakrh2na35e` (`match_setting_3rd`),
  KEY `FKjb6y43q31grfuger26ie3d95d` (`match_setting_4th`),
  KEY `FKeqv2a1da4d2gr736ifk9ttjw7` (`match_setting_5th`),
  KEY `FKq2snelqp2fbc25yf9k0u86qjd` (`match_setting_6th`),
  KEY `FK6n2c9dfn7ugjkb7gdp60mw5kq` (`match_setting_7th`),
  KEY `FK8cvaq92hplhfqlv189j0ayqac` (`match_setting_8th`),
  KEY `FKnv2l9dci716wkrg6y3a0m9otd` (`match_setting_9th`),
  KEY `FKlimff1y3dvaax6p1180bpm7w4` (`match_setting_pitcher`),
  CONSTRAINT `FK2tumvcfb2mf558xihsdmnua2b` FOREIGN KEY (`match_setting_2nd`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FK3ucnt0m7j299co6nrs79wxbft` FOREIGN KEY (`match_setting_1st`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FK6n2c9dfn7ugjkb7gdp60mw5kq` FOREIGN KEY (`match_setting_7th`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FK8cvaq92hplhfqlv189j0ayqac` FOREIGN KEY (`match_setting_8th`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FKeqv2a1da4d2gr736ifk9ttjw7` FOREIGN KEY (`match_setting_5th`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FKjb6y43q31grfuger26ie3d95d` FOREIGN KEY (`match_setting_4th`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FKlimff1y3dvaax6p1180bpm7w4` FOREIGN KEY (`match_setting_pitcher`) REFERENCES `user_pitchers` (`user_pitcher_seq`),
  CONSTRAINT `FKnv2l9dci716wkrg6y3a0m9otd` FOREIGN KEY (`match_setting_9th`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FKodxkhafpo5vxxeakrh2na35e` FOREIGN KEY (`match_setting_3rd`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FKq2snelqp2fbc25yf9k0u86qjd` FOREIGN KEY (`match_setting_6th`) REFERENCES `user_hitters` (`user_hitter_seq`),
  CONSTRAINT `FKr398e5yleif4kas5uibi9ou68` FOREIGN KEY (`match_seq`) REFERENCES `matches` (`match_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `match_settings`
--

LOCK TABLES `match_settings` WRITE;
/*!40000 ALTER TABLE `match_settings` DISABLE KEYS */;
INSERT INTO `match_settings` VALUES (34,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `match_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matches` (
  `match_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `ai_team_seq` bigint(20) DEFAULT NULL,
  `match_home_flag` bit(1) DEFAULT NULL,
  `season_seq` bigint(20) DEFAULT NULL,
  `user_seq` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`match_seq`),
  KEY `FKf7sjpdbmoom1ekbfakwu9uvh1` (`season_seq`),
  KEY `FK6tncyyktlk1ec6v0jqmlepm7a` (`user_seq`),
  CONSTRAINT `FK6tncyyktlk1ec6v0jqmlepm7a` FOREIGN KEY (`user_seq`) REFERENCES `users` (`user_seq`),
  CONSTRAINT `FKf7sjpdbmoom1ekbfakwu9uvh1` FOREIGN KEY (`season_seq`) REFERENCES `seasons` (`season_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` VALUES (1,1,'\0',1,1),(2,2,'',1,1),(3,3,'',1,1),(4,4,'',1,1),(5,1,'',5,8),(6,1,'',6,8),(7,1,'',7,8),(8,1,'',8,8),(9,1,'',9,5),(10,1,'',10,5),(11,1,'\0',11,5),(12,1,'',12,5),(13,1,NULL,19,53),(14,1,NULL,20,54),(15,1,'',21,55),(16,1,'',22,56),(17,1,'',23,57),(18,1,'',24,58),(19,1,'',25,59),(20,1,'',26,60),(21,1,'',27,61),(22,1,'',28,62),(23,1,'',29,63),(24,1,'',30,64),(25,1,'',31,65),(26,1,'',32,66),(27,1,'',33,67),(28,1,'',34,68),(29,1,'',35,69),(30,1,'',36,70),(31,1,'',37,71),(32,1,'',38,72),(33,1,'',39,73),(34,1,'',40,74),(35,1,'',41,75),(36,1,'',42,76),(37,1,'',43,77),(38,1,'',44,78),(39,1,'',45,79),(40,1,'',46,80);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `out_players`
--

DROP TABLE IF EXISTS `out_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `out_players` (
  `out_player_seq` bigint(20) NOT NULL,
  `match_seq` bigint(20) DEFAULT NULL,
  `out_player_player` bigint(20) DEFAULT NULL,
  `out_player_type` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`out_player_seq`),
  KEY `match_seq` (`match_seq`),
  CONSTRAINT `out_players_ibfk_1` FOREIGN KEY (`match_seq`) REFERENCES `matches` (`match_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `out_players`
--

LOCK TABLES `out_players` WRITE;
/*!40000 ALTER TABLE `out_players` DISABLE KEYS */;
/*!40000 ALTER TABLE `out_players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pitchers`
--

DROP TABLE IF EXISTS `pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pitchers` (
  `pitcher_seq` bigint(20) NOT NULL,
  `pitcher_name` varchar(255) DEFAULT NULL,
  `pitcher_era` double DEFAULT NULL,
  `pitcher_game` int(11) DEFAULT NULL,
  `pitcher_inning` double DEFAULT NULL,
  `pitcher_win` int(11) DEFAULT NULL,
  `pitcher_lose` int(11) DEFAULT NULL,
  `pitcher_pit_arm` varchar(1) DEFAULT NULL,
  `pitcher_save` int(11) DEFAULT NULL,
  `pitcher_hold` int(11) DEFAULT NULL,
  `pitcher_strikeout` int(11) DEFAULT NULL,
  `pitcher_hits` int(11) DEFAULT NULL,
  `pitcher_homerun` int(11) DEFAULT NULL,
  `pitcher_run` int(11) DEFAULT NULL,
  `pitcher_walk` int(11) DEFAULT NULL,
  `pitcher_hit_by_pitch` int(11) DEFAULT NULL,
  `pitcher_rating` double DEFAULT NULL,
  `pitcher_whip` double DEFAULT NULL,
  `pitcher_so9` double DEFAULT NULL,
  `pitcher_bb9` double DEFAULT NULL,
  `pitcher_so_rate` double DEFAULT NULL,
  `pitcher_bb_rate` double DEFAULT NULL,
  `pitcher_wpa` double DEFAULT NULL,
  `pitcher_war` double DEFAULT NULL,
  `pitcher_qs` double DEFAULT NULL,
  `pitcher_qsp` int(11) DEFAULT NULL,
  `pitcher_ds` int(11) DEFAULT NULL,
  `pitcher_fourseam` int(11) DEFAULT NULL,
  `pitcher_slider` int(11) DEFAULT NULL,
  `pitcher_sinker` int(11) DEFAULT NULL,
  `pitcher_changeup` int(11) DEFAULT NULL,
  `pitcher_curve` int(11) DEFAULT NULL,
  `pitcher_cutter` int(11) DEFAULT NULL,
  `pitcher_knuckle_curve` int(11) DEFAULT NULL,
  `pitcher_splitter` int(11) DEFAULT NULL,
  `pitcher_twoseam` int(11) DEFAULT NULL,
  `pitcher_knuckleball` int(11) DEFAULT NULL,
  `pitcher_eephus` int(11) DEFAULT NULL,
  `pitcher_screwball` int(11) DEFAULT NULL,
  `pitcher_salary` int(11) DEFAULT NULL,
  `pitcher_max_velocity` double DEFAULT NULL,
  PRIMARY KEY (`pitcher_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pitchers`
--

LOCK TABLES `pitchers` WRITE;
/*!40000 ALTER TABLE `pitchers` DISABLE KEYS */;
INSERT INTO `pitchers` VALUES (1,'Merrill Kelly',4.44,27,158,7,11,'R',0,0,130,163,21,82,41,4,0,1.29,7.41,2.34,19.5,6.1,-0.82,2.3,10,0,0,326,1,193,167,179,134,0,0,0,0,0,0,5250000,148.7),(2,'Kwang Hyun Kim',3.46,27,106.2,7,7,'L',1,0,80,98,12,46,39,4,0,1.28,6.75,3.29,17.7,8.6,0.76,1.2,5,0,0,416,376,2,117,89,9,0,0,0,0,0,0,4000000,144.19),(3,'Clayton Kershaw',3.55,22,121,10,8,'L',0,0,144,103,15,51,21,3,0,1.02,10.65,1.55,29.5,4.3,0.7,3.4,11,0,0,343,474,26,6,151,0,0,0,0,0,0,0,14500000,145.96),(4,'Adam Wainwright',3.05,32,206.1,17,7,'R',0,0,174,168,21,72,50,9,0,1.06,7.59,2.18,21,6,3.03,3.8,22,0,0,98,0,281,63,341,217,0,0,0,0,0,0,17500000,143.71),(5,'Madison Bumgarner',4.67,26,146.1,7,10,'L',0,0,124,134,24,82,39,11,0,1.18,7.63,2.4,20.2,6.4,-1.32,1.5,10,0,0,341,0,24,78,217,340,0,0,0,0,0,0,23000000,145.64),(6,'Aroldis Chapman',3.36,61,56.1,6,4,'L',30,1,97,36,9,23,38,3,0,1.31,15.5,6.07,39.9,15.6,1.71,0.6,0,0,0,557,268,66,0,0,0,0,110,0,0,0,0,18000000,158.35),(7,'Kenley Jansen',2.22,69,69,4,4,'R',38,0,86,36,4,21,36,2,0,1.04,11.22,4.7,30.9,12.9,3.01,1.8,0,0,0,0,131,225,0,0,644,0,0,0,0,0,0,16000000,148.38),(8,'Hyun Jin Ryu',4.37,31,169,14,10,'L',0,0,143,170,24,85,39,2,0,1.22,7.62,1.97,20.4,4.6,0.89,2.5,13,0,0,345,4,16,255,126,254,0,0,0,0,0,0,20000000,143.88),(9,'Shohei Ohtani',3.18,23,130.1,9,2,'R',0,0,156,98,15,48,44,10,0,1.09,10.77,3.04,29.3,8.3,2.46,5,14,0,0,440,219,0,0,37,121,0,183,0,0,0,0,5500000,154.01),(10,'Gerret Cole',3.23,30,181.1,16,8,'R',0,0,243,151,24,69,41,2,0,1.06,12.06,2.03,33.5,5.6,3.43,5.2,18,0,0,473,222,7,142,157,0,0,0,0,0,0,0,36000000,157.39),(11,'Max Scherzer',2.46,30,179.1,15,4,'R',0,0,236,119,23,53,36,10,0,0.86,11.84,1.81,34.1,5.2,4.37,5.4,18,0,0,467,190,4,149,98,95,0,0,0,0,0,0,43333333,151.43);
/*!40000 ALTER TABLE `pitchers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `results` (
  `match_seq` bigint(20) NOT NULL,
  `result_apponent_score` int(11) DEFAULT NULL,
  `result_outcome` char(1) DEFAULT NULL,
  `result_user_score` int(11) DEFAULT NULL,
  `result_lose_pitcher` bigint(20) DEFAULT NULL,
  `result_win_pitcher` bigint(20) DEFAULT NULL,
  `result_opponent_score` int(11) DEFAULT NULL,
  PRIMARY KEY (`match_seq`),
  KEY `FKavyfhnn71iuoynsmmuvf30719` (`result_lose_pitcher`),
  KEY `FKpfbd5llfq8jpvqmljl59mxvw3` (`result_win_pitcher`),
  CONSTRAINT `FKavyfhnn71iuoynsmmuvf30719` FOREIGN KEY (`result_lose_pitcher`) REFERENCES `pitchers` (`pitcher_seq`),
  CONSTRAINT `FKg47p7rfwb0ak8rhujmnp7324c` FOREIGN KEY (`match_seq`) REFERENCES `matches` (`match_seq`),
  CONSTRAINT `FKpfbd5llfq8jpvqmljl59mxvw3` FOREIGN KEY (`result_win_pitcher`) REFERENCES `pitchers` (`pitcher_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedules` (
  `schedule_seq` bigint(20) NOT NULL,
  `team_seq` bigint(20) DEFAULT NULL,
  `schedule_home_flag` bit(1) DEFAULT NULL,
  PRIMARY KEY (`schedule_seq`),
  KEY `FK8i59dhkp4ymjpf9o1fh1rlhua` (`team_seq`),
  CONSTRAINT `FK8i59dhkp4ymjpf9o1fh1rlhua` FOREIGN KEY (`team_seq`) REFERENCES `ai_teams` (`ai_team_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
INSERT INTO `schedules` VALUES (1,1,''),(2,2,'\0'),(3,3,'\0'),(4,4,''),(5,2,''),(6,3,''),(7,4,'\0'),(8,1,''),(9,3,'\0'),(10,4,'\0'),(11,1,''),(12,2,''),(13,4,''),(14,1,'\0'),(15,2,'\0'),(16,3,'');
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scoreboards`
--

DROP TABLE IF EXISTS `scoreboards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scoreboards` (
  `match_seq` bigint(20) NOT NULL,
  `scoreboard_1st_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_1st_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_2nd_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_2nd_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_3rd_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_3rd_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_4th_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_4th_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_5th_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_5th_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_6th_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_6th_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_7th_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_7th_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_8th_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_8th_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_9th_top` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_9th_bottom` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_home_score` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_away_score` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_home_hit` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_away_hit` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_home_walk` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_away_walk` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_home_homerun` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_away_homerun` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_home_strikeout` tinyint(3) unsigned DEFAULT 0,
  `scoreboard_away_strikeout` tinyint(3) unsigned DEFAULT 0,
  PRIMARY KEY (`match_seq`),
  CONSTRAINT `scoreboards_ibfk_1` FOREIGN KEY (`match_seq`) REFERENCES `matches` (`match_seq`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scoreboards`
--

LOCK TABLES `scoreboards` WRITE;
/*!40000 ALTER TABLE `scoreboards` DISABLE KEYS */;
INSERT INTO `scoreboards` VALUES (34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `scoreboards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seasons`
--

DROP TABLE IF EXISTS `seasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seasons` (
  `season_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `season_year` int(11) DEFAULT NULL,
  `schedule_seq` bigint(20) DEFAULT NULL,
  `user_seq` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`season_seq`),
  KEY `FKk5yebj08l3agidhj9rfxx0h87` (`schedule_seq`),
  KEY `FKfke8c2oirqves4c9dml3h93ro` (`user_seq`),
  CONSTRAINT `FKfke8c2oirqves4c9dml3h93ro` FOREIGN KEY (`user_seq`) REFERENCES `users` (`user_seq`),
  CONSTRAINT `FKk5yebj08l3agidhj9rfxx0h87` FOREIGN KEY (`schedule_seq`) REFERENCES `schedules` (`schedule_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seasons`
--

LOCK TABLES `seasons` WRITE;
/*!40000 ALTER TABLE `seasons` DISABLE KEYS */;
INSERT INTO `seasons` VALUES (1,2022,1,1),(2,2022,2,1),(3,2022,3,1),(4,2022,4,1),(5,2022,1,8),(6,2022,2,8),(7,2022,3,8),(8,2022,4,8),(9,2022,1,5),(10,2022,2,5),(11,2022,3,5),(12,2022,4,5),(19,2022,1,53),(20,2022,1,54),(21,2022,1,55),(22,2022,1,56),(23,2022,1,57),(24,2022,1,58),(25,2022,1,59),(26,2022,1,60),(27,2022,1,61),(28,2022,1,62),(29,2022,1,63),(30,2022,1,64),(31,2022,1,65),(32,2022,1,66),(33,2022,1,67),(34,2022,1,68),(35,2022,1,69),(36,2022,1,70),(37,2022,1,71),(38,2022,1,72),(39,2022,1,73),(40,2022,1,74),(41,2022,1,75),(42,2022,1,76),(43,2022,1,77),(44,2022,1,78),(45,2022,1,79),(46,2022,1,80);
/*!40000 ALTER TABLE `seasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team_settings`
--

DROP TABLE IF EXISTS `team_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `team_settings` (
  `team_setting_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `team_setting_1st_sp` bigint(20) DEFAULT NULL,
  `team_setting_2nd_sp` bigint(20) DEFAULT NULL,
  `team_setting_3rd_sp` bigint(20) DEFAULT NULL,
  `team_setting_4th_sp` bigint(20) DEFAULT NULL,
  `team_setting_5th_sp` bigint(20) DEFAULT NULL,
  `team_setting_next_sp` int(11) DEFAULT NULL,
  `user_seq` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`team_setting_seq`),
  KEY `FK1em8h8vbquhepxfrr7irvdmac` (`user_seq`),
  KEY `FKffbxrs5tr2jffjh7oif7npsk3` (`team_setting_1st_sp`),
  KEY `FKq9c3d5ce0re55cgk1qv80nfim` (`team_setting_2nd_sp`),
  KEY `FKieobglmhnlyj6t7cqu8oj6n0y` (`team_setting_3rd_sp`),
  KEY `FKp6pwdumbt7i1a4tp4liyvf9f9` (`team_setting_4th_sp`),
  KEY `FKjg44y6i5wgias398hbfdekbqj` (`team_setting_5th_sp`),
  CONSTRAINT `FK1em8h8vbquhepxfrr7irvdmac` FOREIGN KEY (`user_seq`) REFERENCES `users` (`user_seq`),
  CONSTRAINT `FKffbxrs5tr2jffjh7oif7npsk3` FOREIGN KEY (`team_setting_1st_sp`) REFERENCES `user_pitchers` (`user_pitcher_seq`),
  CONSTRAINT `FKieobglmhnlyj6t7cqu8oj6n0y` FOREIGN KEY (`team_setting_3rd_sp`) REFERENCES `user_pitchers` (`user_pitcher_seq`),
  CONSTRAINT `FKjg44y6i5wgias398hbfdekbqj` FOREIGN KEY (`team_setting_5th_sp`) REFERENCES `user_pitchers` (`user_pitcher_seq`),
  CONSTRAINT `FKp6pwdumbt7i1a4tp4liyvf9f9` FOREIGN KEY (`team_setting_4th_sp`) REFERENCES `user_pitchers` (`user_pitcher_seq`),
  CONSTRAINT `FKq9c3d5ce0re55cgk1qv80nfim` FOREIGN KEY (`team_setting_2nd_sp`) REFERENCES `user_pitchers` (`user_pitcher_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team_settings`
--

LOCK TABLES `team_settings` WRITE;
/*!40000 ALTER TABLE `team_settings` DISABLE KEYS */;
INSERT INTO `team_settings` VALUES (78,716,717,718,719,720,716,74),(79,723,724,725,726,727,1,77),(80,730,731,732,733,734,730,75),(81,737,738,739,740,741,737,76),(82,745,746,747,748,749,745,8),(84,759,760,761,762,763,759,78),(86,773,774,776,778,777,773,79),(87,780,781,782,783,784,1,80);
/*!40000 ALTER TABLE `team_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_hitters`
--

DROP TABLE IF EXISTS `user_hitters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_hitters` (
  `user_hitter_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `hitter_seq` bigint(20) DEFAULT NULL,
  `user_hitter_name` varchar(255) DEFAULT NULL,
  `user_seq` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_hitter_seq`),
  KEY `FKi4scxj09f4qm4tclyrevxep4j` (`user_seq`),
  CONSTRAINT `FKi4scxj09f4qm4tclyrevxep4j` FOREIGN KEY (`user_seq`) REFERENCES `users` (`user_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=1247 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_hitters`
--

LOCK TABLES `user_hitters` WRITE;
/*!40000 ALTER TABLE `user_hitters` DISABLE KEYS */;
INSERT INTO `user_hitters` VALUES (1157,1,'Darin Ruf',75),(1158,2,'Ha-Seong Kim',75),(1159,4,'Aaron Judge',75),(1160,5,'Albert Pujols',75),(1161,8,'Freddie Freeman',75),(1162,12,'Simon Kang',75),(1163,9,'Jeff McNeil',75),(1164,13,'Andre Torino',75),(1165,14,'Hose Mativ',75),(1166,3,'Shohei Ohtani',76),(1167,2,'Ha-Seong Kim',76),(1168,5,'Albert Pujols',76),(1169,9,'Jeff McNeil',76),(1170,12,'Simon Kang',76),(1171,13,'Andre Torino',76),(1172,15,'Mane Hoka',76),(1173,14,'Hose Mativ',76),(1174,17,'Bryan Ado',76),(1175,1,'Darin Ruf',76),(1176,10,'Nolan Arenado',76),(1177,8,'Freddie Freeman',76),(1178,1,'Darin Ruf',8),(1179,2,'Ha-Seong Kim',8),(1180,5,'Albert Pujols',8),(1181,12,'Simon Kang',8),(1182,13,'Andre Torino',8),(1183,14,'Hose Mativ',8),(1184,17,'Bryan Ado',8),(1185,3,'Shohei Ohtani',8),(1186,15,'Mane Hoka',8),(1187,9,'Jeff McNeil',8),(1201,1,'Darin Ruf',78),(1202,2,'Ha-Seong Kim',78),(1203,3,'Shohei Ohtani',78),(1204,11,'Paul Goldschmidt',78),(1205,12,'Simon Kang',78),(1206,13,'Andre Torino',78),(1207,5,'Albert Pujols',78),(1208,9,'Jeff McNeil',78),(1209,15,'Mane Hoka',78),(1210,14,'Hose Mativ',78),(1211,17,'Bryan Ado',78),(1225,1,'Darin Ruf',79),(1226,2,'Ha-Seong Kim',79),(1227,3,'Shohei Ohtani',79),(1228,6,'Mike Trout',79),(1229,10,'Nolan Arenado',79),(1230,12,'Simon Kang',79),(1231,13,'Andre Torino',79),(1232,15,'Mane Hoka',79),(1233,5,'Albert Pujols',79),(1234,1,'Darin Ruf',80),(1235,2,'Ha-Seong Kim',80),(1236,3,'Shohei Ohtani',80),(1237,4,'Aaron Judge',80),(1238,5,'Albert Pujols',80),(1239,6,'Mike Trout',80),(1240,7,'Manny Machado',80),(1241,8,'Freddie Freeman',80),(1242,9,'Jeff McNeil',80),(1243,10,'Nolan Arenado',80),(1244,11,'Paul Goldschmidt',80),(1245,12,'Simon Kang',80),(1246,13,'Andre Torino',80);
/*!40000 ALTER TABLE `user_hitters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_pitchers`
--

DROP TABLE IF EXISTS `user_pitchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_pitchers` (
  `user_pitcher_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `pitcher_seq` bigint(20) DEFAULT NULL,
  `user_pitcher_name` varchar(255) DEFAULT NULL,
  `user_seq` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_pitcher_seq`),
  KEY `FK6m0xjb6s6chq0ghwnxa4dk9mb` (`user_seq`),
  CONSTRAINT `FK6m0xjb6s6chq0ghwnxa4dk9mb` FOREIGN KEY (`user_seq`) REFERENCES `users` (`user_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=787 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_pitchers`
--

LOCK TABLES `user_pitchers` WRITE;
/*!40000 ALTER TABLE `user_pitchers` DISABLE KEYS */;
INSERT INTO `user_pitchers` VALUES (716,1,'Merrill Kelly',74),(717,2,'Kwang Hyun Kim',74),(718,9,'Shohei Ohtani',74),(719,3,'Clayton Kershaw',74),(720,7,'Kenley Jansen',74),(721,4,'Adam Wainwright',74),(722,6,'Aroldis Chapman',74),(723,1,'Darin Ruf',77),(724,2,'Ha-Seong Kim',77),(725,3,'Shohei Ohtani',77),(726,4,'Aaron Judge',77),(727,5,'Albert Pujols',77),(728,6,'Mike Trout',77),(729,7,'Manny Machado',77),(730,1,'Merrill Kelly',75),(731,2,'Kwang Hyun Kim',75),(732,3,'Clayton Kershaw',75),(733,4,'Adam Wainwright',75),(734,8,'Hyun Jin Ryu',75),(735,9,'Shohei Ohtani',75),(736,7,'Kenley Jansen',75),(737,1,'Merrill Kelly',76),(738,2,'Kwang Hyun Kim',76),(739,3,'Clayton Kershaw',76),(740,4,'Adam Wainwright',76),(741,5,'Madison Bumgarner',76),(742,6,'Aroldis Chapman',76),(743,9,'Shohei Ohtani',76),(744,7,'Kenley Jansen',76),(745,1,'Merrill Kelly',8),(746,2,'Kwang Hyun Kim',8),(747,9,'Shohei Ohtani',8),(748,7,'Kenley Jansen',8),(749,6,'Aroldis Chapman',8),(750,3,'Clayton Kershaw',8),(751,4,'Adam Wainwright',8),(759,2,'Kwang Hyun Kim',78),(760,9,'Shohei Ohtani',78),(761,1,'Merrill Kelly',78),(762,11,'Max Scherzer',78),(763,4,'Adam Wainwright',78),(764,6,'Aroldis Chapman',78),(765,3,'Clayton Kershaw',78),(773,1,'Merrill Kelly',79),(774,2,'Kwang Hyun Kim',79),(775,3,'Clayton Kershaw',79),(776,4,'Adam Wainwright',79),(777,6,'Aroldis Chapman',79),(778,7,'Kenley Jansen',79),(779,9,'Shohei Ohtani',79),(780,1,'Darin Ruf',80),(781,2,'Ha-Seong Kim',80),(782,3,'Shohei Ohtani',80),(783,4,'Aaron Judge',80),(784,5,'Albert Pujols',80),(785,6,'Mike Trout',80),(786,7,'Manny Machado',80);
/*!40000 ALTER TABLE `user_pitchers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_seq` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_draw` int(11) DEFAULT NULL,
  `user_exp` int(11) DEFAULT NULL,
  `user_in_play_flag` bit(1) DEFAULT NULL,
  `user_level` int(11) DEFAULT NULL,
  `user_logintype` char(1) DEFAULT NULL,
  `user_lose` int(11) DEFAULT NULL,
  `user_payroll` int(11) DEFAULT NULL,
  `user_teamname` varchar(255) DEFAULT NULL,
  `user_uid` varchar(255) DEFAULT NULL,
  `user_win` int(11) DEFAULT NULL,
  `logo_seq` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`user_seq`),
  KEY `FK5muik589r67obw81loypqtk94` (`logo_seq`),
  CONSTRAINT `FK5muik589r67obw81loypqtk94` FOREIGN KEY (`logo_seq`) REFERENCES `logos` (`logo_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,0,0,'\0',1,'K',0,1000000000,'besTeam','111111111111',0,2),(2,0,0,'\0',1,'G',0,10000000,'test2team','test2',0,3),(3,0,0,'\0',1,'G',0,10000000,NULL,NULL,0,1),(4,0,0,'\0',1,'G',0,10000000,NULL,NULL,0,1),(5,0,0,'\0',1,'G',0,150000000,NULL,NULL,0,1),(6,0,0,'\0',1,'K',0,10000000,NULL,NULL,0,1),(7,0,0,'\0',1,'N',0,10000000,NULL,NULL,0,1),(8,0,0,'\0',1,'G',0,150000000,'드림즈 109','107022125695353437805',0,8),(9,0,0,'\0',1,'N',0,10000000,NULL,NULL,0,23),(10,0,0,'\0',1,'N',0,10000000,'이동욱','TfdfFG4z_tT0JDUMmRCrdLjYPHYH1ywRkQcuNVHPsLo',0,15),(11,0,0,'\0',1,'G',0,10000000,'피자묵자','111373751000694831952',0,21),(12,0,0,'\0',1,'G',0,10000000,'뿌니뿌니천뿌니','108269100263267407249',0,22),(13,0,0,'\0',1,'G',0,10000000,'기분이안좋을땐고기앞','115682589623655672964',0,1),(14,0,0,'\0',1,'G',0,10000000,NULL,NULL,0,12),(15,0,0,'\0',1,'G',0,10000000,NULL,NULL,0,22),(16,0,0,'\0',1,'G',0,10000000,NULL,NULL,0,1),(17,0,0,'\0',1,'G',0,10000000,NULL,NULL,0,1),(18,0,0,'\0',1,'G',0,10000000,NULL,NULL,0,19),(19,0,0,'\0',1,'K',0,1000000000,'백엔드죽어욧','2463966837',0,24),(21,0,0,'\0',1,'K',0,10000000,'홍이구단ㅋㅋㅋ','2464680312',0,19),(22,0,0,'\0',1,'G',0,10000000,'하하','114556111895264030131',0,21),(23,0,0,'\0',1,'N',0,10000000,NULL,NULL,0,8),(24,0,0,'\0',1,'G',0,10000000,'나는최고다','117189741887928750993',0,1),(26,0,0,'\0',1,'K',0,10000000,'하루','2468264464',0,1),(27,0,0,'\0',1,'N',0,10000000,NULL,NULL,0,24),(28,0,0,'\0',1,'G',0,10000000,'hello109','106085629680934206121',0,1),(29,0,0,'\0',1,'K',0,10000000,'강컨설턴츠','2446064748',0,27),(30,0,0,'\0',1,'K',0,10000000,'구경','2471452164',0,12),(31,0,0,'\0',1,'G',0,10000000,'진현이등장','107624441542899112034',0,1),(32,0,0,'\0',1,'G',0,10000000,'aaa','107358519096245124113',0,22),(34,0,0,'\0',1,'K',0,138000000,'되나되나','2444264199',0,18),(35,0,0,'\0',1,'G',0,138000000,NULL,NULL,0,22),(36,0,0,'\0',1,'G',0,138000000,NULL,NULL,0,13),(37,0,0,'\0',1,'G',0,138000000,NULL,NULL,0,22),(38,0,0,'\0',1,'K',0,138000000,NULL,NULL,0,24),(39,0,0,'\0',1,'K',0,138000000,NULL,NULL,0,1),(40,0,0,'\0',1,'K',0,138000000,NULL,NULL,0,18),(41,0,0,'\0',1,'K',0,138000000,NULL,NULL,0,20),(42,0,0,'\0',1,'G',0,200000000,'하하하핳이','111215803037041795301',0,26),(43,0,0,'\0',1,'K',0,200000000,'드림즈109','2473164036',0,18),(44,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,1),(45,0,0,'\0',1,'K',0,200000000,NULL,NULL,0,29),(46,0,0,'\0',1,'N',0,200000000,NULL,NULL,0,10),(47,0,0,'\0',1,'N',0,200000000,NULL,NULL,0,17),(48,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,19),(49,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,17),(50,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,19),(51,0,0,'\0',1,'N',0,200000000,NULL,NULL,0,20),(52,0,0,'\0',1,'K',0,200000000,NULL,NULL,0,17),(53,0,0,'\0',1,'N',0,200000000,NULL,NULL,0,1),(54,0,0,'\0',1,'K',0,200000000,NULL,NULL,0,23),(55,0,0,'\0',1,'N',0,200000000,'3','dTbgzjJq09Qw0GBTJ6Fe_k9NtsRjEV4Y72FKc6dm_Sw',0,1),(56,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,17),(57,0,0,'\0',1,'G',0,200000000,'321','117110776692191811674',0,18),(58,0,0,'\0',1,'N',0,200000000,'이정재넌내가이긴다','03F7O5BWRlG45xezCcxCbpRbemhX198z9_3wPnocQHk',0,22),(59,0,0,'\0',1,'K',0,200000000,NULL,NULL,0,22),(60,0,0,'\0',1,'N',0,200000000,'이틀','gL0TH0GVfBkvO5c6_-GllxcmvIL-S8hEbe1kUWrn5gs',0,10),(61,0,0,'\0',1,'G',0,200000000,'사흘','112340543181293099990',0,16),(62,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,1),(63,0,0,'\0',1,'G',0,200000000,'강컨설턴츠','111940795743947486279',0,27),(64,0,0,'\0',1,'N',0,200000000,'백엔드죽어요','Dt1LMvy9ZIOcsuJrcIsNckTL3Jmq-Ti2Q4At1hPO6fw',0,1),(65,0,0,'\0',1,'N',0,200000000,'대전시티즌','LLE5rXMUx0iqhSz7oGyvZG09nyT-YClRLCiCo7QwyNo',0,17),(66,0,0,'\0',1,'K',0,200000000,NULL,NULL,0,20),(67,0,0,'\0',1,'K',0,200000000,'테스트','2442832377',0,18),(68,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,1),(69,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,22),(70,0,0,'\0',1,'G',0,200000000,'고기가맛있구나','104176572911186518578',0,20),(71,0,0,'\0',1,'K',0,200000000,NULL,NULL,0,30),(72,0,0,'\0',1,'K',0,200000000,NULL,NULL,0,21),(73,0,0,'\0',1,'K',0,200000000,NULL,NULL,0,19),(74,0,0,'\0',1,'G',0,200000000,'드림즈109','105865898026323162708',0,21),(75,0,0,'\0',1,'G',0,200000000,'31233123','112614906722535882130',0,13),(76,0,0,'\0',1,'K',0,200000000,'왜안될까아잉','2473159073',0,15),(77,0,0,'\0',1,'N',0,200000000,NULL,NULL,0,21),(78,0,0,'\0',1,'G',0,200000000,NULL,NULL,0,20),(79,0,0,'\0',1,'N',0,200000000,'강시몬스터즈','ghKVwN7N0iLNgpLlhA8z2rfDgQqwDidtFjt2mz6jsaI',0,21),(80,0,0,'\0',1,'K',0,200000000,'편집자','2474761309',0,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07 13:30:58
