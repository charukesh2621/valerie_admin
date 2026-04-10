function HighRiskPatients({ onViewCase }) {
  const highRiskPatients = [
    {
      id: "P001",
      name: "Rahul Sharma",
      age: 24,
      gender: "Male",
      symptoms: "Fever, Headache, Body Pain",
      aiResponse: "Possible viral infection with high fever risk",
      riskLevel: "High",
      status: "Pending Review",
    },
    {
      id: "P004",
      name: "Priya Nair",
      age: 29,
      gender: "Female",
      symptoms: "Chest Pain, Shortness of Breath",
      aiResponse: "Urgent cardiac evaluation recommended",
      riskLevel: "High",
      status: "Urgent",
    },
    {
      id: "P007",
      name: "Amit Verma",
      age: 41,
      gender: "Male",
      symptoms: "Severe Fatigue, Dizziness",
      aiResponse: "Possible anemia or blood pressure irregularity",
      riskLevel: "High",
      status: "Under Observation",
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
          High Risk Patients
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
            maxWidth: "820px",
            lineHeight: "1.7",
          }}
        >
          Patients requiring urgent attention and preventive follow-up.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <div style={blueIconStyle}>📋</div>
          <h3 style={cardTitleStyle}>Total High Risk</h3>
          <p style={cardValueStyle}>3</p>
          <span style={cardSubTextStyle}>Critical patient cases</span>
        </div>

        <div style={cardStyle}>
          <div style={redIconStyle}>🚨</div>
          <h3 style={cardTitleStyle}>Urgent Cases</h3>
          <p style={{ ...cardValueStyle, color: "#b91c1c" }}>1</p>
          <span style={cardSubTextStyle}>Immediate attention needed</span>
        </div>

        <div style={cardStyle}>
          <div style={yellowIconStyle}>⏳</div>
          <h3 style={cardTitleStyle}>Pending Review</h3>
          <p style={{ ...cardValueStyle, color: "#b45309" }}>1</p>
          <span style={cardSubTextStyle}>Awaiting doctor review</span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e5eef8",
          overflowX: "auto",
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <h2
            style={{
              margin: "0 0 6px 0",
              fontSize: "22px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            Risk Case Overview
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Review patient severity, symptoms, and current case status.
          </p>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "980px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <th style={tableHeaderStyle}>Patient ID</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Age</th>
              <th style={tableHeaderStyle}>Symptoms</th>
              <th style={tableHeaderStyle}>Risk Level</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {highRiskPatients.map((patient, index) => (
              <tr
                key={patient.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#fcfdff",
                }}
              >
                <td style={tableCellStyle}>
                  <span style={{ fontWeight: "600", color: "#2563eb" }}>
                    {patient.id}
                  </span>
                </td>
                <td style={tableCellStyle}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontWeight: "600", color: "#111827" }}>{patient.name}</span>
                    <span style={{ fontSize: "13px", color: "#6b7280" }}>{patient.gender}</span>
                  </div>
                </td>
                <td style={tableCellStyle}>{patient.age}</td>
                <td style={tableCellStyle}>{patient.symptoms}</td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "#fee2e2",
                      color: "#b91c1c",
                      padding: "7px 14px",
                      borderRadius: "999px",
                      fontWeight: "600",
                      fontSize: "13px",
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
                      fontWeight: "600",
                      fontSize: "13px",
                      backgroundColor:
                        patient.status === "Urgent"
                          ? "#fee2e2"
                          : patient.status === "Pending Review"
                          ? "#fef3c7"
                          : "#dbeafe",
                      color:
                        patient.status === "Urgent"
                          ? "#b91c1c"
                          : patient.status === "Pending Review"
                          ? "#b45309"
                          : "#1d4ed8",
                    }}
                  >
                    {patient.status}
                  </span>
                </td>
                <td style={tableCellStyle}>
                  <button
                    onClick={() => onViewCase(patient)}
                    style={buttonStyle}
                  >
                    View Case
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
  border: "1px solid #e5eef8",
};

const cardTitleStyle = {
  margin: "0 0 8px 0",
  color: "#4b5563",
  fontSize: "16px",
  fontWeight: "600",
};

const cardValueStyle = {
  margin: "0 0 6px 0",
  fontSize: "32px",
  fontWeight: "700",
  color: "#111827",
};

const cardSubTextStyle = {
  fontSize: "13px",
  color: "#6b7280",
};

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

const buttonStyle = {
  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
  color: "white",
  border: "none",
  padding: "10px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  boxShadow: "0 8px 18px rgba(37, 99, 235, 0.18)",
};

const blueIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  backgroundColor: "#eaf3ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  fontSize: "22px",
};

const redIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  backgroundColor: "#fee2e2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  fontSize: "22px",
};

const yellowIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  backgroundColor: "#fef3c7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
  fontSize: "22px",
};

export default HighRiskPatients;