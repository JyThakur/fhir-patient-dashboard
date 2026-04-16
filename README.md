# 🏥 FHIR Patient Management API + Dashboard

A full-stack healthcare interoperability project built using **FHIR R4 standards**.
This application demonstrates how to deploy and interact with a **FHIR-compliant backend** using Docker, PostgreSQL, and an optional React dashboard UI.

---

# 🚀 Project Highlights

* FHIR-compliant REST API using HAPI FHIR
* Patient resource management (Create / Read / Update / Delete)
* Observation resource support (vitals / clinical data)
* Dockerized backend with PostgreSQL
* React frontend dashboard for patient display
* API testing using Visual Studio Code REST Client

---

# 🧰 Tech Stack

| Layer            | Technology                     |
| ---------------- | ------------------------------ |
| Backend          | HAPI FHIR (Java / Spring Boot) |
| Database         | PostgreSQL                     |
| Frontend         | React                          |
| API Testing      | VS Code REST Client / curl     |
| Containerization | Docker / Docker Compose        |

---

# 🏗️ Architecture

```text
Frontend Dashboard (React)
        ↓
FHIR REST API (HAPI FHIR Server)
        ↓
PostgreSQL Database
```

---

# 📁 Project Structure

```text
fhir-patient-dashboard/
├── backend/              # HAPI FHIR backend server
├── frontend/             # React dashboard UI
├── requests.http         # API requests for VS Code REST Client
├── screenshots/          # Project screenshots
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/JyThakur/fhir-patient-dashboard.git
cd fhir-patient-dashboard
```

---

## 2. Start Backend

```bash
cd backend
docker compose up -d --build
```

FHIR API available at:

```text
http://localhost:8080/fhir
```

---

## 3. Start Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend UI available at:

```text
http://localhost:3000
```

---

# 📸 Screenshots

## Dashboard UI

### Patient Dashboard (Multiple Patients)

![Dashboard Main](screenshots/dashboard-main.png)

### Dashboard After Update Operation

![Dashboard After Delete](screenshots/dashboard-main-update.png)

### Dashboard After Delete Operation

![Dashboard After Delete](screenshots/dashboard-main-delete.png)

---

## API Testing in VS Code

### Create Patient — HTTP 201 Created

![Create Patient](screenshots/api-post-201.png)

### Get Patient — HTTP 200 OK

![Get Patient](screenshots/api-get-200.png)

### Update Patient — HTTP 200 OK

![Update Patient](screenshots/api-put-200.png)

### Delete Patient — HTTP 200 OK

![Delete Patient](screenshots/api-delete-200.png)

---

# 🔌 API Examples

## Create Patient

```http
POST http://localhost:8080/fhir/Patient
Content-Type: application/fhir+json

{
  "resourceType": "Patient",
  "name": [
    {
      "family": "Smith",
      "given": ["John"]
    }
  ],
  "gender": "male",
  "birthDate": "1995-12-21"
}
```

---

## Get Patient by Name

```http
GET http://localhost:8080/fhir/Patient?name=Smith
```

---

## Update Patient

```http
PUT http://localhost:8080/fhir/Patient/1000
Content-Type: application/fhir+json

{
  "resourceType": "Patient",
  "id": "1000",
  "name": [
    {
      "family": "Smith",
      "given": ["John"]
    }
  ],
  "gender": "male",
  "birthDate": "1995-12-21"
}
```

---

## Delete Patient

```http
DELETE http://localhost:8080/fhir/Patient/1000
```

---

# 📊 Frontend Dashboard Features

* Display patient list
* Show Name / Gender / ID
* Fetch live data from backend
* Ready for charts using Recharts
* Extendable for Observations / Vitals

---

# 🧪 API Testing in VS Code

1. Open project in Visual Studio Code
2. Install **REST Client** extension
3. Open `requests.http`
4. Click **Send Request**

---

# 🗄️ Database Access

```bash
docker exec -it hapi-fhir-postgres psql -U admin -d hapi
```

List tables:

```sql
\dt
```

---

# 🛑 Stop Project

Backend:

```bash
docker compose down
```

Frontend:

```bash
Ctrl + C
```

---

# 🧠 Key Learnings

* FHIR healthcare interoperability standards
* RESTful API design
* Dockerized deployments
* PostgreSQL integration
* React frontend integration
* Real-world healthcare data workflows

---

# 🚀 Future Improvements

* Observation charts (Heart Rate / BP trends)
* Authentication / SMART on FHIR
* Cloud deployment (AWS / Azure)
* Search filters in dashboard
* Patient detail page

---

# 👤 Author

**Jay Thakur**

GitHub: https://github.com/JyThakur

---

# ⭐ If You Found This Useful

Give this repository a star.
