-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 02-04-2019 a las 11:31:12
-- Versión del servidor: 5.6.41
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `numralco_iat`
--
CREATE DATABASE IF NOT EXISTS `numralco_iat` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `numralco_iat`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `general`
--

DROP TABLE IF EXISTS `general`;
CREATE TABLE `general` (
  `ID` text COLLATE utf8_unicode_ci,
  `TIME` text COLLATE utf8_unicode_ci,
  `STATUS` text COLLATE utf8_unicode_ci,
  `ROUND_ORDER` int(11) DEFAULT NULL,
  `END_TIME` text COLLATE utf8_unicode_ci,
  `q0` text COLLATE utf8_unicode_ci,
  `q1` text COLLATE utf8_unicode_ci,
  `q2` text COLLATE utf8_unicode_ci,
  `q3` text COLLATE utf8_unicode_ci,
  `q4` text COLLATE utf8_unicode_ci,
  `q5` text COLLATE utf8_unicode_ci,
  `q6` text COLLATE utf8_unicode_ci,
  `q7` text COLLATE utf8_unicode_ci,
  `q8` text COLLATE utf8_unicode_ci,
  `q9` text COLLATE utf8_unicode_ci,
  `q10` text COLLATE utf8_unicode_ci,
  `q11` text COLLATE utf8_unicode_ci,
  `q12` text COLLATE utf8_unicode_ci,
  `q13` text COLLATE utf8_unicode_ci,
  `q14` text COLLATE utf8_unicode_ci,
  `q15` text COLLATE utf8_unicode_ci,
  `q16` text COLLATE utf8_unicode_ci,
  `q17` text COLLATE utf8_unicode_ci,
  `q18` text COLLATE utf8_unicode_ci,
  `q19` text COLLATE utf8_unicode_ci,
  `q20` text COLLATE utf8_unicode_ci,
  `q21` text COLLATE utf8_unicode_ci,
  `q22` text COLLATE utf8_unicode_ci,
  `q23` text COLLATE utf8_unicode_ci,
  `q24` text COLLATE utf8_unicode_ci,
  `q25` text COLLATE utf8_unicode_ci,
  `q26` text COLLATE utf8_unicode_ci,
  `q27` text COLLATE utf8_unicode_ci,
  `q28` text COLLATE utf8_unicode_ci,
  `q29` text COLLATE utf8_unicode_ci,
  `q30` text COLLATE utf8_unicode_ci,
  `q31` text COLLATE utf8_unicode_ci,
  `q32` text COLLATE utf8_unicode_ci,
  `q33` text COLLATE utf8_unicode_ci,
  `q34` text COLLATE utf8_unicode_ci,
  `q35` text COLLATE utf8_unicode_ci,
  `q36` text COLLATE utf8_unicode_ci,
  `q37` text COLLATE utf8_unicode_ci,
  `q38` text COLLATE utf8_unicode_ci,
  `q39` text COLLATE utf8_unicode_ci,
  `q40` text COLLATE utf8_unicode_ci,
  `q41` text COLLATE utf8_unicode_ci,
  `q42` text COLLATE utf8_unicode_ci,
  `q43` text COLLATE utf8_unicode_ci,
  `q44` text COLLATE utf8_unicode_ci,
  `q45` text COLLATE utf8_unicode_ci,
  `q46` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `iat_results`
--

DROP TABLE IF EXISTS `iat_results`;
CREATE TABLE `iat_results` (
  `TRIAL` int(11) DEFAULT NULL,
  `ROUND` int(11) DEFAULT NULL,
  `CAT_LAB` text COLLATE utf8_unicode_ci,
  `STIMULI` text COLLATE utf8_unicode_ci,
  `ERRORS` int(11) DEFAULT NULL,
  `REACTION` double DEFAULT NULL,
  `ID` text COLLATE utf8_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
