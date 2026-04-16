import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [patients, setPatients] = useState([]);
  const [observations, setObservations] = useState([]);

  // Fetch Patients
  useEffect(() => {
    axios
      .get("http://localhost:8080/fhir/Patient")
      .then((res) => setPatients(res.data.entry || []))
      .catch((err) => console.error(err));
  }, []);

  // Fetch Observations
  useEffect(() => {
    axios
      .get("http://localhost:8080/fhir/Observation")
      .then((res) => setObservations(res.data.entry || []))
      .catch((err) => console.error(err));
  }, []);

  // Get observations for a patient
  const getPatientObservations = (patientId) => {
    return observations.filter((obs) =>
      obs.resource.subject?.reference === `Patient/${patientId}`
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>FHIR Patient Dashboard</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>ID</th>
            <th>Observations (Vitals)</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => {
            const patientId = p.resource.id;
            const patientObs = getPatientObservations(patientId);

            return (
              <tr key={patientId}>
                <td>
                  {p.resource.name?.[0]?.given?.join(" ")}{" "}
                  {p.resource.name?.[0]?.family}
                </td>
                <td>{p.resource.gender}</td>
                <td>{patientId}</td>

                <td>
                  {patientObs.length > 0 ? (
                    patientObs.map((obs, index) => (
                      <div key={index}>
                        {obs.resource.code?.text}:{" "}
                        {obs.resource.valueQuantity?.value}{" "}
                        {obs.resource.valueQuantity?.unit}
                      </div>
                    ))
                  ) : (
                    "No Observations"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;