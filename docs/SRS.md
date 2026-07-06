# Software Requirements Specification (SRS)

# Project Name

DIMAG

Disaster Intelligence Management and Assistance Grid

---

# Version

1.0

---

# Prepared By

K Eshwar

B.Tech Computer Science Engineering

---

# Project Type

AI Powered Disaster Response and Relief Management Platform
---

# 1. Problem Statement

Natural and man-made disasters such as floods, cyclones, earthquakes, fires, and landslides often lead to significant loss of life and property due to delayed communication, lack of coordination, and inefficient resource management. Existing disaster management applications primarily focus on providing alerts and weather updates but do not offer a unified platform for real-time incident reporting, rescue coordination, volunteer management, shelter monitoring, and relief distribution.

As a result, citizens struggle to communicate emergencies, rescue teams face challenges in prioritizing rescue operations, NGOs experience difficulties in managing relief resources, and government authorities lack centralized visibility of ongoing disaster situations.

Therefore, there is a need for an intelligent, centralized, and user-friendly disaster management platform that enables effective communication, real-time coordination, and data-driven decision-making among all stakeholders involved in disaster response and recovery.
---

# 2. Project Objectives

The primary objective of DIMAG is to develop an AI-powered Disaster Intelligence Management and Assistance Grid that improves disaster preparedness, emergency response, rescue coordination, and relief management through a unified digital platform.

The specific objectives are:

- To provide citizens with a platform to report disasters and request emergency assistance.
- To enable rescue teams to efficiently manage and respond to rescue operations.
- To assist NGOs in coordinating volunteers and managing relief resources.
- To provide government authorities with a centralized monitoring dashboard.
- To integrate Artificial Intelligence for intelligent rescue prioritization and incident analysis.
- To improve communication among all disaster response stakeholders.
- To provide real-time information regarding shelters, rescue operations, and disaster reports.
---

# 3. Project Scope

DIMAG is designed as a web-based disaster response and relief management platform that enables effective communication and coordination among citizens, rescue teams, NGOs, and government authorities during disaster situations.

The system provides facilities for disaster reporting, emergency SOS requests, rescue coordination, shelter management, volunteer management, resource monitoring, and disaster analytics through role-based dashboards.

The project focuses on improving disaster response efficiency by integrating Artificial Intelligence for rescue prioritization, incident summarization, and intelligent decision support.

The current scope of the project is limited to disaster response and relief management through a web application and does not include IoT devices, drone-based monitoring, or live satellite image processing.
---

# 4. Database Planning

## Users Table

| Field Name | Data Type | Description |
|------------|----------|-------------|
| id | Integer | Unique User ID |
| full_name | String | User's Full Name |
| email | String | User Login Email |
| password | String | Encrypted Password |
| phone | String | Contact Number |
| city | String | User City/District |
| role | String | Citizen, Rescue Team, NGO, Admin |
---

# 5. User Roles

The DIMAG system consists of the following user roles:

### 1. Citizen
- Register and log in
- Send SOS requests
- Report disasters
- View safe shelters
- Offer community help
- View personal requests

### 2. Rescue Team
- Log in
- View SOS requests
- Accept rescue requests
- Update rescue status

### 3. NGO
- Log in
- View help requests
- Manage available resources
- Coordinate volunteers

### 4. Administrator
- Manage users
- View all disaster reports
- Monitor rescue operations
- Manage shelters
- Generate reports
---

# 6. Functional Requirements

The DIMAG system shall provide the following functionalities:

1. User Registration and Login.
2. Send Emergency SOS requests.
3. Report disasters with description and image.
4. View available safe shelters.
5. Offer community help.
6. View personal request history.   
7. Rescue teams can manage SOS requests.
8. NGOs can manage help requests.
9. Administrators can manage users and disaster reports.
---

# 7. Non-Functional Requirements

The DIMAG system shall satisfy the following quality requirements:

1. The system shall provide secure user authentication.
2. The application shall be easy to use with a simple interface.
3. The system shall respond quickly to user requests.
4. The application shall be available 24/7 during emergencies.
5. User information shall be stored securely.
6. The system shall support future enhancements.
---

# 8. System Modules

The DIMAG system consists of the following modules:

### 1. Authentication Module
- User Registration
- User Login
- Role-based Access

### 2. Citizen Module
- Send SOS
- Report Disaster
- View Safe Zones
- Community Help
- View My Requests

### 3. Rescue Team Module
- View SOS Requests
- Accept Rescue Requests
- Update Rescue Status

### 4. NGO Module
- Manage Help Requests
- Update Resource Availability

### 5. Administrator Module
- Manage Users
- Manage Disaster Reports
- Monitor Overall System
---

# 9. Technology Stack

The DIMAG system will be developed using the following technologies:

| Component | Technology |
|-----------|------------|
| Frontend | React.js |
| Backend | Spring Boot |
| Database | MySQL |
| AI Integration | OpenAI API |
| Version Control | Git & GitHub |
| Development Environment | Visual Studio Code |
---

# 10. Database Design

## Table 1: Users

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| user_id | INT | Unique User ID |
| full_name | VARCHAR(100) | User Full Name |
| email | VARCHAR(100) | User Email Address |
| password | VARCHAR(255) | Encrypted Password |
| phone | VARCHAR(15) | Contact Number |
| city | VARCHAR(100) | City/District |
| role | VARCHAR(20) | Citizen, Rescue Team, NGO, Admin |
## Table 2: SOS_Requests

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| sos_id | INT | Unique SOS Request ID |
| user_id | INT | User who sent the SOS |
| injured | BOOLEAN | Is the user injured? |
| people_count | INT | Number of people with the user |
| medical_help | BOOLEAN | Medical help required |
| message | TEXT | Optional emergency message |
| status | VARCHAR(20) | Pending, Accepted, Completed |