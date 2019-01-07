-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2019 at 08:36 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ostoslista_2`
--
CREATE DATABASE IF NOT EXISTS `ostoslista_2` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE `ostoslista_2`;

-- --------------------------------------------------------

--
-- Table structure for table `kayttajat`
--

CREATE TABLE `kayttajat` (
  `id` int(11) NOT NULL,
  `tunnus` text COLLATE utf8_swedish_ci NOT NULL,
  `salasana` text COLLATE utf8_swedish_ci NOT NULL,
  `sahkoposti` text COLLATE utf8_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `kayttajat`
--

INSERT INTO `kayttajat` (`id`, `tunnus`, `salasana`, `sahkoposti`) VALUES
(1, 'testaaja', '11a4768865778cd8a703e0173d2851d52a0fef8598071a950dec22d82f8ab92cc3cef94c6acd780838d6bcdce199b7012d7b1babaae0e4f6d1bb8d38b5699271', 'jokuposti@hotmail.com'),
(2, 'testaaja2', '994677ec25df2373011e845be6844a1e6808086ce917d6c0ab20258209600acb6bcf5aac2d6e252fc083a0cbefb91d361d43346f09ae6138dfebc4234887d949', 'jokuposti@hotmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `listat`
--

CREATE TABLE `listat` (
  `id` int(11) NOT NULL,
  `nimi` text COLLATE utf8_swedish_ci NOT NULL,
  `kayttajaId` int(11) NOT NULL,
  `jaettuKayttaja` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `listat`
--

INSERT INTO `listat` (`id`, `nimi`, `kayttajaId`, `jaettuKayttaja`) VALUES
(1, 'testi lista', 2, NULL),
(5, 'ensimmäinen lista', 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sisalto`
--

CREATE TABLE `sisalto` (
  `id` int(11) NOT NULL,
  `listaId` int(11) NOT NULL,
  `sisalto` text COLLATE utf8_swedish_ci NOT NULL,
  `ostettu` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Dumping data for table `sisalto`
--

INSERT INTO `sisalto` (`id`, `listaId`, `sisalto`, `ostettu`) VALUES
(1, 1, 'Leikelettä', 0),
(2, 1, 'Maitoa', 0),
(6, 1, 'Jäätelöä', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kayttajat`
--
ALTER TABLE `kayttajat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listat`
--
ALTER TABLE `listat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kayttajaId` (`kayttajaId`);

--
-- Indexes for table `sisalto`
--
ALTER TABLE `sisalto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `listaId` (`listaId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kayttajat`
--
ALTER TABLE `kayttajat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `listat`
--
ALTER TABLE `listat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `sisalto`
--
ALTER TABLE `sisalto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `listat`
--
ALTER TABLE `listat`
  ADD CONSTRAINT `listat_ibfk_1` FOREIGN KEY (`kayttajaId`) REFERENCES `sisalto` (`id`);

--
-- Constraints for table `sisalto`
--
ALTER TABLE `sisalto`
  ADD CONSTRAINT `sisalto_ibfk_1` FOREIGN KEY (`listaId`) REFERENCES `listat` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
