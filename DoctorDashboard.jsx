function DoctorDashboard({ doctor, hospitals, onOpenHospitals }) {
  const totalPatients = hospitals.reduce(
    (sum, hospital) => sum + hospital.patientCount,
    0
  );

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
          Doctor Workspace
        </p>
        <h1
          style={{
            margin: "0 0 10px 0",
            fontSize: "34px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Doctor Dashboard
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#6b7280",
          }}
        >
          Welcome, {doctor.name} ({doctor.specialization})
        </p>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
          borderRadius: "22px",
          padding: "28px",
          color: "#ffffff",
          boxShadow: "0 16px 40px rgba(37, 99, 235, 0.18)",
          marginBottom: "28px",
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: "14px",
            fontWeight: "600",
            opacity: 0.9,
          }}
        >
          Daily Overview
        </p>
        <h2
          style={{
            margin: "0 0 10px 0",
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          Manage hospitals, patients, and follow-ups from one place
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: "15px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.88)",
            maxWidth: "700px",
          }}
        >
          Track patient load across your assigned hospitals and quickly access important care updates through a clean dashboard layout.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <div style={iconBoxBlue}>🏥</div>
          <h3 style={cardTitleStyle}>Hospitals</h3>
          <p style={cardValueStyle}>{hospitals.length}</p>
          <span style={cardSubTextStyle}>Assigned hospital locations</span>
        </div>

        <div style={cardStyle}>
          <div style={iconBoxGreen}>👥</div>
          <h3 style={cardTitleStyle}>Total Patients</h3>
          <p style={cardValueStyle}>{totalPatients}</p>
          <span style={cardSubTextStyle}>Patients across all hospitals</span>
        </div>

        <div style={cardStyle}>
          <div style={iconBoxRed}>🚨</div>
          <h3 style={cardTitleStyle}>High Risk Cases</h3>
          <p style={{ ...cardValueStyle, color: "#dc2626" }}>4</p>
          <span style={cardSubTextStyle}>Cases needing urgent review</span>
        </div>

        <div style={cardStyle}>
          <div style={iconBoxYellow}>📅</div>
          <h3 style={cardTitleStyle}>Today&apos;s Follow-ups</h3>
          <p style={cardValueStyle}>3</p>
          <span style={cardSubTextStyle}>Scheduled follow-up tasks</span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
          border: "1px solid #e5eef8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "22px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            Hospital Access
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#6b7280",
              lineHeight: "1.6",
              maxWidth: "650px",
            }}
          >
            Open your assigned hospitals to view patient lists, monitor cases, and continue treatment follow-up from the dashboard.
          </p>
        </div>

        <button
          onClick={onOpenHospitals}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
            color: "white",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            boxShadow: "0 10px 20px rgba(37, 99, 235, 0.18)",
          }}
        >
          View My Hospitals
        </button>
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
  fontSize: "16px",
  fontWeight: "600",
  color: "#4b5563",
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

const iconBoxBlue = {
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

const iconBoxGreen = {
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

const iconBoxRed = {
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

const iconBoxYellow = {
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

export default DoctorDashboard;