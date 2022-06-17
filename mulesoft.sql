-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 17, 2022 at 06:24 PM
-- Server version: 5.7.34-log
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mulesoft`
--

-- --------------------------------------------------------

--
-- Table structure for table `Movies`
--

CREATE TABLE `Movies` (
  `name` varchar(255) DEFAULT NULL,
  `actor` varchar(255) DEFAULT NULL,
  `actress` varchar(255) DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Movies`
--

INSERT INTO `Movies` (`name`, `actor`, `actress`, `director`, `year`) VALUES
('K.G.F: Chapter 2', 'Yash', 'Shrinidhi', 'Prashanth Neel', 2022),
('RRR', 'Ram Charan', 'Alia Bhatt', 'S. S. Rajamouli', 2022),
('Pushpa: The Rise - Part 1', 'Allu Arjun', 'Rashmika Mandanna', 'Sukumar', 2021),
('Ala Vaikunthapurramulao', 'Allu Arjun', 'Pooja Hegde', 'Trivikram Srinivas', 2020),
('Kotigobba 3', 'Sudeep', 'Madonna Sebastian', 'Shiva Karthik', 2021),
('Master', 'Thalapathy Vijay', 'Malvika Mohanan', 'Lokesh Kanagaraj', 2021),
('Sarileru Neekavaru', 'Mahesh Babu', 'Rashmika Mandanna', 'Anil Ravipudi', 2020),
('Roberrt', 'Darshan Thoogudeep', 'Asha Bhat', 'Tarun Sudhir', 2021);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
