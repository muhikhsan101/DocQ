-- MySQL dump 10.13  Distrib 5.6.21, for Win32 (x86)
--
-- Host: localhost    Database: db_docq
-- ------------------------------------------------------
-- Server version	5.6.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `documentation`
--

DROP TABLE IF EXISTS `documentation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `documentation` (
  `iddocumentation` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `location` varchar(255) NOT NULL,
  `program` varchar(50) NOT NULL,
  `version` varchar(50) NOT NULL,
  `tags` text NOT NULL,
  PRIMARY KEY (`iddocumentation`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documentation`
--

LOCK TABLES `documentation` WRITE;
/*!40000 ALTER TABLE `documentation` DISABLE KEYS */;
INSERT INTO `documentation` VALUES (13,'Processing Reference','G:\\Installer\\Used\\processing-3.0b6\\modes\\java\\reference\\index.html','Processing','3.0b6','processing,web development,arduino,desktop app,cross platform,android,java'),(14,'CodeIgniter User Guide','G:\\Live Love Life\\Gaming Srouce Orp\\Web\\CodeIgniter-3.0.4-userguide\\user_guide\\index.html','CodeIgniter','3.0.4','codeigniter,php framework,web development'),(15,'Algorithms in a Nutshell','G:\\Live Love Life\\Book\\Algorithms in a Nutshell.pdf','C, C++, Java, Ruby','-','algorithm,data structure,book,c,c++,java,ruby'),(16,'PHP Manual','G:\\Live Love Life\\Book\\php_enhanced_en.chm','PHP','7.0.x','php,web development'),(17,'MySQL Readme (npm)','G:\\Live Love Life\\Gaming Proctice\\Electron\\NodeMySQL\\node_modules\\mysql\\Readme.md','mysql (npm)','2.10.2','npm,mysql,node.js,web development,desktop app'),(18,'Electron Readme','G:\\Live Love Life\\GitHub\\electron\\docs\\','Electron','0.36.8','npm,node.js,electron,javascript,web development,desktop app'),(19,'Python Documentation','G:\\Live Love Life\\Book\\Python Documentation\\python-3.5.1-docs-html\\python-3.5.1-docs-html\\index.html','Python','3.5.1','python,desktop app,web development'),(20,'Python Documentation','G:\\Live Love Life\\Book\\Python Documentation\\python-2.7.11-docs-html\\python-2.7.11-docs-html\\index.html','Python','2.7.11','python,web development,desktop app');
/*!40000 ALTER TABLE `documentation` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-11-13 21:23:12
