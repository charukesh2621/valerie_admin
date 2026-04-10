function DoctorHospitals({ hospitals, onSelectHospital }) {
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
          My Hospitals
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
          View your assigned hospitals and quickly access patient records for each location.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "20px",
          marginBottom: "28px",
        }}
      >
        <div style={summaryCardStyle}>
          <div style={blueIconStyle}>🏥</div>
          <h3 style={summaryTitleStyle}>Total Hospitals</h3>
          <p style={summaryValueStyle}>{hospitals.length}</p>
          <span style={summarySubTextStyle}>Assigned hospital locations</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={greenIconStyle}>👥</div>
          <h3 style={summaryTitleStyle}>Total Patients</h3>
          <p style={summaryValueStyle}>
            {hospitals.reduce((sum, hospital) => sum + hospital.patientCount, 0)}
          </p>
          <span style={summarySubTextStyle}>Patients across all hospitals</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={yellowIconStyle}>📍</div>
          <h3 style={summaryTitleStyle}>Coverage</h3>
          <p style={summaryValueStyle}>Active</p>
          <span style={summarySubTextStyle}>Multi-location doctor access</span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
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
                width: "52px",
                height: "52px",
                borderRadius: "16px",
                backgroundColor: "#eaf3ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px",
                fontSize: "24px",
              }}
            >
              🏥
            </div>

            <h3
              style={{
                margin: "0 0 8px 0",
                fontSize: "20px",
                fontWeight: "700",
                color: "#111827",
              }}
            >
              {hospital.name}
            </h3>

            <p
              style={{
                color: "#64748b",
                margin: "0 0 18px 0",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {hospital.location}
            </p>

            <div
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "14px 16px",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.3px",
                  marginBottom: "6px",
                }}
              >
                Patients
              </span>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
                {hospital.patientCount}
              </span>
            </div>

            <button
              onClick={() => onSelectHospital(hospital)}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                boxShadow: "0 10px 20px rgba(37, 99, 235, 0.18)",
              }}
            >
              View Patients
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const summaryCardStyle = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.06)",
  border: "1px solid #e5eef8",
};

const summaryTitleStyle = {
  margin: "0 0 8px 0",
  fontSize: "16px",
  fontWeight: "600",
  color: "#4b5563",
};

const summaryValueStyle = {
  margin: "0 0 6px 0",
  fontSize: "32px",
  fontWeight: "700",
  color: "#111827",
};

const summarySubTextStyle = {
  fontSize: "13px",
  color: "#6b7280",
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

export default DoctorHospitals;