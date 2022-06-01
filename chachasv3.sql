-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: chachas
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

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
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cargo` (
  `idCargo` int(11) NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCargo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
INSERT INTO `cargo` VALUES (0,'Administrador'),(1,'Empleado');
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `idcliente` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Apellido` varchar(45) DEFAULT NULL,
  `CI` varchar(45) NOT NULL,
  PRIMARY KEY (`idcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Brian','Fernandez Mercado','34353637'),(2,'kevin','Campero','5423545'),(3,'prueba1','Mercado','23412341'),(4,'prueba2','Mercado','34345345'),(5,'prueba3','Mercado','34345234'),(6,'prueba6','Mercado43','12312341'),(7,'prueba7','Mercado43','23212323'),(8,'prueba8','Mesdfdo','32145342');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mesa`
--

DROP TABLE IF EXISTS `mesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mesa` (
  `idMesa` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Estado` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idMesa`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mesa`
--

LOCK TABLES `mesa` WRITE;
/*!40000 ALTER TABLE `mesa` DISABLE KEYS */;
INSERT INTO `mesa` VALUES (1,'Mesa 1','Sin Reserva'),(2,'Mesa 2','Sin Reserva'),(3,'Mesa 3','Sin Reserva'),(4,'Mesa 4','Sin Reserva'),(8,'Mesa 5','Sin Reserva'),(10,'Mesa 6','Sin Reserva');
/*!40000 ALTER TABLE `mesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) DEFAULT NULL,
  `Foto` mediumtext DEFAULT NULL,
  `Estado` varchar(45) DEFAULT NULL,
  `Cantidad` varchar(45) DEFAULT NULL,
  `Precio` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'chacha1','undefined','Activo','2','10'),(2,'chacha2','undefined','Activo','2','5');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservas` (
  `Fecha_reserva` datetime DEFAULT NULL,
  `Reserva_info` longtext DEFAULT NULL,
  `Usuario_CI` varchar(45) NOT NULL,
  `Reservaid` int(11) NOT NULL AUTO_INCREMENT,
  `idcliente` int(11) NOT NULL,
  `mesaid` int(11) NOT NULL,
  `total` longtext NOT NULL,
  PRIMARY KEY (`Reservaid`) USING BTREE,
  KEY `usuario-reservas` (`Usuario_CI`),
  KEY `cliente-reserva` (`idcliente`),
  KEY `mesa-reservas` (`mesaid`),
  CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`idcliente`) REFERENCES `cliente` (`idcliente`),
  CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`mesaid`) REFERENCES `mesa` (`idMesa`),
  CONSTRAINT `usuario-reservas` FOREIGN KEY (`Usuario_CI`) REFERENCES `usuario` (`CI`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
INSERT INTO `reservas` VALUES ('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10},{\"cantidad\":\"4\",\"idproducto\":1,\"costo\":\"10\",\"nombre\":\"chacha1\",\"total\":40}]','14696849',12,1,1,'50.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":1,\"costo\":\"10\",\"nombre\":\"chacha1\",\"total\":20}]','14696849',13,1,1,'20.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',14,1,1,'10.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',15,1,1,'10.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',16,1,1,'10.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',17,1,1,'10.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',18,1,1,'10.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10},{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',19,1,1,'20.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10},{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',20,1,1,'20.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10},{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',21,1,1,'20.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":1,\"costo\":\"10\",\"nombre\":\"chacha1\",\"total\":20}]','14696849',22,1,1,'20.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"3\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":15}]','14696849',23,1,1,'15.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"1\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":5}]','14696849',24,1,1,'5.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',25,1,1,'10.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"3\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":15}]','14696849',26,1,1,'15.00'),('0000-00-00 00:00:00','{\"cantidad\":\"3\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":15}','14696849',27,1,1,'15.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10},{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10},{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10},{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',28,1,2,'40.00'),('0000-00-00 00:00:00','[{\"cantidad\":\"2\",\"idproducto\":2,\"costo\":\"5\",\"nombre\":\"chacha2\",\"total\":10}]','14696849',29,1,1,'10.00');
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `CI` varchar(45) NOT NULL,
  `Contraseña` varchar(45) DEFAULT NULL,
  `Foto` mediumtext DEFAULT NULL,
  `Fecha_nacimiento` datetime DEFAULT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Cargo_idCargo` int(11) NOT NULL,
  `Apellido` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CI`),
  KEY `cargo-usuario` (`Cargo_idCargo`) USING BTREE,
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`Cargo_idCargo`) REFERENCES `cargo` (`idCargo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('123456','12345',NULL,'2022-05-17 00:00:00','prueba2',0,'apellidoprueba'),('14696849','12345','data:image/jpeg;base64,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','1999-12-02 00:00:00','Brian',0,'Fernandez');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31 14:44:12
