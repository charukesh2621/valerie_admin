import { useState } from "react";

function PrescriptionManagement() {
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const prescriptions = [
    {
      id: "PR001",
      patientName: "Rahul Sharma",
      medicine: "Paracetamol",
      dosage: "500mg",
      frequency: "2 times/day",
      duration: "5 days",
      doctor: "Dr. Mehta",
      status: "Active",
    },
    {
      id: "PR002",
      patientName: "Sneha Reddy",
      medicine: "Cough Syrup",
      dosage: "10ml",
      frequency: "1 time/day",
      duration: "7 days",
      doctor: "Dr. Priya",
      status: "Active",
    },
    {
      id: "PR003",
      patientName: "Priya Nair",
      medicine: "Vitamin D",
      dosage: "1 tablet",
      frequency: "1 time/day",
      duration: "30 days",
      doctor: "Dr. Mehta",
      status: "Completed",
    },
    {
      id: "PR004",
      patientName: "Amit Verma",
      medicine: "Iron Supplement",
      dosage: "1 capsule",
      frequency: "1 time/day",
      duration: "15 days",
      doctor: "Dr. Rakesh",
      status: "Pending",
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
          Prescription Management
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
            maxWidth: "800px",
            lineHeight: "1.7",
          }}
        >
          View and manage prescriptions assigned by doctors through a clean and professional dashboard interface.
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
          <div style={blueIconStyle}>📄</div>
          <h3 style={cardTitleStyle}>Total Prescriptions</h3>
          <p style={cardValueStyle}>18</p>
          <span style={cardSubTextStyle}>All prescription records</span>
        </div>

        <div style={cardStyle}>
          <div style={greenIconStyle}>💊</div>
          <h3 style={cardTitleStyle}>Active Prescriptions</h3>
          <p style={{ ...cardValueStyle, color: "#15803d" }}>10</p>
          <span style={cardSubTextStyle}>Currently ongoing medications</span>
        </div>

        <div style={cardStyle}>
          <div style={yellowIconStyle}>🕒</div>
          <h3 style={cardTitleStyle}>Pending Review</h3>
          <p style={{ ...cardValueStyle, color: "#b45309" }}>4</p>
          <span style={cardSubTextStyle}>Prescriptions awaiting review</span>
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
          marginBottom: "24px",
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
            Prescription Overview
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#6b7280",
            }}
          >
            Review patient prescriptions, assigned doctors, medication details, and current status.
          </p>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "1050px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f8fafc" }}>
              <th style={tableHeaderStyle}>Prescription ID</th>
              <th style={tableHeaderStyle}>Patient Name</th>
              <th style={tableHeaderStyle}>Medicine</th>
              <th style={tableHeaderStyle}>Dosage</th>
              <th style={tableHeaderStyle}>Frequency</th>
              <th style={tableHeaderStyle}>Duration</th>
              <th style={tableHeaderStyle}>Doctor</th>
              <th style={tableHeaderStyle}>Status</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription, index) => (
              <tr
                key={prescription.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#fcfdff",
                }}
              >
                <td style={tableCellStyle}>
                  <span style={{ fontWeight: "600", color: "#2563eb" }}>
                    {prescription.id}
                  </span>
                </td>
                <td style={tableCellStyle}>{prescription.patientName}</td>
                <td style={tableCellStyle}>{prescription.medicine}</td>
                <td style={tableCellStyle}>{prescription.dosage}</td>
                <td style={tableCellStyle}>{prescription.frequency}</td>
                <td style={tableCellStyle}>{prescription.duration}</td>
                <td style={tableCellStyle}>{prescription.doctor}</td>
                <td style={tableCellStyle}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "7px 14px",
                      borderRadius: "999px",
                      fontWeight: "600",
                      fontSize: "13px",
                      backgroundColor:
                        prescription.status === "Active"
                          ? "#dcfce7"
                          : prescription.status === "Pending"
                          ? "#fef3c7"
                          : "#dbeafe",
                      color:
                        prescription.status === "Active"
                          ? "#15803d"
                          : prescription.status === "Pending"
                          ? "#b45309"
                          : "#1d4ed8",
                    }}
                  >
                    {prescription.status}
                  </span>
                </td>
                <td style={tableCellStyle}>
                  <button
                    style={buttonStyle}
                    onClick={() => setSelectedPrescription(prescription)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedPrescription && (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
            border: "1px solid #e5eef8",
            maxWidth: "760px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "18px",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2
                style={{
                  margin: "0 0 6px 0",
                  color: "#111827",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                Prescription Details
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                Review the selected prescription information.
              </p>
            </div>

            <button
              onClick={() => setSelectedPrescription(null)}
              style={{
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                boxShadow: "0 8px 18px rgba(239, 68, 68, 0.18)",
              }}
            >
              Close
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Prescription ID</span>
              <span style={detailValueStyle}>{selectedPrescription.id}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Patient Name</span>
              <span style={detailValueStyle}>{selectedPrescription.patientName}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Medicine</span>
              <span style={detailValueStyle}>{selectedPrescription.medicine}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Dosage</span>
              <span style={detailValueStyle}>{selectedPrescription.dosage}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Frequency</span>
              <span style={detailValueStyle}>{selectedPrescription.frequency}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Duration</span>
              <span style={detailValueStyle}>{selectedPrescription.duration}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Doctor</span>
              <span style={detailValueStyle}>{selectedPrescription.doctor}</span>
            </div>

            <div style={detailBoxStyle}>
              <span style={detailLabelStyle}>Status</span>
              <span style={detailValueStyle}>{selectedPrescription.status}</span>
            </div>
          </div>
        </div>
      )}
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

const greenIconStyle = {
  width: "48px",
  height: "48px",
  borderRadius: "14px",
  backgroundColor: "#eefaf3",
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

const detailBoxStyle = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: "14px",
  padding: "14px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

const detailLabelStyle = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.3px",
};

const detailValueStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#111827",
};

export default PrescriptionManagement;