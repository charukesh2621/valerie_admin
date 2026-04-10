function PatientList({ onViewPatient }) {
  const patients = [
    {
      id: "P001",
      name: "Rahul Sharma",
      age: 24,
      gender: "Male",
      symptoms: "Fever, Headache",
      aiResponse: "Possible viral infection",
      riskLevel: "High",
      status: "Pending",
    },
    {
      id: "P002",
      name: "Sneha Reddy",
      age: 21,
      gender: "Female",
      symptoms: "Cough, Cold",
      aiResponse: "Mild respiratory infection",
      riskLevel: "Medium",
      status: "Reviewed",
    },
    {
      id: "P003",
      name: "Arjun Patel",
      age: 27,
      gender: "Male",
      symptoms: "Fatigue",
      aiResponse: "Possible low immunity or stress",
      riskLevel: "Low",
      status: "Pending",
    },
    {
      id: "P004",
      name: "Priya Nair",
      age: 29,
      gender: "Female",
      symptoms: "Chest Pain",
      aiResponse: "Urgent cardiac screening recommended",
      riskLevel: "High",
      status: "Reviewed",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f8fbff 0%, #f4f7fb 100%)",
        padding: "32px",
      }}
    >
      <div style={{ marginBottom: "28px" }}>
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: "14px",
            fontWeight: "600",
            color: "#3b82f6",
            letterSpacing: "0.4px",
          }}
        >
          Healthcare Admin Panel
        </p>
        <h1
          style={{
            margin: "0 0 10px 0",
            fontSize: "34px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Patient List
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
          }}
        >
          Review patient details, symptoms, risk levels, and current case status.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e5eef8",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "22px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 6px 0",
                fontSize: "22px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              All Patients
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              Total records: {patients.length}
            </p>
          </div>

          <div
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              backgroundColor: "#eff6ff",
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            Updated List
          </div>
        </div>

        <div
          style={{
            overflowX: "auto",
            borderRadius: "16px",
            border: "1px solid #edf2f7",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#ffffff",
              minWidth: "900px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <th style={tableHeaderStyle}>Patient ID</th>
                <th style={tableHeaderStyle}>Name</th>
                <th style={tableHeaderStyle}>Symptoms</th>
                <th style={tableHeaderStyle}>Risk Level</th>
                <th style={tableHeaderStyle}>Status</th>
                <th style={tableHeaderStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr
                  key={patient.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ffffff" : "#fcfdff",
                  }}
                >
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        fontWeight: "600",
                        color: "#2563eb",
                      }}
                    >
                      {patient.id}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontWeight: "600", color: "#111827" }}>{patient.name}</span>
                      <span style={{ fontSize: "13px", color: "#6b7280" }}>
                        {patient.age} yrs • {patient.gender}
                      </span>
                    </div>
                  </td>
                  <td style={tableCellStyle}>{patient.symptoms}</td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "7px 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "600",
                        backgroundColor:
                          patient.riskLevel === "High"
                            ? "#fee2e2"
                            : patient.riskLevel === "Medium"
                            ? "#fef3c7"
                            : "#e0f2fe",
                        color:
                          patient.riskLevel === "High"
                            ? "#dc2626"
                            : patient.riskLevel === "Medium"
                            ? "#b45309"
                            : "#0369a1",
                      }}
                    >
                      {patient.riskLevel}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "7px 14px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "600",
                        backgroundColor:
                          patient.status === "Reviewed" ? "#dcfce7" : "#fff7ed",
                        color: patient.status === "Reviewed" ? "#15803d" : "#ea580c",
                      }}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td style={tableCellStyle}>
                    <button
                      onClick={() => onViewPatient(patient)}
                      style={{
                        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                        color: "#ffffff",
                        border: "none",
                        padding: "10px 16px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "600",
                        boxShadow: "0 8px 18px rgba(37, 99, 235, 0.18)",
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  textAlign: "left",
  padding: "16px 18px",
  borderBottom: "1px solid #e5e7eb",
  color: "#475569",
  fontSize: "14px",
  fontWeight: "600",
};

const tableCellStyle = {
  padding: "18px",
  borderBottom: "1px solid #eef2f7",
  color: "#111827",
  fontSize: "14px",
  verticalAlign: "middle",
};

export default PatientList;