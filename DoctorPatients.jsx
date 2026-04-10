function DoctorPatients({ hospital, patients = [], onViewPatient }) {
  if (!hospital) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f8fbff 0%, #f4f7fb 100%)",
          padding: "32px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
            border: "1px solid #e5eef8",
            maxWidth: "720px",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "24px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            No hospital selected
          </h2>
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            Please select a hospital first to view patients.
          </p>
        </div>
      </div>
    );
  }

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
          {hospital.name} - Patients
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
          Patients treated by this doctor in {hospital.name}
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
          <div style={blueIconStyle}>👥</div>
          <h3 style={summaryTitleStyle}>Total Patients</h3>
          <p style={summaryValueStyle}>{patients.length}</p>
          <span style={summarySubTextStyle}>Patients in this hospital</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={redIconStyle}>🚨</div>
          <h3 style={summaryTitleStyle}>High Risk Cases</h3>
          <p style={summaryValueStyle}>
            {patients.filter((patient) => patient.riskLevel === "High").length}
          </p>
          <span style={summarySubTextStyle}>Cases needing extra attention</span>
        </div>

        <div style={summaryCardStyle}>
          <div style={greenIconStyle}>🏥</div>
          <h3 style={summaryTitleStyle}>Hospital Unit</h3>
          <p style={summaryValueStyle}>Active</p>
          <span style={summarySubTextStyle}>{hospital.name}</span>
        </div>
      </div>

      {patients.length === 0 ? (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "20px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
            border: "1px solid #e5eef8",
            maxWidth: "720px",
          }}
        >
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "22px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            No patients found
          </h3>
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            There are currently no patients available for this hospital.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "18px" }}>
          {patients.map((patient) => (
            <div
              key={patient.id}
              style={{
                backgroundColor: "#ffffff",
                padding: "22px",
                borderRadius: "20px",
                boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
                border: "1px solid #e5eef8",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: "280px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "14px",
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
                      fontSize: "24px",
                    }}
                  >
                    🧑
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: "0 0 4px 0",
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#111827",
                      }}
                    >
                      {patient.name}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      Patient ID: {patient.id}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "12px",
                  }}
                >
                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Age</span>
                    <span style={detailValueStyle}>{patient.age}</span>
                  </div>

                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Condition</span>
                    <span style={detailValueStyle}>{patient.condition}</span>
                  </div>

                  <div style={detailBoxStyle}>
                    <span style={detailLabelStyle}>Risk Level</span>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "7px 12px",
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: "600",
                        backgroundColor:
                          patient.riskLevel === "High"
                            ? "#fee2e2"
                            : patient.riskLevel === "Medium"
                            ? "#fef3c7"
                            : "#dcfce7",
                        color:
                          patient.riskLevel === "High"
                            ? "#b91c1c"
                            : patient.riskLevel === "Medium"
                            ? "#b45309"
                            : "#15803d",
                        alignSelf: "flex-start",
                      }}
                    >
                      {patient.riskLevel}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onViewPatient(patient)}
                style={{
                  padding: "12px 18px",
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
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
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
  lineHeight: "1.6",
};

export default DoctorPatients;